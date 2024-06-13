import React from 'react'
import { View, Image, ImageProps, DimensionValue } from 'react-native'
import style from 'theme/style'

type UserImageSelectedProps = {
   path64: string
   width?: DimensionValue
   height?: DimensionValue
} & ImageProps;

export default function UserImageSelected(P: UserImageSelectedProps) {
   return (
      <View style={[style.centerAll, P.style]}>
         <Image
            borderRadius={50}
            style={{
               width: P.width || 40,
               height: P.height || 40,
               resizeMode: 'cover'
            }}
            source={{ uri: P.path64 }}
         />
      </View>
   )
}
