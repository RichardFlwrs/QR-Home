import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, Platform, StatusBarStyle, TextStyle, View } from 'react-native'
import { StyleProp } from 'react-native'
import {
   SafeAreaView, StatusBar, Dimensions
} from 'react-native'
import { Colors } from 'theme/colors'
import style from 'theme/style'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

/**
 * 
 * Set configuration on for the STAUS BAR and the KEYBOARD, validating if is iOS or Android
 * Always display content on flex
 */
export default function TemplateView({
   children,
   withKeyboard,
   statusBarWhite,
   barColor,
   BarStyles
}: TemplateProps) {
   const DEFAULT_STYLES: StyleProp<TextStyle> = [style.area, { backgroundColor: Colors.primary }]

   if (BarStyles) DEFAULT_STYLES.push(BarStyles as any)

   return (
      <SafeAreaView style={DEFAULT_STYLES}>
         <StatusBar
            translucent={true}
            backgroundColor={barColor || 'transparent'}
            barStyle={statusBarWhite || 'light-content'}
         />

         {
            withKeyboard ?
               <KeyboardAvoidingView
                  style={{ flex: 1 }}
                  behavior={Platform.OS === 'ios' ? 'padding' : null as any}
               >
                  {children}
               </KeyboardAvoidingView>
               :
               children

         }
      </SafeAreaView>
   )
}

/**
 * Add some space on the top if its on Android
 * 
 */
export const TopWrapperView = ({ children }: any) => {
   return (
      <View
         style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: Platform.OS === 'ios' ? 10 : 30,
            marginHorizontal: 20
         }}
      >
         {children}
      </View>
   )
}

interface TemplateProps {
   children: any,
   withKeyboard?: boolean,
   statusBarWhite?: StatusBarStyle,
   barColor?: string,
   BarStyles?: TextStyle
   barTransparent?: boolean
}