import { Action } from '../actions';

interface TestState {
  loading: boolean;
  error: string | null;
}

const initialState = {
  loading: false,
  error: null,
};

const reducer = (
  state: TestState = initialState,
  action: Action
): TestState => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
