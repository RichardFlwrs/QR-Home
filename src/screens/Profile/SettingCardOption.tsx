import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MyIcon from 'components/utils/MyIcon';
import { Colors } from 'theme/colors';
import style from 'theme/style';

export default function SettingCardOption({ icon, title, subtitle }: any) {
   return (
      <View style={styles.wrapper}>
         <View style={styles.card}>
            <MyIcon name={icon} size={24} color={Colors.primary} />
         </View>
         <View style={{ flex: 1, marginLeft: 10 }}>
            <Text style={[style.m16, { color: Colors.txt }]}>{title}</Text>
            <Text style={[style.r14, { color: Colors.disable }]}>{subtitle}</Text>
         </View>
         <MyIcon name='chevron-forward' size={20} color={Colors.txt} />
      </View>
   )
}

const styles = StyleSheet.create({

   wrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: Colors.bord,
      borderRadius: 16,
      padding: 15,
      marginTop: 15
   },
   card: {
      height: 44,
      width: 44,
      backgroundColor: Colors.secondary,
      borderRadius: 22,
      alignItems: 'center',
      justifyContent: 'center'
   }
})
