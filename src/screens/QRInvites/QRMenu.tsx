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

export default function QRMenu() {
   const navigator = useNavigation()

   return (
      <Wrapper>

         <TopNav />

         <ScrollView showsVerticalScrollIndicator={false} style={[style.main, { marginTop: 10 }]}>

            <Center>
               <Logo w={'100%'} h={146} />
            </Center>

            <LineSeparator text='AGENDAR VISITA' bottom={10} />

            <TouchableOpacity onPress={() => navigator.navigate('QRFrecuente')}>
               <CardBox
                  // border={'none'}
                  title='Frecuentes'
                  icon={{ name: 'reload-circle', size: 50 }}
                  subtitle='Utiliza esta opcion para las personas que te visitan con frecuencia y no vence su acceso'
               />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigator.navigate('QROcacional')}>
               <CardBox
                  title='Ocacionales'
                  icon={{ name: 'person-circle', size: 50 }}
                  subtitle='Utiliza esta opcion para las personas que te visitan de manera ocacional'
               />
            </TouchableOpacity>

            <LineSeparator text="QR's ACTIVOS" bottom={10} />

            <Spacer y={10} />
            <Center>
               <Text style={style.faintText}>No encotramos QR pendientes de usar</Text>
            </Center>

         </ScrollView>
      </Wrapper>
   )
}