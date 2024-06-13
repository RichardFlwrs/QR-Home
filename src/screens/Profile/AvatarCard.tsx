import React, { useEffect, useState } from 'react'
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Center, Row } from 'components/grid/Flex'
import { Colors } from 'theme/colors'
import style from 'theme/style'
import { launchImageLibrary } from 'react-native-image-picker'
import { getUserImage, removeUserImage, saveUserImage } from 'api/localStorage/contactStorage'
import MyIcon from 'components/utils/MyIcon'
import { AppContext } from 'context/createDataContext'
import { Types } from 'context/AuthReducers'
import UserImageSelected from 'components/utils/UserImageSelected'
import UserNameIcon from 'components/utils/UserNameIcon'

export default function AvatarCard() {
   const { state, dispatch } = React.useContext(AppContext);
   const [base64Icon, setbase64Icon] = useState('')

   const selectImage = () => {
      launchImageLibrary({
         mediaType: 'photo',
         includeBase64: true

      }, (res) => {
         if (res.assets && res.assets[0]) {
            const ASSETS = { ...res.assets[0] }
            const base64 = `data:image/png;base64,${ASSETS.base64}`
            dispatch({ type: Types.SET_IMAGE, payload: base64 })
            saveUserImage(base64)
            setbase64Icon(base64)
         }
      })
   }

   const removeImage = () => {
      removeUserImage()
      dispatch({ type: Types.CLEAR_IMAGE })
      setbase64Icon('')
   }

   useEffect(() => {
      setbase64Icon(state.auth.image)
   }, [state])

   return (
      <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative' }}>
         {/* Icon */}
         <Center>
            <TouchableOpacity onPressOut={() => selectImage()} style={{ width: 100 }}>
               {base64Icon
                  ? <UserImageSelected width={100} height={100} path64={base64Icon} />
                  : <UserNameIcon size={100} display='RF' />
               }
            </TouchableOpacity>
         </Center>

         {/* remove Image */}
         {base64Icon ? <TouchableOpacity style={styles.iconFloat} onPressOut={() => removeImage()}>
            <View>
               <MyIcon
                  name='trash'
                  style={styles.iconStyle}
                  size={13}
                  color={Colors.bg}
               />
            </View>
         </TouchableOpacity>
            : null}

         {/* Name */}
         <Center h={30}>
            <Text style={{ fontSize: 16, color: Colors.txt }}>Ricardo Flores</Text>
         </Center>
         {/* Mail */}
         <Center>
            <Text style={{ fontSize: 14, color: Colors.txt2 }}>ricardo.alberto096@gmail.com</Text>
         </Center>
      </View>
   )
}

const styles = StyleSheet.create({
   iconFloat: {
      position: 'absolute',
      top: 0,
      right: '10%',
      backgroundColor: Colors.primary,
      borderRadius: 50,
      padding: 5
   },
   iconStyle: {
      borderRadius: 50,
   }
})
