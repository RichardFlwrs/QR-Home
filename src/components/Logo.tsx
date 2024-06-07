import React from 'react'
import { DimensionValue, Image, ImageResizeMode, ImageSourcePropType, ImageStyle, StyleProp } from 'react-native'

type LogoParams = {
   w?: DimensionValue,
   h?: DimensionValue,
   style?: StyleProp<ImageStyle>
   alt?: string
   type?: 'dark' | 'white'
   resizeMode?: ImageResizeMode
}

export default function Logo(P: LogoParams) {
   let path: ImageSourcePropType
   // default
   path = require('../../assets/image/logo-vertical.png')

   if (P.type === 'dark')
      path = require('../../assets/image/logo-vertical.png')

   if (P.type === 'white')
      path = require('../../assets/image/logo-white.png')

   return (
      <Image
         source={path}
         style={[{
            marginLeft: 0,
            marginTop: 0,
            height: P.h || '100%',
            width: P.w || '100%',
            marginHorizontal: 10,
         }, P.style]}
         resizeMode={P.resizeMode || 'center'}
      />
   )
}
