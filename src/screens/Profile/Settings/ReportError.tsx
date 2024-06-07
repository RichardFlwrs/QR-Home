import React from 'react'
import { ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { Center, TopNav } from 'components/grid/Flex'
import { Colors } from 'theme/colors'
import style from 'theme/style'
import Wrapper from 'components/grid/Wrapper'
import { View } from 'react-native'
import { CardBox } from 'components/CardBox'
import MyInput from 'components/form/MyInput'
import Spacer from 'components/utils/Spacer'

export default function ReportError() {
   return (
      <Wrapper barTrasnparent={true}>

         <TopNav trailing={<View></View>} title='Reportar error' />


         {/* <ImageBackground
            source={require('../../../../assets/image/survey-bg.jpeg')}
            resizeMode='cover'
            style={{ height: 140 }}>
         </ImageBackground> */}

         <ScrollView showsVerticalScrollIndicator={false} style={[style.main, { marginTop: 10 }]}>

            <CardBox
               border={{ padding: 0, marginBottom: 25 }}
               title='Reportar error'
               subtitle='Ingresa los siguientes datos'
            />

            <MyInput
               label="Descripcion"
               placeholder='Describenos el problema'
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