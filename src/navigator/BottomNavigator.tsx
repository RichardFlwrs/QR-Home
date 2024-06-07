import { Box } from '@react-native-material/core';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import { Image, StyleSheet, View } from 'react-native';
import MyIcon from 'components/utils/MyIcon';
import Contacts from 'screens/Contacts/Contacts';
import Home from 'screens/Home/Home';
import News from 'screens/News/News';
import QRMenu from 'screens/QRInvites/QRMenu';
import { Colors } from 'theme/colors';
import style from 'theme/style';
import LinearGradient from 'react-native-linear-gradient';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
    return (
        <Tab.Navigator screenOptions={{
            tabBarStyle: { height: 70, backgroundColor: '#FFFFFF', borderTopColor: Colors.bord, paddingBottom: 8 },
            tabBarShowLabel: false,

        }}>

            <Tab.Screen name="Home" component={Home}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused, color }) => {
                        return <Image
                            source={focused
                                ? require('../../assets/image/icons1/t1f.png')
                                : require('../../assets/image/icons1/t1.png')
                            }
                            resizeMode='stretch'
                            style={{ height: 26, width: 26, marginTop: 5 }}
                        />
                    },
                    headerShown: false,
                }}
            />

            <Tab.Screen name="QRMenu" component={QRMenu}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused, color }) => {
                        return <LinearGradient
                            colors={['#ee8b8f', Colors.primary, '#710005']}
                            style={[styles.iconFloat, { backgroundColor: Colors.primary }]}
                        >
                            <MyIcon
                                // { marginTop: -60 }
                                name={focused ? 'qr-code' : 'qr-code-outline'}
                                color={Colors.bg}
                                size={26}
                            />
                        </LinearGradient>
                    },
                    headerShown: false,
                    tabBarStyle: { display: 'none' },
                }} />

            <Tab.Screen name="News" component={News}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused, color }) => {
                        return <View style={{}}>
                            <MyIcon
                                // { marginTop: -60 }
                                name={focused ? 'newspaper' : 'newspaper-outline'}
                                color={focused ? Colors.black : Colors.grayLight}
                                size={26}
                            />
                        </View>
                    },
                    headerShown: false,
                }}
            />

        </Tab.Navigator>
    )
}


const styles = StyleSheet.create({
    iconFloat: {
        backgroundColor: Colors.primary,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 25,
        marginTop: -60
    }
})
