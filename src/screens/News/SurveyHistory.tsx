import React from 'react'
import { ImageBackground, ScrollView, StyleSheet, Text } from 'react-native'
import { Center, TopNav } from 'components/grid/Flex'
import { Colors } from 'theme/colors'
import style from 'theme/style'
import Wrapper from 'components/grid/Wrapper'
import { View } from 'react-native'
import { CardBox } from 'components/CardBox'

export default function SurveyHistory() {
   return (
      <Wrapper barTrasnparent={true}>

         <TopNav trailing={<View></View>} title='Historial de encuestas' />


         <ImageBackground
            source={require('../../../assets/image/survey-bg.jpeg')}
            resizeMode='cover'
            style={{ height: 140 }}>
         </ImageBackground>

         <ScrollView showsVerticalScrollIndicator={false} style={[style.main, { marginTop: 10 }]}>

            <CardBox
               border={{ padding: 0, marginBottom: 25 }}
               title='Encuestas'
               subtitle='Historial de encuestas'
            />
            <Text style={{ color: Colors.txt2 }}>No se han agregado encuestas</Text>

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