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
import { Center, Row, TopNav } from 'components/grid/Flex';
import { CardBox } from 'components/CardBox';
import LineSeparator from 'components/utils/LineSeparator';
import Spacer from 'components/utils/Spacer';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Home() {
    const navigation = useNavigation();

    const gotoAddFam = () => { navigation.navigate('AddFamily') }
    const gotoAddVehicle = () => { navigation.navigate('AddVehicle') }

    return (
        <TemplateView barColor={Colors.primary} >
            <ImageBackground source={require('../../../assets/image/fondo.png')} resizeMode='stretch' style={{ flex: 1 }}>
                <TopNav
                    title='Mi casa'
                    titleStyle={[style.apptitle, { color: Colors.white }]}
                    withLogo='white'
                />

                <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10, paddingHorizontal: 10 }}>

                    {/* Welcome Card */}
                    <View style={[style.card, { padding: 0, borderWidth: 0, borderTopRightRadius: 25, borderTopLeftRadius: 25 }]}>

                        {/* <Text style={{ fontSize: 27, textAlign: 'center' }}>Bienvenido Ricardo </Text> */}
                        {/* <Spacer y={5} / */}

                        <ImageBackground
                            source={require('../../../assets/image/house-bg.jpg')}
                            resizeMode='cover'
                            borderTopLeftRadius={25}
                            borderTopRightRadius={25}
                            style={{ height: 140 }}>
                        </ImageBackground>

                        {/* Direccion */}
                        <LineSeparator text='Dirección' top={4} bottom={10} justifyStart />

                        <CardBox
                            border={'none'}
                            icon={{ name: 'home', size: 20, style: { marginRight: 10 } }}
                            subtitle='Alhambra #999 La Alhambra'
                        />

                        {/* Familia */}
                        <Row center>
                            <View style={{ flex: 1 }}>
                                <LineSeparator text='Familia' top={20} bottom={20} justifyStart />
                            </View>

                            <View style={{ position: 'relative' }}>
                                <TouchableOpacity onPress={gotoAddFam} style={[style.iconBtn, { padding: 3 }]}>
                                    <MyIcon isMaterial name='plus' size={24} color={Colors.bg} />
                                </TouchableOpacity>
                            </View>
                        </Row>

                        <CardBox
                            border={'none'}
                            icon={{ name: 'person', size: 20, style: { marginRight: 10 } }}
                            title='Eladio Salazar C'
                            subtitle='eslazar@colmena29.mx'
                        />
                        <LineSeparator flat />
                        <CardBox
                            border={'none'}
                            icon={{ name: 'person', size: 20, style: { marginRight: 10 } }}
                            title='Alberto Torres'
                            subtitle='altor@mail.com'
                        />
                    </View>

                    {/* Vehiculos */}
                    <View style={[style.card, { padding: 0, borderWidth: 0 }]}>
                        <ImageBackground
                            source={require('../../../assets/image/car.jpeg')}
                            resizeMode='cover'
                            style={{ height: 140 }}>

                        </ImageBackground>

                        <Row center>
                            <View style={{ flex: 1 }}>
                                <LineSeparator text='Vehículos' top={20} bottom={20} justifyStart />
                            </View>

                            <View style={{ position: 'relative' }}>
                                <TouchableOpacity onPress={gotoAddVehicle} style={[style.iconBtn, { padding: 3 }]}>
                                    <MyIcon isMaterial name='plus' size={24} color={Colors.bg} />
                                </TouchableOpacity>
                            </View>
                        </Row>

                        <CardBox
                            border={'none'}
                            icon={{ name: 'car-sport', size: 24, style: { marginRight: 10 } }}
                            title='Chrysler Pro Master'
                            subtitle='Placa: PP2232A'
                            style={{ borderBottomColor: Colors.bg, borderWidth: 2 }}
                        />
                        <LineSeparator flat />
                        <CardBox
                            border={'none'}
                            icon={{ name: 'car-sport', size: 24, style: { marginRight: 10 } }}
                            title='MG Mg'
                            subtitle='Placa: SRJ187B'
                        />
                    </View>

                    {/* Tarjetas de Acceso */}
                    <View style={[style.card, { padding: 0, borderWidth: 0 }]}>
                        <ImageBackground
                            source={require('../../../assets/image/QR-bg.jpeg')}
                            resizeMode='cover'
                            style={{ height: 140 }}>
                        </ImageBackground>

                        <View style={style.relative}>
                            <LineSeparator text='Tarjetas de Acceso' top={4} justifyStart />
                        </View>

                        <Center h={70}>
                            <Text style={[style.faintText]}>No tienes tarjetas registradas</Text>
                        </Center>
                    </View>

                </ScrollView>

            </ImageBackground>
        </TemplateView>
    )
}
