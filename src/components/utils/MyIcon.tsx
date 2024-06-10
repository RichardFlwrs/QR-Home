import React from 'react'
import { Colors } from 'theme/colors';
import style from 'theme/style'
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import { StyleProp, TextStyle, View } from 'react-native';

type IconProps = {
   name: string;
   color: string;
   size: number;
   style?: StyleProp<TextStyle>;
   isMaterial?: boolean;
   pill?: StyleProp<TextStyle>;
};

export default function MyIcon(P: IconProps) {

   const isPill = P.pill !== undefined

   if (P.isMaterial) return (
      <Icons
         style={P.style}
         name={P.name}
         color={P.color}
         size={P.size}
      />
   )


   const nIcon = <Icon
      style={P.style}
      name={P.name || "alert-circle-outline"}
      color={P.color}
      size={P.size}
   />

   return (
      isPill ? <View>{nIcon}</View> : nIcon
   )
}
