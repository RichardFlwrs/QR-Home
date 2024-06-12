import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from 'screens/Splash';
import EnterOption from 'screens/Login/EnterOption';
import MyTabs from './BottomNavigator';
import AddContact from 'screens/Contacts/AddContact';
import Setting from 'screens/Profile/Setting';
import AddFamily from 'screens/Home/AddFamily';
import AddVehicle from 'screens/Home/AddVehicle';
import QRFrecuente from 'screens/QRInvites/QRFrecuente';
import QROcacional from 'screens/QRInvites/QROcacional';
import AddFrecuentPerson from 'screens/QRInvites/AddFrecuentPerson';
import NotificationScreen from 'screens/News/NotificationScreen';
import SurveyHistory from 'screens/News/SurveyHistory';
import ChooseHouse from 'screens/Login/ChooseHouse';
import ChangePassword from 'screens/Profile/Settings/ChangePassword';
import EditProfile from 'screens/Profile/Settings/EditProfile';
import MyPayments from 'screens/Profile/Settings/MyPayments';
import Tarifas from 'screens/Profile/Settings/Tarifas';
import ReportError from 'screens/Profile/Settings/ReportError';
import FamilyList from 'screens/Profile/Settings/FamilyList';


const Stack = createNativeStackNavigator();

export default function StackNavigator() {
   const [showSplashScreen, setshowSplashScreen] = useState(true);
   useEffect(() => {
      setTimeout(() => {
         setshowSplashScreen(false);
      }, 3000);


   }, [])

   const SCREENS = SCREENS_LIST.map((_screen, index) =>
      <Stack.Screen
         key={index}
         name={_screen.name}
         component={_screen.component as any}
         options={{ headerShown: false }}
      />);

   return (
      <NavigationContainer>
         <Stack.Navigator>
            {showSplashScreen ?
               <Stack.Screen
                  name="Splash"
                  component={Splash}
                  options={{ headerShown: false }} />
               : null}

            {SCREENS}
         </Stack.Navigator>
      </NavigationContainer>
   )
}

const SCREENS_LIST = [
   { name: 'EnterOption', component: EnterOption },
   { name: 'MyTabs', component: MyTabs },
   { name: 'AddContact', component: AddContact },
   { name: 'AddFamily', component: AddFamily },
   { name: 'AddVehicle', component: AddVehicle },
   { name: 'QRFrecuente', component: QRFrecuente },
   { name: 'QROcacional', component: QROcacional },
   { name: 'AddFrecuentPerson', component: AddFrecuentPerson },
   { name: 'NotificationScreen', component: NotificationScreen },
   { name: 'SurveyHistory', component: SurveyHistory },
   { name: 'ChooseHouse', component: ChooseHouse },
   { name: 'ChangePassword', component: ChangePassword },
   { name: 'EditProfile', component: EditProfile },
   { name: 'MyPayments', component: MyPayments },
   { name: 'Tarifas', component: Tarifas },
   { name: 'ReportError', component: ReportError },
   { name: 'FamilyList', component: FamilyList },
   { name: 'Setting', component: Setting }
]