import React from 'react'
import { View, ImageBackground, Text, TouchableOpacity } from 'react-native'
import { CardBox } from 'components/CardBox'
import MyInput from 'components/form/MyInput'
import { Center } from 'components/grid/Flex'
import LineSeparator from 'components/utils/LineSeparator'
import Spacer from 'components/utils/Spacer'
import { Colors } from 'theme/colors'
import style from 'theme/style'

export default function EntriesList() {
   return (
      <View style={[style.card, { padding: 0, borderWidth: 0, borderTopRightRadius: 25, borderTopLeftRadius: 25 }]}>
         <ImageBackground
            source={require('../../../../assets/image/survey-bg.jpeg')}
            resizeMode='cover'
            borderTopLeftRadius={25}
            borderTopRightRadius={25}
            style={{ height: 140 }}>
         </ImageBackground>

         {/* Registros */}
         <LineSeparator text='Registros' top={4} bottom={15} justifyStart />

         <View style={{ paddingHorizontal: 10 }}>
            <Text style={style.header}>Inivitaciones activas</Text>
            <Text>Listado de invitaciones vigentes</Text>

            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
               <MyInput
                  WrapperStyle={{ marginLeft: 0, flex: 1 }}
                  placeholder='Buscar por nombre de visitante'
               />
            </View>
         </View>

         <CardBox
            border={'none'}
            icon={{ name: 'card-outline', size: 20, style: { marginRight: 10 } }}
            title='Placa'
            subtitle='Control Pass Test'
            footer={<Text style={{ color: Colors.txt2 }}>08 de mayo del 2024</Text>}
         />
         <LineSeparator flat />
         <CardBox
            border={'none'}
            icon={{ name: 'qr-code-outline', size: 20, style: { marginRight: 10 } }}
            title='QR'
            subtitle='Eladio Salazar'
            footer={<Text style={{ color: Colors.txt2 }}>12 de abril del 2024</Text>}
         />
      </View>
   )
}
