import React from 'react'
import { ImageBackground, ScrollView, StyleSheet, Text } from 'react-native'
import { Center, TopNav } from 'components/grid/Flex'
import { Colors } from 'theme/colors'
import style from 'theme/style'
import Wrapper from 'components/grid/Wrapper'
import { View } from 'react-native'
import { CardBox } from 'components/CardBox'
import LineSeparator from 'components/utils/LineSeparator'

export default function ChooseHouse() {
   return (
      <Wrapper barTrasnparent={true}>

         <TopNav trailing={<View></View>} title='Selecciona tu casa' />


         {/* <ImageBackground
            source={require('../../../assets/image/survey-bg.jpeg')}
            resizeMode='cover'
            style={{ height: 140 }}>
         </ImageBackground> */}

         <ScrollView showsVerticalScrollIndicator={false} style={[style.main, { marginTop: 10 }]}>

            <Text style={{ color: Colors.txt2 }}>Lista de casas</Text>

            <View>
               {[
                  { t1: 'La Alhambra', t2: 'Alhambra #999' },
                  { t1: 'Las Haciendas', t2: 'Prinicpal #1001' },
                  { t1: 'Collados', t2: 'Chipinque #999' },
               ].map((data, index) => <View key={index}>
                  <CardBox
                     border={'none'}
                     icon={{
                        name: 'home-outline',
                        size: 35,
                        style: { marginRight: 10 },
                     }}
                     title={data.t1}
                     subtitle={data.t2}
                  />
                  <LineSeparator flat />
               </View>)}
            </View>

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