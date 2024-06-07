import React, { useState } from 'react'
import { ScrollView, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native'
import { Center, TopNav } from 'components/grid/Flex'
import { Colors } from 'theme/colors'
import style from 'theme/style'
import Wrapper from 'components/grid/Wrapper'
import Logo from 'components/Logo'
import LineSeparator from 'components/utils/LineSeparator'
import { Formik } from 'formik'
import MyInput from 'components/form/MyInput'
import Spacer from 'components/utils/Spacer'
import DatePickerModal from '/modals/DatePickerModal'
import { MyCheckbox } from 'components/form/MyCheckbox'

export default function QROcacional() {
   return (
      <Wrapper>

         <TopNav trailing={<View></View>} />

         <ScrollView showsVerticalScrollIndicator={false} style={[style.main, { marginTop: 10 }]}>

            <Center>
               <Logo w={'100%'} h={100} resizeMode='contain' />
            </Center>

            <LineSeparator text='VISITA OCACIONAL' bottom={10} />

            <FormElement />

         </ScrollView>
      </Wrapper>
   )
}
const dateAtClockPlus = (n: number = 0): Date => {
   const t = new Date();
   t.setMinutes(0, 0);
   t.setHours(t.getHours() + n)
   return t
}

const FormElement = () => {
   const firstHourDate = dateAtClockPlus()
   const twoHrsMore = dateAtClockPlus(2)

   const [firstName, setFirstName] = useState('')
   const [lastName, setLastName] = useState('')
   const [from, setFrom] = useState(firstHourDate)
   const [to, setTo] = useState(twoHrsMore)
   const [multiple, setMultiple] = useState(false)

   const sendForm = (value: any) => {
      // value.multiple = multiple
      console.log(value);

   }

   let ocational: any = {
      firstName: firstName,
      lastName: lastName,
      from: from,
      to: to,
      multiple: multiple,
   }

   return (
      <Formik
         enableReinitialize
         initialValues={ocational}
         onSubmit={sendForm}
      >
         {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View>
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

               <View style={{ marginTop: 10 }}>
                  <Text style={styles.labelStyle}>Fecha de inicio</Text>
                  <View style={{ display: 'flex', flexDirection: "row" }}>
                     <DatePickerModal
                        text={'Cambiar'}
                        initialDate={from}
                        onClosed={(r: any) => {
                           setFrom(new Date(r));
                        }}
                     ></DatePickerModal>
                  </View>
               </View>

               <Spacer y={10} />

               <View>
                  <Text style={styles.labelStyle}>Fecha de expiracion</Text>
                  <View style={{ display: 'flex', flexDirection: "row" }}>
                     <DatePickerModal
                        text={'Cambiar'}
                        initialDate={to}
                        onClosed={(r: any) => {
                           setTo(new Date(r));
                        }}
                     ></DatePickerModal>

                  </View>
               </View>

               <Spacer y={10} />
               <MyCheckbox
                  label='Ingreso multiple?'
                  onPress={() => setMultiple(!multiple)}
               />

               <View style={{ marginTop: 20 }}>
                  <Text style={style.lSpacing}>Este acceso solo podra ser utilizado una vez durante el periodo previamente seleccionado</Text>
               </View>

               <Spacer y={10} />
               <TouchableOpacity
                  onPress={(handleSubmit as any)}
                  style={[style.btn, { marginTop: 5 }]}
               >
                  <Text style={[style.btntxt, {}]}>
                     Generar Acceso
                  </Text>
               </TouchableOpacity>
            </View>
         )}
      </Formik>
   )
}

const styles = StyleSheet.create({
   headerTitle: {
      ...style.apptitle,
      fontWeight: 'bold'
   },

   labelStyle: {
      color: Colors.txt2,
      paddingVertical: 7,
      paddingLeft: 15
   },
   selectedDateText: {
      fontSize: 16,
      fontWeight: '500',
      paddingLeft: 15
   }
})