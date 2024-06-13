import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import MyIcon from './utils/MyIcon'
import { Colors } from 'theme/colors'
import { useNavigation } from '@react-navigation/native';
import { AppContext } from 'context/createDataContext';
import { Center } from './grid/Flex';
import style from 'theme/style';
import UserImageSelected from './utils/UserImageSelected';
import UserNameIcon from './utils/UserNameIcon';

export default function UserIcon() {
   const navigation = useNavigation();
   const [isVisible, setIsVisilbe] = useState(false)
   const [base64Icon, setbase64Icon] = useState('')
   const { state } = React.useContext(AppContext);

   useEffect(() => {
      if (state.auth.token) {
         setIsVisilbe(true)
         setbase64Icon(state.auth.image)
      }
   }, [state.auth])

   return (
      !isVisible ? null
         : <TouchableOpacity
            onPress={() => navigation.navigate('Setting')}
            style={{ position: 'relative' }}
         >
            {/* <Image source={require('../../assets/image/s1-alt.png')} style={styles.logoStyle} /> */}
            {base64Icon
               ? <UserImageSelected path64={base64Icon} width={40} height={40} style={{ marginRight: 7 }} />
               : <UserNameIcon size={40} display='RF' />
            }
            <View style={styles.iconFloat}>
               <MyIcon
                  name='notifications'
                  style={styles.iconStyle}
                  size={13}
                  color={Colors.bg}
               />
            </View>
         </TouchableOpacity>
   )
}

const styles = StyleSheet.create({
   logoStyle: {
      height: 40,
      width: 40,
      marginHorizontal: 10,
      marginTop: 5
   },
   iconFloat: {
      position: 'absolute',
      top: -5,
      right: -5,
      backgroundColor: Colors.primary,
      borderRadius: 25,
      padding: 3
   },
   iconStyle: {

   }
})

