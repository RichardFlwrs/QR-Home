import dayjs from 'dayjs';
import React, { forwardRef, useEffect, useState } from 'react';
import { Modal, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import DateTimePicker from 'react-native-ui-datepicker';
import 'dayjs/locale/es';
import style from 'theme/style';
import { Colors } from 'theme/colors';
import { useNavigation } from '@react-navigation/native';

const DatePickerModal = forwardRef(({ text, onClosed, initialDate }: any, ref) => {
   const [modalVisible, setModalVisible] = useState(false);
   const [date, setDate] = useState(dayjs());

   const openModal = () => { setModalVisible(true) }

   useEffect(() => { setDate(initialDate) }, [])

   return (
      <View style={{}}>
         <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
               onClosed(date);
               setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
               <View style={styles.modalView}>
                  <DateTimePicker
                     locale='es'
                     timePicker={true}
                     mode="single"
                     date={date}
                     initialView='time'
                     onChange={(params) => setDate(params.date as any)}
                  />
                  <TouchableOpacity
                     style={[style.btn, { marginTop: 5 }]}
                     onPress={() => {
                        onClosed(date)
                        setModalVisible(!modalVisible)
                     }}>
                     <Text style={[style.btntxt, { paddingHorizontal: 15 }]}>Aceptar</Text>
                  </TouchableOpacity>
               </View>
            </View>
         </Modal>

         {/*  */}
         <View style={{ display: 'flex', flexDirection: "row" }}>
            <TouchableOpacity
               style={[styles.button, styles.buttonOpen]}
               onPress={() => setModalVisible(true)}>
               <Text style={styles.textStyle}>{text}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ paddingVertical: 10 }} onPress={() => openModal()}>
               <Text style={styles.selectedDateText}>{formatDateTime(new Date(date as any))}</Text>
            </TouchableOpacity>
         </View>
      </View>
   );
});

function formatDateTime(date: Date) {
   const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
   const day = date.getDate();
   const isToday = new Date().getDate() === day
   const weekday = isToday ? "Hoy" : days[date.getDay()] + `(${day}),`;
   // const weekday = days[date.getDay()]

   let hours = date.getHours();
   const minutes = date.getMinutes().toString().padStart(2, '0');
   const ampm = hours >= 12 ? 'pm' : 'am';

   // hours = hours % 12 || 12; // Convert to 12-hour format

   const res = `${weekday} ${hours.toString().padStart(2, '0')}:${minutes} ${ampm}`;
   // console.log(res);
   return res

}

const styles = StyleSheet.create({
   centeredView: {
      backgroundColor: 'rgba(52, 52, 52, 0.8)',
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center',
      width: '100%',
      height: '100%',
   },
   modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
         width: 0,
         height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
   },
   button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
   },
   buttonOpen: {
      paddingHorizontal: 20,
      backgroundColor: Colors.primary,
   },
   buttonClose: {
      backgroundColor: '#2196F3',
   },
   textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
   },
   selectedDateText: {
      fontSize: 16,
      fontWeight: '500',
      paddingLeft: 15
   },
   modalText: {
      marginBottom: 15,
      textAlign: 'center',
   },
});

export default DatePickerModal;