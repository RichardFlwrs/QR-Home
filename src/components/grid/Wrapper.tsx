import React from 'react'
import { KeyboardAvoidingView, Platform, SafeAreaView, StatusBar, StyleSheet, View } from 'react-native'
import { Colors } from 'theme/colors'
import style from 'theme/style'

export default function Wrapper({ children, barTrasnparent }: any) {
   const iOS = Platform.OS === 'ios'
   let statusbarBg = iOS ? 'transparent' : Colors.primary

   if (barTrasnparent === true) {
      statusbarBg = 'transparent'
   }

   return (
      <SafeAreaView style={[style.area, { backgroundColor: iOS ? Colors.black : Colors.primary }]} >
         <View style={{ flex: 1, backgroundColor: Colors.bg }} >
            <StatusBar
               backgroundColor={statusbarBg}
               translucent={true}
               barStyle={barTrasnparent ? 'dark-content' : null}
            />
            <KeyboardAvoidingView
               style={{ flex: 1 }}
               behavior={iOS ? 'padding' : null as any}
            >
               {children}
            </KeyboardAvoidingView>
         </View>
      </SafeAreaView>

   )
}

const styles = StyleSheet.create({
   headerTitle: {
      ...style.apptitle,
      fontWeight: 'bold'
   },
   myCard: {
      ...style.box,
      borderRadius: 5,
      backgroundColor: Colors.white,
      borderWidth: 0.5,
      borderColor: Colors.grayLight
   }
})