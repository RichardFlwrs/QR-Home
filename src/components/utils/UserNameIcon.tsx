import { Center } from 'components/grid/Flex'
import React from 'react'
import { View, Text, StyleProp, ViewStyle } from 'react-native'
import { Colors } from 'theme/colors'
import style from 'theme/style'

type UserNameIconProps = {
   size: number
   display: string
   style?: StyleProp<ViewStyle>
}

export default function UserNameIcon(P: UserNameIconProps) {
   const iconSize = P.size

   return (
      <Center>
         <View style={[
            style.centerAll,
            style.pillLeft,
            style.pillRight,
            { backgroundColor: Colors.primary, width: iconSize, height: iconSize },
            P.style
         ]}>
            <Text style={{
               fontSize: iconSize - (iconSize * 0.65),
               color: 'white',
               fontWeight: '500'
            }}>
               {P.display}
            </Text>
         </View>
      </Center>
   )
}
