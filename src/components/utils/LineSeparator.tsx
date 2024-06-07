import React from 'react'
import { DimensionValue, StyleSheet, Text, View } from 'react-native'
import { Colors } from 'theme/colors'
import style from 'theme/style'


type SeparatorProps = {
   text?: string,
   top?: DimensionValue
   bottom?: DimensionValue
   justifyStart?: boolean
   flat?: boolean
   color?: string
}

export default function LineSeparator({
   text,
   top,
   bottom,
   justifyStart,
   flat,
   color,
}: SeparatorProps) {
   if (top == undefined) top = 20
   if (bottom == undefined) bottom = 20
   if (flat != undefined) { top = 0, bottom = 0 }
   return (
      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: top, marginBottom: bottom }}>
         <View
            style={[
               style.divider,
               justifyStart ? styles.jStart : styles.normal,
               { backgroundColor: Colors.primaryLight }
            ]}>
         </View>
         {flat
            ? null
            : <Text
               style={[
                  style.r16,
                  style.lSpacing,
                  { color: color || Colors.txt1, marginHorizontal: 20 }
               ]}>{text}</Text>
         }
         <View style={[style.divider, { backgroundColor: Colors.primaryLight, flex: 1 }]}></View>
      </View>
   )
}

const styles = StyleSheet.create({
   normal: {
      flex: 1
   },
   jStart: {
      width: '10%'
   }
})
