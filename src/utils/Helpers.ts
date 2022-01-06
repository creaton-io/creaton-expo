interface HandleInputInterface {
  key: string;
  value: string;
  setForm: any;
  index?: string;
}

interface HandleValidateForm {
  form: {};
  setForm: any;
}

const validateEmail = (email: string) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateForm = ({ form, setForm }: HandleValidateForm) => {
  // handleValidation
  const _handleValidation = (
    _form: { [s: string]: unknown } | ArrayLike<unknown>
  ) => {
    Object.entries(_form).map(([inputName, inputObject]) => {
      // Loop each input of the form
      inputObject.errorMessage = '';

      // Loop the validators of the input and stop the loop if one validator failed
      // Notice we used "some" instead of "map"
      const validators = inputObject.validators || [];
      validators.some((validator, index) => {
        const isValid = validator(inputObject.value);
        if (!isValid) {
          _form[inputName].errorMessage =
            _form[inputName].errorMessages[index] || 'Invalid input';
          formHasError = true;
          return true;
        }
      });
    });
  };
  let formHasError = false;
  // Multiple
  if (Array.isArray(form)) {
    const _form = form.map((__form) => {
      let _form = { ...__form };
      _handleValidation(_form, true);
      return _form;
    });
    setForm(_form);
    return formHasError;
  }

  // Single
  let _form = { ...form };
  _handleValidation(_form);
  setForm(_form);
  return formHasError;
};

const handleInputChange = ({
  key,
  value,
  setForm,
  index,
}: HandleInputInterface) => {
  setForm((form) => {
    if (Array.isArray(form)) {
      let _form = form.map((__form, _index) => {
        let ___form = { ...__form };
        ___form[key] = { ...___form[key] };
        if (index == _index) {
          ___form[key].value = value;
        }
        return ___form;
      });
      return _form;
    } else {
      let _form = { ...form };
      _form[key] = { ..._form[key] };
      _form[key].value = value;
      return _form;
    }
  });
};

export default {
  validateEmail,
  validateForm,
  handleInputChange,
};
