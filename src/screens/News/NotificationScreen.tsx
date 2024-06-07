import React from 'react'
import { ImageBackground, ScrollView, StyleSheet, Text } from 'react-native'
import TemplateView, { TopWrapperView } from 'components/grid/TemplateView'
import { Center, TopNav } from 'components/grid/Flex'
import { Colors } from 'theme/colors'
import style from 'theme/style'
import Wrapper from 'components/grid/Wrapper'
import { View } from 'react-native'
import Logo from 'components/Logo'
import LineSeparator from 'components/utils/LineSeparator'
import { CardBox } from 'components/CardBox'

export default function NotificationScreen() {
   return (
      <Wrapper>

         <TopNav trailing={<View></View>} title='Detalle' />


         <ImageBackground
            source={require('../../../assets/image/survey-bg.jpeg')}
            resizeMode='cover'
            style={{ height: 140 }}>
         </ImageBackground>

         <ScrollView showsVerticalScrollIndicator={false} style={[style.main, { marginTop: 10 }]}>

            <CardBox
               border='none'
               title='Basura'
               subtitle='Camion recolector de basura ingresando al fraccionamiento (La Alhambra)'
            />


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