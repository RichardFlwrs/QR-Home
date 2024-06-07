/**
 * File to fix the error message of "Argument of type '[string]' is not assignable to parameter of type 'never'"
 * We need to wrapp the navigation function to accept the plan string 
 */
import { NavigationProp, ParamListBase } from '@react-navigation/native';

declare global {
    namespace ReactNavigation {
        interface RootParamList extends ParamListBase { }
    }
}

export function useNavigation<
    T extends NavigationProp
>(): T;