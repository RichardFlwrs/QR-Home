import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from 'theme/colors';
import style from 'theme/style';
import MyIcon from './MyIcon';

export default function BackButton({ black }: { black?: boolean }) {
   const navigation = useNavigation();

   return (
      <TouchableOpacity style={style.iconSelectable} onPress={() => navigation.goBack()}>
         <MyIcon name='arrow-back' size={24} color={black ? Colors.txt : Colors.secondary} />
      </TouchableOpacity>
   )
}
