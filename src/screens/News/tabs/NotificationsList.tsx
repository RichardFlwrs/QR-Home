import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, ImageBackground, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { CardBox } from 'components/CardBox'
import { Center, Row } from 'components/grid/Flex'
import LineSeparator from 'components/utils/LineSeparator'
import MyIcon from 'components/utils/MyIcon'
import Spacer from 'components/utils/Spacer'
import { Colors } from 'theme/colors'
import style from 'theme/style'

export default function NotificationsList() {
  const nav = useNavigation()
  const gotoSurveyHistory = () => { nav.navigate('SurveyHistory') }
  const gotoNotif = () => { nav.navigate('NotificationScreen') }

  return (
    <View style={[style.card, { padding: 0, borderWidth: 0, borderTopRightRadius: 25, borderTopLeftRadius: 25 }]}>
      <ImageBackground
        source={require('../../../../assets/image/survey-bg.jpeg')}
        resizeMode='cover'
        borderTopLeftRadius={25}
        borderTopRightRadius={25}
        style={{ height: 140 }}>
      </ImageBackground>

      {/* Encuestas */}
      <Row center>
        <View style={{ flex: 1 }}>
          <LineSeparator text='Encuestas' top={20} bottom={20} justifyStart />
        </View>

        <View style={{ position: 'relative' }}>
          <TouchableOpacity onPress={gotoSurveyHistory} style={[style.iconBtn, { padding: 3, marginRight: 10 }]}>
            <MyIcon name='timer-outline' size={24} color={Colors.bg} />
          </TouchableOpacity>
        </View>
      </Row>

      <Center h={70}>
        <Text style={[style.faintText, {}]}>No hay encuestas activas</Text>
      </Center>
      <Spacer y={10} />

      {/* Notificaciones */}
      <LineSeparator text='Notificaciones' top={4} bottom={10} justifyStart />

      {[
        { id: 1, t1: 'Basura', t2: 'Camion recolector de basura ingresa' },
        { id: 2, t1: 'Su pago #9 (La Alhambra)', t2: 'No pudo ser validado ❌' },
      ].map((data, index) => <TouchableOpacity onPress={() => gotoNotif()} key={index}>
        <CardBox
          border={'none'}
          icon={{ name: 'notifications', size: 20, style: { marginRight: 10 } }}
          title={data.t1}
          subtitle={data.t2}
          leading={<MyIcon name='chevron-forward' size={20} color='black' />}
        />
        {index < 1 ? <LineSeparator flat /> : null}
      </TouchableOpacity>)}
    </View>
  )
}
