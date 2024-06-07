import React, { useState } from 'react'
import { ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import TemplateView from 'components/grid/TemplateView'
import { Center, Row, TopNav } from 'components/grid/Flex'
import { Colors } from 'theme/colors'
import style from 'theme/style'
import NotificationsList from './tabs/NotificationsList'
import EntriesList from './tabs/EntriesList'

export default function News() {
   const [isPrimaryView, setIsPrimaryView] = useState(true)

   return (
      <TemplateView barColor={Colors.primary} withKeyboard={true}>
         <ImageBackground source={require('../../../assets/image/fondo.png')} resizeMode='stretch' style={{ flex: 1 }}>
            <TopNav
               title=''
               titleStyle={[style.apptitle, { color: Colors.white }]}
               withLogo='white'
            />

            <Center>
               <Row center style={[style.cardPill]}>
                  <TouchableOpacity
                     style={[
                        styles.optionHeader,
                        style.pillLeft,
                        isPrimaryView ? styles.optionSelected : {}
                     ]}
                     onPress={() => setIsPrimaryView(true)}
                  >
                     <Text style={{ color: isPrimaryView ? 'white' : 'black' }}>
                        Mensajes
                     </Text>
                  </TouchableOpacity>
                  <View style={{ height: 24, width: 1.5, backgroundColor: Colors.primary }} />
                  <TouchableOpacity
                     style={[
                        styles.optionHeader,
                        style.pillRight,
                        !isPrimaryView ? styles.optionSelected : {}
                     ]}
                     onPress={() => setIsPrimaryView(false)}
                  >
                     <Text style={{ color: !isPrimaryView ? 'white' : 'black' }}>
                        Registro
                     </Text>
                  </TouchableOpacity>
               </Row>
            </Center>

            <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10, paddingHorizontal: 10 }}>

               {isPrimaryView ? <NotificationsList /> : <EntriesList />}
            </ScrollView>
         </ImageBackground>
      </TemplateView>
   )
}

const styles = StyleSheet.create({
   optionHeader: {
      padding: 10,
      paddingHorizontal: 35
   },
   optionSelected: {
      backgroundColor: Colors.primary,
   }
})