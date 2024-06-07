import React, { useState } from 'react'
import {
   Image, Text, View, ImageBackground, Dimensions, ScrollView,
   TouchableOpacity,
   Platform
} from 'react-native'
import { Colors } from 'theme/colors'
import style from 'theme/style'
import TemplateView, { TopWrapperView } from '../../components/grid/TemplateView';
import { useNavigation } from '@react-navigation/native';
import MyIcon from 'components/utils/MyIcon';
import { Center, TopNav } from 'components/grid/Flex';
import { CardBox } from 'components/CardBox';
import LineSeparator from 'components/utils/LineSeparator';
import Spacer from 'components/utils/Spacer';
import { Formik, FormikProps } from 'formik';
import { IVehicle } from 'Interfaces/IVehicle';
import MyInput from 'components/form/MyInput';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function AddVehicle() {
   const navigation = useNavigation();

   return (
      <TemplateView barColor={Colors.primary}>
         <ImageBackground source={require('../../../assets/image/fondo.png')} resizeMode='stretch' style={{ flex: 1 }}>
            <TopNav
               title='Agregar vehiculo'
               titleStyle={[style.apptitle, { color: Colors.white }]}
               blackBtn={false}
               trailing={<MyIcon name='car-sport' size={25} color='white' />}
            />

            <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10, paddingHorizontal: 10 }}>

               {/* Welcome Card */}
               <View style={[style.cardTransparent, {}]}>
                  <FormAddVehicle />
               </View>
            </ScrollView>

         </ImageBackground>
      </TemplateView>
   )
}

const FormAddVehicle = () => {
   let newCar: IVehicle = {
      id: 0,
      brand: '',
      model: '',
      numberPlate: '',
      color: '',
   }

   return (
      <Formik
         initialValues={newCar}
         onSubmit={values => console.log(values)}
      >
         {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View>
               <MyInput
                  label="Marca"
                  placeholder=''
                  onChangeText={handleChange('brand')}
                  onBlur={handleBlur('brand')}
                  value={values.brand}
               />

               <MyInput
                  label="Modelo"
                  placeholder=''
                  onChangeText={handleChange('model')}
                  onBlur={handleBlur('model')}
                  value={values.model}
               />

               <MyInput
                  label="Numero de placa"
                  placeholder=''
                  onChangeText={handleChange('numberPlate')}
                  onBlur={handleBlur('numberPlate')}
                  value={values.numberPlate}
               />

               <MyInput
                  label="Color"
                  placeholder=''
                  onChangeText={handleChange('color')}
                  onBlur={handleBlur('color')}
                  value={values.color}
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