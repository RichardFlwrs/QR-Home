import React, { useState } from 'react'
import MyInput from 'components/form/MyInput'
import { Colors } from 'theme/colors';
import style from 'theme/style'
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import MyIcon from 'components/utils/MyIcon';

export default function AuthForm({ errorMessage, onSubmit, submitButtonText }: any) {
   const [isPasswordVisible, setIsPasswordVisible] = useState(false)
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   return (
      <>
         {/* Email */}
         <MyInput
            label="Correo"
            laberlColor='white'
            placeholder="Tu correo"
            WrapperStyle={{ paddingHorizontal: 15, backgroundColor: Colors.white }}
            InputStyle={{ ...style.inputNoBorder }}
            iconId='mail-outline'
            value={email}
            onChangeText={setEmail}
         ></MyInput>

         {/* Password */}
         <MyInput
            label="Contraseña"
            laberlColor='white'
            placeholder="Tu contraseña"
            WrapperStyle={{ paddingHorizontal: 15, backgroundColor: Colors.white }}
            InputStyle={{ ...style.inputNoBorder }}
            value={password}
            onChangeText={setPassword}
            passwordEntry={!isPasswordVisible}
            IconElement={<MyIcon isMaterial={true} name='lock-outline' size={24} color={Colors.primary} />}
            AddElement={
               <TouchableOpacity style={style.iconSelectable} onPress={() => setIsPasswordVisible(!isPasswordVisible)} >
                  <MyIcon
                     name={!isPasswordVisible ? 'eye-off' : 'eye'}
                     color={'#CCCCCC'}
                     size={20}
                  />
               </TouchableOpacity>
            }
         ></MyInput>

         <Text style={[style.r14, styles.errText]}>
            {errorMessage}
         </Text>


         {/* Login Button */}
         <TouchableOpacity
            onPress={() => onSubmit({ email, password })}
            style={[style.btn, { marginTop: 5 }]}
         >
            <Text style={[style.btntxt, {}]}>
               {submitButtonText}
            </Text>
         </TouchableOpacity>
      </>
   )
}


const styles = StyleSheet.create({
   errText: {
      color: Colors.error,
      textAlign: 'center',
      lineHeight: 24,
      marginTop: 20
   }
})
