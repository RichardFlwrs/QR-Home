import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import MyIcon from './utils/MyIcon'
import { Colors } from 'theme/colors'
import { useNavigation } from '@react-navigation/native';
import { AppContext } from 'context/createDataContext';
import { Center } from './grid/Flex';
import style from 'theme/style';

export default function UserIcon() {
   const navigation = useNavigation();
   const [isVisible, setIsVisilbe] = useState(false)
   const [base64Icon, setbase64Icon] = useState('')
   const { state, dispatch } = React.useContext(AppContext);

   useEffect(() => {
      if (state.auth.token) {
         setIsVisilbe(true)
         setbase64Icon(state.auth.image)
      }
   }, [state.auth])

   return (
      isVisible ?
         <TouchableOpacity
            onPress={() => navigation.navigate('Setting')}
            style={{ position: 'relative' }}
         >
            {/* <Image
               source={require('../../assets/image/s1-alt.png')} style={styles.logoStyle}
            /> */}
            {base64Icon
               ? <ImageSelected path64={base64Icon} />
               : <NameIcon />
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
         : null
   )
}

const ImageSelected = ({ path64 }: any) => {
   return (
      <View style={[style.centerAll, { marginRight: 7 }]}>
         <Image
            borderRadius={50}
            style={{
               width: 40,
               height: 40,
               resizeMode: 'cover'
            }}
            source={{ uri: path64 }}
         />
      </View>
   )
}

const NameIcon = () => {
   const iconSize = 40

   return (
      <Center>
         <View style={[
            style.centerAll,
            style.pillLeft,
            style.pillRight,
            { backgroundColor: Colors.primary, width: iconSize, height: iconSize }
         ]}>
            <Text style={{
               fontSize: iconSize - (iconSize * 0.65),
               color: 'white',
               fontWeight: '500'
            }}>
               RF
            </Text>
         </View>
      </Center>
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

