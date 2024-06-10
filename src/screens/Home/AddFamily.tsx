import React, { useState } from 'react'
import {
   Text, View, ImageBackground, Dimensions, ScrollView,
   TouchableOpacity
} from 'react-native'
import { Colors } from 'theme/colors'
import style from 'theme/style'
import TemplateView, { TopWrapperView } from '../../components/grid/TemplateView';
import { useNavigation } from '@react-navigation/native';
import MyIcon from 'components/utils/MyIcon';
import { Center, TopNav } from 'components/grid/Flex';
import Spacer from 'components/utils/Spacer';
import { Formik } from 'formik';
import MyInput from 'components/form/MyInput';
import { IFamily } from 'Interfaces/IFamily';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function AddFamily({ route }: any) {
   const navigation = useNavigation();
   if (route.params) {
      const { id } = route.params
      console.log(id);
   }


   return (
      <TemplateView barColor={Colors.primary}>
         <ImageBackground source={require('../../../assets/image/fondo.png')} resizeMode='stretch' style={{ flex: 1 }}>
            <TopNav
               title='Agregar familiar'
               titleStyle={[style.apptitle, { color: Colors.white }]}
               blackBtn={false}
               trailing={<MyIcon name='person-add' size={24} color='white' />}
            />

            <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10, paddingHorizontal: 10 }}>

               {/* Welcome Card */}
               <View style={[style.cardTransparent, {}]}>
                  <FormAddFamilyMember />
               </View>
            </ScrollView>

         </ImageBackground>
      </TemplateView>
   )
}

const FormAddFamilyMember = () => {
   let newFam: IFamily = {
      id: 0,
      firstname: '',
      middlename: '',
      lastname: '',
      email: '',
      phone: '',
   }

   return (
      <Formik
         initialValues={newFam}
         onSubmit={values => console.log(values)}
      >
         {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View>
               <MyInput
                  label="Nombre(s)"
                  placeholder=''
                  onChangeText={handleChange('firstname')}
                  onBlur={handleBlur('firstname')}
                  value={values.firstname}
               />

               <MyInput
                  label="Apellido paterno"
                  placeholder=''
                  onChangeText={handleChange('middlename')}
                  onBlur={handleBlur('middlename')}
                  value={values.middlename}
               />

               <MyInput
                  label="Apellido materno"
                  placeholder=''
                  onChangeText={handleChange('lastname')}
                  onBlur={handleBlur('lastname')}
                  value={values.lastname}
               />

               <MyInput
                  label="Email"
                  placeholder=''
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
               />

               <MyInput
                  label="Celular"
                  placeholder=''
                  onChangeText={handleChange('phone')}
                  onBlur={handleBlur('phone')}
                  value={values.phone}
               />

               <Spacer y={10} />
               <TouchableOpacity
                  onPress={(handleSubmit as any)}
                  style={[style.btn, { marginTop: 5 }]}
               >
                  <Text style={[style.btntxt, {}]}>
                     Guardar
                  </Text>
               </TouchableOpacity>
            </View>
         )}
      </Formik>
   )
}
