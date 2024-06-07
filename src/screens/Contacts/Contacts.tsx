import React, { useRef } from 'react'
import TemplateView, { TopWrapperView } from '../../components/grid/TemplateView'
import { FlatList, Platform, Text, TouchableOpacity, View } from 'react-native'
import { Colors } from 'theme/colors'
import style from 'theme/style'
import { AppBar } from '@react-native-material/core';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import useContact from './useContact';
import ConctactCard from './ConctactCard';
import MyIcon from 'components/utils/MyIcon';
import { TopNav } from 'components/grid/Flex'
import LineSeparator from 'components/utils/LineSeparator'

export default function Contacts() {
    const navigation = useNavigation();
    const [searchApi, contactList, errMsg] = useContact();

    useFocusEffect(
        React.useCallback(() => {
            (searchApi as any)()
        }, [])
    );


    return (
        <TemplateView barColor={Colors.primary} withKeyboard={true}>

            <TopNav
                title="List of Contacts"
                titleStyle={[{ paddingLeft: 50 }, style.apptitle]}
                withLogo='dark'
                trailing={
                    <TouchableOpacity
                        style={style.iconSelectable}
                        onPress={() => navigation.navigate('AddContact')}
                    >
                        <MyIcon name='add-outline' size={24} color={Colors.primary} />
                    </TouchableOpacity>
                }
            />

            <View style={[style.main]} >
                {errMsg
                    ? <Text style={[style.r14, { color: Colors.bord }]}>
                        {errMsg as any}
                    </Text>
                    : null}

                <LineSeparator text={`We have found: ${contactList.length} results`} top={0} />

                <FlatList
                    data={contactList as any}
                    keyExtractor={(item: any) => item.createdAt}
                    renderItem={({ item, index }) => {
                        return (
                            <TouchableOpacity
                                onPress={() =>
                                    null
                                }
                            >
                                <ConctactCard result={item} index={index} />
                            </TouchableOpacity>
                        );
                    }}
                />
            </View>


        </TemplateView>
    )
}