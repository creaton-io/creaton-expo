import { ActionType } from '../action-types';

interface LoginUserAction {
  type: ActionType.LOGIN_USER;
}

interface LoginUserSuccessAction {
  type: ActionType.LOGIN_USER_SUCCESS;
  payload: string;
}

interface LoginUserErrorAction {
  type: ActionType.LOGIN_USER_ERROR;
  payload: string;
}

export type Action =
  | LoginUserAction
  | LoginUserSuccessAction
  | LoginUserErrorAction;
