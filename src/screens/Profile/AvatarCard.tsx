import React from 'react'
import { Text, View } from 'react-native'
import { Center, Row } from 'components/grid/Flex'
import { Colors } from 'theme/colors'
import style from 'theme/style'

export default function AvatarCard() {
   const iconSize = 100

   return (
      <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
         {/* Icon */}
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
