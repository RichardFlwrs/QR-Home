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

export default function EditProfile() {
   return (
      <Wrapper barTrasnparent={true}>

         <TopNav trailing={<View><Logo w={90} h={50} resizeMode='contain'></Logo></View>} title='Editar perfil' />


         {/* <ImageBackground
            source={require('../../../../assets/image/survey-bg.jpeg')}
            resizeMode='cover'
            style={{ height: 140 }}>
         </ImageBackground> */}

         <ScrollView showsVerticalScrollIndicator={false} style={[style.main, { marginTop: 10 }]}>

            <CardBox
               border={{ padding: 0, marginBottom: 25 }}
               title='Edita tu cuenta'
               subtitle='Ingresa los siguientes datos'
            />


            <MyInput
               label="Nombre(s)"
               placeholder=''
            />
            <MyInput
               label="Apellido paterno"
               placeholder=''
            />
            <MyInput
               label="Paellido materno"
               placeholder=''
            />
            <MyInput
               label="Email"
               placeholder=''
            />
            <MyInput
               label="Celular"
               placeholder=''
            />

            <Spacer y={10} />
            <TouchableOpacity
               onPress={() => { }}
               style={[style.btn, { marginTop: 5 }]}
            >
               <Text style={[style.btntxt, {}]}>
                  Guardar
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