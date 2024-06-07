import React, { useState } from 'react'
import { ScrollView, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native'
import { Center, TopNav } from 'components/grid/Flex'
import { Colors } from 'theme/colors'
import style from 'theme/style'
import Wrapper from 'components/grid/Wrapper'
import LineSeparator from 'components/utils/LineSeparator'
import Logo from 'components/Logo'
import MyInput from 'components/form/MyInput'
import Spacer from 'components/utils/Spacer'
import { MyCheckbox } from 'components/form/MyCheckbox'

export default function AddFrecuentPerson() {
   const [firstName, setFirstName] = useState('')
   const [lastName, setLastName] = useState('')
   const [multiple, setMultiple] = useState(false)


   return (
      <Wrapper>

         <TopNav trailing={<View><Logo w={90} h={50} resizeMode='contain'></Logo></View>} title='Frecuentes' />

         <ScrollView showsVerticalScrollIndicator={false} style={[style.main, { marginTop: 10 }]}>

            <LineSeparator text='AÑADIR VISITANTE' bottom={10} />

            <MyInput
               label="Nombre(s)"
               placeholder=''
               onChangeText={setFirstName}
               value={firstName}
            />

            <MyInput
               label="Apellidos"
               placeholder=''
               onChangeText={setLastName}
               value={lastName}
            />

            <Spacer y={10} />
            <MyCheckbox label='Empleado domestico?' onPress={() => setMultiple(!multiple)} />

            <Spacer y={10} />
            <TouchableOpacity
               onPress={() => { }}
               style={[style.btn, { marginTop: 5 }]}
            >
               <Text style={[style.btntxt, {}]}>
                  Generar Acceso
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