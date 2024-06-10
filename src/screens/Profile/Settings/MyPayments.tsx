import React from 'react'
import { ImageBackground, ScrollView, StyleSheet, Text } from 'react-native'
import { Center, TopNav } from 'components/grid/Flex'
import { Colors } from 'theme/colors'
import style from 'theme/style'
import Wrapper from 'components/grid/Wrapper'
import { View } from 'react-native'
import { CardBox } from 'components/CardBox'
import Logo from 'components/Logo'
import { MyCheckbox } from 'components/form/MyCheckbox'
import LineSeparator from 'components/utils/LineSeparator'

export default function MyPayments() {
   return (
      <Wrapper barTrasnparent={true}>

         <TopNav trailing={<View><Logo w={90} h={50} resizeMode='contain'></Logo></View>} title='Pagos' />

         {/* <ImageBackground
            source={require('../../../../assets/image/survey-bg.jpeg')}
            resizeMode='cover'
            style={{ height: 140 }}>
         </ImageBackground> */}

         <ScrollView showsVerticalScrollIndicator={false} style={[style.main, { marginTop: 10 }]}>

            <CardBox
               border={{ padding: 0, marginBottom: 25 }}
               title='Pagos'
               subtitle='Lista de pagos'
            />

            <View>
               {[
                  { t1: '$10.00', t2: 'Pago', t3: '13/feb/2024', s: 'Pendiente', sColor: Colors.primaryLight },
                  { t1: '$500.00', t2: '200', t3: '07/nov/2023', s: 'Pendiente', sColor: Colors.primaryLight },
                  { t1: '$2000.00', t2: 'Octubre', t3: '04/oct/2023', s: 'Rechazado', sColor: Colors.errorDarkText },
               ].map((data, index) => <View key={index}>
                  <CardBox
                     border={'none'}
                     icon={{
                        name: 'currency-usd',
                        size: 20,
                        style: { marginRight: 10 },
                        isMaterial: true
                     }}
                     title={data.t1}
                     subtitle={data.t2}
                     footer={<Text style={{ color: Colors.txt2 }}>{data.t3}</Text>}
                     leading={<View style={[styles.statusPill, { backgroundColor: data.sColor }]}>
                        <Text>{data.s}</Text>
                     </View>}
                  />
                  <LineSeparator flat />
               </View>)}
            </View>

         </ScrollView>
      </Wrapper>
   )
}

const styles = StyleSheet.create({
   statusPill: {
      ...style.cardPill,
      padding: 3,
      paddingHorizontal: 10
   }
})