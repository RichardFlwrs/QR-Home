import { View, Text, FlatList, SafeAreaView, Dimensions, StatusBar, KeyboardAvoidingView, ImageBackground, TouchableOpacity, Image, ScrollView, TextInput, Switch, Platform, StyleSheet } from 'react-native'
import React, { useState, useContext, } from 'react'
import { CommonActions, useNavigation } from '@react-navigation/native'
import { Colors } from 'theme/colors';
import style from 'theme/style'
import { AppBar } from '@react-native-material/core';
import SettingCardOption from './SettingCardOption';
import { AppContext } from 'context/createDataContext';
import { removeToken } from 'api/localStorage/contactStorage';
import { Types } from 'context/AuthReducers';
import BackButton from 'components/utils/BackButton';
import AvatarCard from './AvatarCard';
import Spacer from 'components/utils/Spacer';
import { Row } from 'components/grid/Flex';
import LineSeparator from 'components/utils/LineSeparator';
import MyIcon from 'components/utils/MyIcon';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Setting() {
   const navigation = useNavigation();
   const { state, dispatch } = React.useContext(AppContext);

   const logOut = async () => {
      try {
         await removeToken();
         dispatch({ type: Types.SIGNOUT })
         navigation.dispatch(
            CommonActions.reset({
               index: 0,
               routes: [{ name: 'EnterOption' }],
            })
         );
         navigation.navigate('EnterOption')
      } catch (error) {
         console.warn(error);
      }
   }

   const FRACCIONAMIENTO: any[] = [
      { text: 'Tarifas', link: 'Tarifas' },
      { text: 'Encuestas', link: 'SurveyHistory' },
   ]

   const CUENTAS: any[] = [
      { text: 'Familia', link: 'FamilyList' },
      { text: 'Editar mi perfil', link: 'EditProfile' },
      { text: 'Cambiar contraseña', link: 'ChangePassword' },
      { text: 'Mis pagos', link: 'MyPayments' },
      { text: 'Reportar un error', link: 'ReportError' },
      { text: 'Cambiar casa', link: 'ChooseHouse' },
   ]

   return (
      <Wrapper>
         <View style={[style.main, { backgroundColor: Colors.bg, marginTop: Platform.OS === 'ios' ? 10 : 30 }]}>
            <AppBar
               title='Opciones'
               titleStyle={[style.apptitle, { color: Colors.txt, marginLeft: 25 }]}
               centerTitle={true}
               style={{ backgroundColor: 'transparent' }}
               elevation={0}
               leading={<BackButton black={true} />}
            />

            <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10 }}>

               <AvatarCard />

               {/* Fraccionamiento */}
               <Spacer y={10} />
               <Text style={[style.m14, { color: Colors.disable }]}>Fraccionamiento</Text>

               {FRACCIONAMIENTO.map((_o, index) =>
                  <OptionItem key={index} data={_o} />
               )}

               {/* Cuenta options */}
               <Spacer y={10} />
               <Text style={[style.m14, { color: Colors.disable }]}>Cuenta</Text>
               {CUENTAS.map((_o, index) =>
                  <OptionItem key={index} data={_o} />

               )}

               <Spacer y={10} />
               <TouchableOpacity onPress={logOut}>
                  <Text style={[style.m22, styles.logout_text]}>Cerrar sesion</Text>
               </TouchableOpacity>

            </ScrollView>
         </View>
      </Wrapper>
   )
}

const OptionItem = ({ data }: any) => {
   const navigation = useNavigation();

   return (
      <TouchableOpacity onPress={() => navigation.navigate(data.link)}>
         <Row style={{ paddingVertical: 10 }}>
            <Text style={[{ flex: 1, fontSize: 20, color: Colors.txt1 }, style.lSpacing]}>
               {data.text}
            </Text>
            <MyIcon name='chevron-forward' size={18} color={Colors.grayLight} />
         </Row>
         <Row style={{ paddingRight: 18 }}>
            <LineSeparator flat color={Colors.primaryLight} />
         </Row>
      </TouchableOpacity>
   )
}

const Wrapper = ({ children }: any) => {
   return (
      <SafeAreaView style={[style.area, { backgroundColor: Colors.bg }]}>
         <StatusBar backgroundColor='transparent' translucent={true} barStyle={'dark-content'} />
         <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null as any}>
            {children}
         </KeyboardAvoidingView>
      </SafeAreaView>

   )
}

const styles = StyleSheet.create({
   logout_text: {
      color: '#EB5757',
      textAlign: 'center',
      marginTop: 30,
      marginBottom: 20
   }

})
