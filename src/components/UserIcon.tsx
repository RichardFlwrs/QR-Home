import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import MyIcon from './utils/MyIcon'
import { Colors } from 'theme/colors'
import { useNavigation } from '@react-navigation/native';
import { AppContext } from 'context/createDataContext';

export default function UserIcon() {
   const navigation = useNavigation();
   const [isVisible, setIsVisilbe] = useState(false)
   const { state, dispatch } = React.useContext(AppContext);

   useEffect(() => {
      if (state.auth.token) setIsVisilbe(true)
   }, [])

   return (
      isVisible ?
         <TouchableOpacity
            onPress={() => navigation.navigate('Setting')}
            style={{ position: 'relative' }}
         >
            <Image
               source={require('../../assets/image/s1-alt.png')} style={styles.logoStyle}
            />
            <View style={styles.iconFloat}>
               <MyIcon
                  name='notifications'
                  style={styles.iconStyle}
                  size={13}
                  color={Colors.bg}
               />
            </View>
         </TouchableOpacity>
         : null
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
      top: 0,
      right: 5,
      backgroundColor: Colors.primary,
      borderRadius: 25,
      padding: 3
   },
   iconStyle: {

   }
})

