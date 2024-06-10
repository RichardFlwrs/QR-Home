import React, { forwardRef, useEffect } from 'react'
import { ScrollView, StyleSheet, Text, View, ViewProps, ViewStyle } from 'react-native'
import { TopNav } from 'components/grid/Flex'
import { Colors } from 'theme/colors'
import style from 'theme/style'
import MyIcon from './utils/MyIcon'
import { StyleProp } from 'react-native'

type CardProps = {
   children?: any;
   title?: string;
   subtitle?: string;
   iconName?: string;
   icon?: {
      isMaterial?: boolean,
      name: string,
      size: number,
      color?: string,
      style?: StyleProp<ViewStyle>
   };
   leading?: React.ReactNode
   footer?: React.ReactNode
   border?: 'none' | StyleProp<ViewStyle>
   mH?: number
} & ViewProps;

export const CardBox = forwardRef<View, CardProps>((P, ref) => {
   // Check if property from the parent-param is UNDEFINED or then return a given default value
   const useDef = (property: any, defVal: any) => property != undefined ? property : defVal
   const NO_BORDER = P.border === 'none'

   /**
    * It only makes the VIEW with a card style on flex display
    */
   if (P.children)
      return (
         <View ref={ref} style={[
            NO_BORDER ? styles.cardFlat : useDef(P.border, styles.cardWrapper),
            { marginHorizontal: P.mH || 0 }
         ]}>
            {P.children}
         </View>
      );


   /** Elements */
   let IMG = <View style={styles.imgWrapper}>
      {P.icon != undefined
         ? <MyIcon
            isMaterial={P.icon.isMaterial}
            name={P.icon.name}
            size={P.icon.size}
            color={P.icon.color as string || 'black'}
            style={P.icon.style}
         />
         : <MyIcon name={P.iconName || ''} size={70} color='black' />
      }
   </View>
   if (!P.iconName && !P.icon) IMG = <View></View>

   const TEXT = <View style={styles.txtWrapper}>
      {P.title ? <Text style={styles.headerTitle}>{P.title}</Text> : null}
      {P.subtitle ? <Text style={{}}>{P.subtitle}</Text> : null}
      {P.footer ? P.footer : null}
   </View>

   const LEADING = P.leading ? P.leading : null


   /**
    * Builds the Card element
    */
   return (
      <View ref={ref} style={[
         NO_BORDER ? styles.cardFlat : useDef(P.border, styles.cardWrapper),
         { marginHorizontal: P.mH || 0 }
      ]}>
         {IMG ? IMG : null}
         {TEXT}
         {LEADING}
      </View>
   );
});

const styles = StyleSheet.create({
   cardWrapper: {
      ...style.box,
      backgroundColor: Colors.secondary,
      borderRadius: 7,
      borderWidth: 0.7,
      marginBottom: 10,
      borderColor: Colors.primaryLight
   },
   cardFlat: {
      ...style.box
   },
   imgWrapper: {
      paddingRight: 7
      // flex: 1
   },
   txtWrapper: {
      flex: 1
   },
   headerTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 5,
   }
})