import React, { forwardRef, useState } from 'react'
import { ScrollView, StyleSheet, Switch, Text, TouchableOpacity, View, ViewProps } from 'react-native'
import TemplateView, { TopWrapperView } from 'components/grid/TemplateView'
import { TopNav } from 'components/grid/Flex'
import { Colors } from 'theme/colors'
import style from 'theme/style'

type CheckboxProps = {
   label?: string
   initialValue?: boolean
   scale?: number
   onPress: (v: boolean) => void
} & ViewProps;

export const MyCheckbox = forwardRef<View, CheckboxProps>((P, ref) => {
   const INIT_VALUE = P.initialValue || false
   const SCALE = P.scale || 0.9

   const [state, setState] = useState(INIT_VALUE)
   const sendValueToParent = () => {
      setState(!state)
      P.onPress(state)
   }

   return (
      <View ref={ref} style={[styles.rowStyle, P.style]}>
         <Switch
            style={{ marginLeft: '5%', transform: [{ scaleX: SCALE }, { scaleY: SCALE }] }}
            trackColor={{ false: Colors.primaryLight, true: Colors.primary }}
            thumbColor={Colors.bg}
            ios_backgroundColor={Colors.primaryLight}
            onValueChange={sendValueToParent}
            value={state}
         />


         {P.label ? <TouchableOpacity style={{ paddingVertical: 10 }} onPress={sendValueToParent}>
            <Text style={{ paddingLeft: 15, color: Colors.txt2 }}>
               {P.label}
            </Text>
         </TouchableOpacity> : null}

      </View>
   )
})

const styles = StyleSheet.create({
   rowStyle: { display: 'flex', flexDirection: "row", alignItems: 'center' }
})