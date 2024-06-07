import React from 'react'
import { ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { Center, TopNav } from 'components/grid/Flex'
import style from 'theme/style'
import Wrapper from 'components/grid/Wrapper'
import { View } from 'react-native'
import { CardBox } from 'components/CardBox'
import Logo from 'components/Logo'
import MyInput from 'components/form/MyInput'
import Spacer from 'components/utils/Spacer'

export default function ChangePassword() {
   return (
      <Wrapper barTrasnparent={true}>

         <TopNav trailing={<View></View>} title='Actualizar contraseña' />


         <Center>
            <Logo w={'100%'} h={100} resizeMode='contain' />
         </Center>

         <ScrollView showsVerticalScrollIndicator={false} style={[style.main, { marginTop: 10 }]}>

            <CardBox
               border={{ padding: 0, marginBottom: 25 }}
               title='Cambia tu contraseña'
               subtitle='Ingresa los siguentes datos'
            />

            <MyInput
               label="Contraseña actual"
               placeholder='Actual'
            />
            <MyInput
               label="Nueva contraseña"
               placeholder='Nueva'
            />
            <MyInput
               label="Confirma nueva contraseña"
               placeholder='Confirmar'
            />

            <Spacer y={10} />
            <TouchableOpacity
               onPress={() => { }}
               style={[style.btn, { marginTop: 5 }]}
            >
               <Text style={[style.btntxt, {}]}>
                  Actualizar
               </Text>
            </TouchableOpacity>

         </ScrollView>
      </Wrapper>
   )
}

const styles = StyleSheet.create({
   headerTitle: {
      ...style.apptitle,
      fontWeight: 'bold'
   }
})