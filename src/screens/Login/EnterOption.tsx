import { CommonActions, useNavigation } from '@react-navigation/native';
import React from 'react'
import { ImageBackground, KeyboardAvoidingView, Platform, SafeAreaView, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { saveToken } from 'api/localStorage/contactStorage';
import { httpLogin } from 'api/mongodb/mongodb';
import LineSeparator from 'components/utils/LineSeparator';
import { AppContext } from 'context/createDataContext';
import { Types } from 'context/AuthReducers';
import { Colors } from 'theme/colors';

import style from 'theme/style'
import AuthForm from './components/AuthForm';
import Logo from 'components/Logo';
import { Center } from 'components/grid/Flex';

export default function EnterOption() {
   const navigation = useNavigation();
   const { state, dispatch } = React.useContext(AppContext);


   const login = async ({ email, password }: any) => {
      try {
         // const token = await httpLogin({ email, password })
         const token = "DevToken"
         dispatch({ type: Types.SIGNIN, payload: token })
         saveToken(token)
         navigation.dispatch(
            CommonActions.reset({
               index: 0,
               routes: [{ name: 'MyTabs' }],
            })
         );
         navigation.navigate('MyTabs')

      } catch (error) {
         console.warn(error);
         dispatch({ type: Types.ERROR, payload: "Oops, ha habido un error" });
      }
   }

   React.useEffect(() => {
      const unsubscribe = navigation.addListener('focus', () => dispatch({ type: Types.CLEAR_ERROR }));
      return unsubscribe;
   }, [navigation]);

   return (
      <Wrapper>
         <View style={{ flex: 1, margin: 18, justifyContent: 'flex-end' }}>
            {/* Logo */}
            <Center>
               <Logo type='white' w={250} h={250} resizeMode='stretch' />
            </Center>

            {/* Login */}
            <View style={{ backgroundColor: Colors.whiteTransparent, borderRadius: 20, padding: 20, paddingHorizontal: 25 }}>
               {/* Login Form */}
               <AuthForm
                  errorMessage={state.auth.errorMessage}
                  onSubmit={login}
                  submitButtonText={"Login"}
               />

               {/* Reset Password */}
               <TouchableOpacity onPress={() => null}>
                  <Text style={[style.m16, { color: Colors.primary, textAlign: 'center', marginTop: 30 }]}>Olvidaste la contrasena?</Text>
               </TouchableOpacity>

               {/* Terms & Privacy */}
               {/* <Text style={[style.r14, { color: Colors.disable, textAlign: 'center', lineHeight: 24, marginTop: 20 }]}>
                  By continuing, you agree to the
                  <Text style={[style.m14, { color: Colors.txt1 }]}> Terms of Services</Text>
                  {' &'}<Text style={[style.m14, { color: Colors.txt1 }]}> Privacy Policy.</Text>
               </Text> */}
            </View>
         </View>
      </Wrapper>
   )
}

const Wrapper = ({ children }: any) => {
   return (
      <SafeAreaView style={[style.area, { backgroundColor: Colors.black }]}>
         <View style={{ flex: 1, backgroundColor: Colors.primary }} >
            <StatusBar
               backgroundColor='transparent'
               translucent={true}
               barStyle={'light-content'}
            />
            <KeyboardAvoidingView
               style={{ flex: 1 }}
               behavior={Platform.OS === 'ios' ? 'padding' : null as any}
            >
               {children}
            </KeyboardAvoidingView>
         </View>
      </SafeAreaView>
   )
}
