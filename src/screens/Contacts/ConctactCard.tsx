import React from 'react'
import TemplateView, { TopWrapperView } from 'components/grid/TemplateView'
import { Image, Text, View } from 'react-native'
import { Colors } from 'theme/colors'
import style from 'theme/style'
import { CardBox } from 'components/CardBox'

export default function ConctactCard({ result, index }: any) {

   return (
      <CardBox>
         <View style={{ height: 24, width: 24, borderWidth: 1.5, borderColor: Colors.btn, borderRadius: 12, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={[style.m12, { color: Colors.disable }]}>
               {index + 1}
            </Text>
         </View>
         {/* assets/image/icons1/t4.png */}
         <Image source={require('../../../assets/image/icons1/t4.png')} resizeMode='stretch' style={{ height: 60, width: 60, marginLeft: 12 }}></Image>
         <View style={{ flex: 1, marginLeft: 12 }}>
            <Text style={[style.m16, { color: Colors.txt }]}>{result.firstName} {result.lastName}</Text>
            <Text style={[style.r14, { color: Colors.disable }]}>{result.email}</Text>
         </View>
         <Image source={require('../../../assets/image/s6-alt.png')} resizeMode='stretch' style={{ height: 40, width: 40 }}></Image>
      </CardBox>
   )
}
