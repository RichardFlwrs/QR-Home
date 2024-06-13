import React, { createContext, useReducer, Dispatch, ReactNode } from "react";
import {
   productReducer,
   shoppingCartReducer,
   ProductActions,
   ShoppingCartActions
} from "./reducers";
import { IAuthUser } from "Interfaces/IAuth";
import { AuthActions, authReducer } from "./AuthReducers";

type ProductType = {
   id: number;
   name: string;
   price: number;
};

interface InitialStateType {
   products: ProductType[];
   shoppingCart: number;
   auth: IAuthUser
};


/**
 * 
 *    {STATE}
 * All useful data that will be share with all components
 */
const initialState: InitialStateType = {
   products: [],
   shoppingCart: 0,
   auth: {
      id: 0,
      token: '',
      errorMessage: '',
      image: ''
   }
};

/**
 * 
 *    { REDUCER }
 * Handles all the states properties
 */
const mainReducer = (
   { products, shoppingCart, auth }: InitialStateType,
   action: ProductActions | ShoppingCartActions | AuthActions
) => ({
   products: productReducer(products, action),
   shoppingCart: shoppingCartReducer(shoppingCart, action),
   auth: authReducer(auth, action)
});


const AppContext = createContext<{
   state: InitialStateType;
   dispatch: Dispatch<ProductActions | ShoppingCartActions | AuthActions>;
}>({
   state: initialState,
   dispatch: () => null
});


const AppProvider = ({ children }: any) => {
   const [state, dispatch] = useReducer(mainReducer, initialState);

   return (
      <AppContext.Provider value={{ state, dispatch }}>
         {children}
      </AppContext.Provider>
   );
};

export { AppProvider, AppContext };
