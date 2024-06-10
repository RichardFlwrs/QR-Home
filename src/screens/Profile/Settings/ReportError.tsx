import React, { useState } from 'react'
import { Dimensions, Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { Center, TopNav } from 'components/grid/Flex'
import { Colors } from 'theme/colors'
import style from 'theme/style'
import Wrapper from 'components/grid/Wrapper'
import { View } from 'react-native'
import { CardBox } from 'components/CardBox'
import MyInput from 'components/form/MyInput'
import Spacer from 'components/utils/Spacer'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import MyIcon from 'components/utils/MyIcon'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function ReportError() {
   const [base64Icon, setbase64Icon] = useState('')

   const selectImage = () => {
      launchImageLibrary({
         mediaType: 'photo',
         includeBase64: true

      }, (res) => {
         if (res.assets && res.assets[0]) {
            const ASSETS = { ...res.assets[0] }
            setbase64Icon(`data:image/png;base64,${ASSETS.base64}`)
         }
      })
   }
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

            <Center>
               <TouchableOpacity onPress={selectImage}>
                  {base64Icon
                     ? <View>
                        <Image
                           style={{
                              width: width,
                              height: 500,
                              resizeMode: 'contain'
                           }}
                           source={{ uri: base64Icon }}
                        />
                     </View>
                     : <View style={{ borderColor: Colors.primaryLight, borderWidth: 3, padding: 24, borderRadius: 10 }}>
                        <MyIcon name="images-outline" size={50} color={Colors.primaryLight} />
                     </View>
                  }
               </TouchableOpacity>
            </Center>

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
            <Spacer y={100} />

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