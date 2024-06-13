import React from 'react'
import { ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { Center, TopNav } from 'components/grid/Flex'
import { Colors } from 'theme/colors'
import style from 'theme/style'
import Wrapper from 'components/grid/Wrapper'
import { View } from 'react-native'
import { CardBox } from 'components/CardBox'
import Logo from 'components/Logo'
import { MyCheckbox } from 'components/form/MyCheckbox'
import LineSeparator from 'components/utils/LineSeparator'
import { useNavigation } from '@react-navigation/native'
import MyIcon from 'components/utils/MyIcon'

export default function FamilyList() {
   const navigation = useNavigation();

   const gotoAddFam = (id = 0) => { navigation.navigate('AddFamily', { id }) }


   return (
      <Wrapper barTrasnparent={true}>

         <TopNav trailing={<View><Logo w={90} h={50} resizeMode='contain'></Logo></View>} title='Familia' />

         {/* <ImageBackground
            source={require('../../../../assets/image/survey-bg.jpeg')}
            resizeMode='cover'
            style={{ height: 140 }}>
         </ImageBackground> */}

         <ScrollView showsVerticalScrollIndicator={false} style={[style.main, { marginTop: 10 }]}>

            <TouchableOpacity style={style.btn} onPress={() => gotoAddFam()}>
               <Text style={style.btntxt}>Agregar Familiar</Text>
            </TouchableOpacity>

            <View>
               {[
                  { id: 1, t1: 'Eladio Salazar C', t2: 'eslazar@colmena29.mx' },
                  { id: 2, t1: 'Alberto Torres', t2: 'altor@mail.com' },
               ].map((data, index) => <TouchableOpacity onPress={() => gotoAddFam(data.id)} key={index}>
                  <CardBox
                     border={'none'}
                     icon={{ name: 'person', size: 20, style: { marginRight: 10 } }}
                     title={data.t1}
                     subtitle={data.t2}
                     leading={<MyIcon name='chevron-forward' size={18} color={Colors.grayLight} />}
                  />
               </TouchableOpacity>)}
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