import React from 'react'

import TemplateView, { TopWrapperView } from 'components/grid/TemplateView';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { Colors } from 'theme/colors'
import style from 'theme/style'
import { AppBar } from '@react-native-material/core';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import MyInput from 'components/form/MyInput';
import { apiSaveContact } from 'api/localStorage/contactStorage';
import BackButton from 'components/utils/BackButton';
import { TopNav } from 'components/grid/Flex';

export default function AddContact() {
   const navigation = useNavigation();

   const saveContact = (data: any) => {
      apiSaveContact(data).then(r => {
         navigation.goBack()
      })
   }

   return (
      <TemplateView>
         <TopNav title={'Add Contact'} />

         <View style={{ padding: 15, backgroundColor: Colors.secondary, marginHorizontal: 10, borderRadius: 20, marginBottom: 100 }}>
            <ScrollView showsVerticalScrollIndicator={false} >
               <Formik
                  initialValues={{
                     firstName: '',
                     lastName: '',
                     email: '',
                  }}
                  onSubmit={values => saveContact(values)}
               >
                  {({ handleChange, handleBlur, handleSubmit, values }) => (
                     <View>

                        <View style={{ flexDirection: 'row' }}>
                           <MyInput
                              placeholder='First Name'
                              WrapperStyle={{ flex: 1, paddingHorizontal: 0 }}
                              onChangeText={handleChange('firstName')}
                              onBlur={handleBlur('firstName')}
                              value={values.firstName}
                           ></MyInput>
                           <MyInput
                              placeholder='Last Name'
                              WrapperStyle={{ flex: 1, paddingHorizontal: 0 }}
                              onChangeText={handleChange('lastName')}
                              onBlur={handleBlur('lastName')}
                              value={values.lastName}
                           ></MyInput>
                        </View>
                        <MyInput
                           placeholder='Email'
                           onChangeText={handleChange('email')}
                           onBlur={handleBlur('email')}
                           value={values.email}
                        ></MyInput>

                        <View style={[style.separator2]}></View>

                        <TouchableOpacity onPress={handleSubmit as any}
                           style={[style.btn, { marginTop: 30 }]}>
                           <Text style={[style.btntxt, {}]}>Submit</Text>
                        </TouchableOpacity>
                     </View>
                  )}
               </Formik>
            </ScrollView>
         </View>
      </TemplateView>
   )
}
