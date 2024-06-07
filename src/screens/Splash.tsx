import { CommonActions, useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react'
import { SafeAreaView, StatusBar, ImageBackground, Image } from 'react-native';
import { getToken } from 'api/localStorage/contactStorage';
import { Types } from 'context/AuthReducers';
import { AppContext } from 'context/createDataContext';
import { Colors } from 'theme/colors';
import style from 'theme/style';

export default function Splash() {
    const navigation = useNavigation();
    const { state, dispatch } = React.useContext(AppContext);

    useEffect(() => {
        setTimeout(async () => {
            const token = await getToken()
            if (token) {
                dispatch({ type: Types.SIGNIN, payload: token })
                navigation.navigate('MyTabs')
            }
            else {
                navigation.dispatch(
                    CommonActions.reset({
                        index: 0,
                        routes: [{ name: 'EnterOption' }],
                    })
                );
                navigation.navigate('EnterOption')
            }
        }, 1000);


    }, [])

    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.primary, }]}>
            <StatusBar translucent={true} backgroundColor='transparent' barStyle={'light-content'} />
            <ImageBackground
                source={require('../../assets/image/fondo_login.png')}
                resizeMode='stretch'
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                {/* <Image
                    source={require('../../assets/image/Logo.png')}
                    resizeMode='stretch'
                    style={{ height: 166, width: 124 }}
                /> */}
            </ImageBackground>
        </SafeAreaView>
    )
}
