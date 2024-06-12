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
import { MyCheckbox } from 'components/form/MyCheckbox';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Home() {
    const navigation = useNavigation();

    const gotoAddFam = (id = 0) => { navigation.navigate('AddFamily', { id }) }
    const gotoAddVehicle = (id = 0) => { navigation.navigate('AddVehicle', { id }) }

    return (
        <TemplateView barColor={Colors.primary} >
            <ImageBackground source={require('../../../assets/image/fondo.png')} resizeMode='stretch' style={{ flex: 1 }}>
                <TopNav
                    title='Mi casa'
                    titleStyle={[style.subtitle, { color: Colors.white, marginTop: -10 }]}
                    withLogo='white'
                />

                {/* Address */}
                <Center style={{ position: 'relative' }}>
                    <Text style={[{ position: 'absolute', color: Colors.white, top: -20 }]}>
                        Alhambra #999 La Alhambra
                    </Text>
                </Center>

                <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10, paddingHorizontal: 10 }}>
                    {/* Welcome */}
                    <View>
                        <Text style={[style.apptitle, { color: Colors.white, marginVertical: 15 }]}>
                            Bienvenido Ricardo
                        </Text>
                    </View>

                    {/* Tarjetas de Acceso */}
                    <View style={[style.card, { padding: 0, borderWidth: 0 }]}>
                        {/* <ImageBackground
                            source={require('../../../assets/image/QR-bg.jpeg')}
                            borderTopLeftRadius={7}
                            borderTopRightRadius={7}
                            resizeMode='cover'
                            style={{ height: 140 }}>
                        </ImageBackground> */}

                        <View>
                            <CardBox
                                border={'none'}
                                title='No permito el acceso'
                                subtitle='Acceso a visitas no autorizadas'
                                style={{ borderBottomColor: Colors.bg, borderWidth: 2 }}
                                leading={<View style={{ width: 50 }}>
                                    <MyCheckbox scale={1.2} onPress={() => null} />
                                </View>}
                            />
                        </View>

                        <View style={style.relative}>
                            <LineSeparator text='Tarjetas de Acceso' top={4} justifyStart />
                        </View>

                        <Center h={70}>
                            <Text style={[style.faintText]}>No tienes tarjetas registradas</Text>
                        </Center>
                    </View>

                    {/* Vehiculos */}
                    <View style={[style.card, { padding: 0, borderWidth: 0 }]}>
                        <ImageBackground
                            source={require('../../../assets/image/car.jpeg')}
                            resizeMode='cover'
                            borderTopLeftRadius={7}
                            borderTopRightRadius={7}
                            style={{ height: 140 }}>

                        </ImageBackground>

                        <Row center>
                            <View style={{ flex: 1 }}>
                                <LineSeparator text='Vehículos' top={20} bottom={20} justifyStart />
                            </View>

                            <View style={{ position: 'relative' }}>
                                <TouchableOpacity onPress={() => gotoAddVehicle()} style={[style.iconBtn, { padding: 3, marginRight: 10 }]}>
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
                            leading={<View style={{ width: 50 }}>
                                <MyCheckbox scale={0.9} onPress={() => null} />
                            </View>}
                        />
                        <LineSeparator flat />
                        <CardBox
                            border={'none'}
                            icon={{ name: 'car-sport', size: 24, style: { marginRight: 10 } }}
                            title='MG Mg'
                            subtitle='Placa: SRJ187B'
                            leading={<View style={{ width: 50 }}>
                                <MyCheckbox scale={0.9} onPress={() => null} />
                            </View>}
                        />
                    </View>



                </ScrollView>

            </ImageBackground>
        </TemplateView>
    )
}
