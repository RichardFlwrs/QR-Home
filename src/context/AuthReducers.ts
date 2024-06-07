import { IAuthUser } from "Interfaces/IAuth";
import { ProductActions, ShoppingCartActions } from "./reducers";

type ActionMap<M extends { [index: string]: any }> = {
   [Key in keyof M]: M[Key] extends undefined
   ? {
      type: Key;
   }
   : {
      type: Key;
      payload: M[Key];
   }
};

export enum Types {
   ERROR = "ADD_ERROR",
   SIGNIN = "SIGNIN",
   SIGNOUT = "SIGNOUT",
   CLEAR_ERROR = "CLEAR_ERROR"
}

type AuthPayload = {
   [Types.ERROR]: string;
   [Types.CLEAR_ERROR]: undefined;
   [Types.SIGNIN]: string;
   [Types.SIGNOUT]: undefined;
};

export type AuthActions = ActionMap<AuthPayload>[keyof ActionMap<
   AuthPayload
>];

export const authReducer = (
   state: IAuthUser,
   action: AuthActions | ProductActions | ShoppingCartActions
) => {
   switch (action.type) {
      case Types.CLEAR_ERROR:
         return { ...state, errorMessage: '' };
      case Types.ERROR:
         return { ...state, errorMessage: action.payload };
      case Types.SIGNIN:
         return { ...state, token: action.payload };
      case Types.SIGNOUT:
         return { token: '', id: 0, errorMessage: '' } as IAuthUser;
      default:
         return state;
   }
};