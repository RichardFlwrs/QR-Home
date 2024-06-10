import React from 'react'
import { KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import TemplateView, { TopWrapperView } from 'components/grid/TemplateView'
import { Center, Flex, TopNav } from 'components/grid/Flex'
import { Colors } from 'theme/colors'
import style from 'theme/style'
import { CardBox } from 'components/CardBox'
import LineSeparator from 'components/utils/LineSeparator'
import Spacer from 'components/utils/Spacer'
import Logo from 'components/Logo'
import { useNavigation } from '@react-navigation/native'
import Wrapper from 'components/grid/Wrapper'
import { Formik } from 'formik'
import MyInput from 'components/form/MyInput'
import MyIcon from 'components/utils/MyIcon'
import { MyCheckbox } from 'components/form/MyCheckbox'

export default function QRFrecuente() {
   const navigator = useNavigation()

   return (
      <Wrapper>
         <TopNav trailing={<View></View>} />

         <ScrollView showsVerticalScrollIndicator={false} style={[style.main, { marginTop: 10 }]}>

            <Center>
               <Logo w={'100%'} h={100} resizeMode='contain' />
            </Center>

            <LineSeparator text='VISITA FRECUENTE' bottom={20} />

            <Text style={style.header}>Inivitaciones activas</Text>
            <Text>Listado de invitaciones vigentes</Text>

            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
               <MyInput
                  WrapperStyle={{ marginLeft: 0, flex: 1 }}
                  placeholder='Buscar por nombre de visitante'
               />
               <TouchableOpacity onPress={() => navigator.navigate('AddFrecuentPerson')} style={[style.iconBtn, { marginLeft: 10 }]}>
                  <MyIcon name='add' size={25} color='white' />
               </TouchableOpacity>
            </View>

            <View>
               <CardBox
                  border={'none'}
                  icon={{ name: 'qr-code-outline', size: 20, style: { marginRight: 10 } }}
                  title='Eladio Salazar C'
                  leading={<View style={{ width: 50 }}>
                     <MyCheckbox
                        scale={0.9}
                        onPress={() => null}
                     />
                  </View>}
               />
               <LineSeparator flat />
               <CardBox
                  border={'none'}
                  icon={{ name: 'qr-code-outline', size: 20, style: { marginRight: 10 } }}
                  title='Alberto Torres'
                  leading={<View style={{ width: 50 }}>
                     <MyCheckbox
                        scale={0.9}
                        onPress={() => null}
                     />
                  </View>}
               />
            </View>
         </ScrollView>
      </Wrapper>
   )
}

const styles = StyleSheet.create({
   header: {}
})
