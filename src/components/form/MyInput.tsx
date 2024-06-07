import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TextStyle, View } from 'react-native'
import { Colors } from 'theme/colors'
import style from 'theme/style'
import MyIcon from '../utils/MyIcon';

export default function MyInput({
    label,
    laberlColor,
    placeholder,
    WrapperStyle,
    InputStyle,
    phtxtColor,
    inptxtColor,
    iconId,
    IconElement,
    AddElement,
    value,
    onChangeText,
    passwordEntry,
    onBlur
}: InputParams) {
    const DEFAULT_WRAPPER_STYLES = [style.inputcontainer, { backgroundColor: 'transparent' }];
    const DEFAULT_INPUT_STYLES = [style.inputText, { color: Colors.active, flex: 1 }]

    if (WrapperStyle) DEFAULT_WRAPPER_STYLES.push(WrapperStyle as any)
    if (InputStyle) DEFAULT_INPUT_STYLES.push(InputStyle as any)

    return (
        <>
            {/* Label Text */}
            {label ?
                <Text style={[
                    style.r14,
                    styles.lbl,
                    { color: laberlColor || Colors.txt2 }
                ]}>
                    {label}
                </Text>
                : null
            }

            {/* Input Wrapper  */}
            <View style={DEFAULT_WRAPPER_STYLES}>
                {/* WithIcon? */}
                {iconId && !IconElement
                    ? <MyIcon
                        name={iconId}
                        size={24}
                        color={inptxtColor || Colors.primary}
                    ></MyIcon>
                    : null
                }
                {IconElement ? IconElement : null}

                {/* TEXT */}
                <TextInput
                    placeholder={placeholder}
                    placeholderTextColor={phtxtColor || Colors.disable}
                    selectionColor={Colors.primary}
                    style={DEFAULT_INPUT_STYLES}
                    value={value}
                    onChangeText={onChangeText}
                    onBlur={onBlur}
                    secureTextEntry={passwordEntry}
                    autoCapitalize='none'
                    autoComplete='off'
                />

                {AddElement ? AddElement : null}
            </View >
        </>
    )
}

const styles = StyleSheet.create({
    lbl: {
        paddingLeft: 5,
        marginTop: 10,
        fontWeight: 'bold',
        letterSpacing: 0.5
    }
})


interface InputParams {
    placeholder: string,
    label?: string,
    laberlColor?: string,
    InputStyle?: TextStyle,
    WrapperStyle?: TextStyle,
    phtxtColor?: string,
    inptxtColor?: string,
    iconId?: string,
    IconElement?: any,
    AddElement?: any,
    value?: any
    onChangeText?: any
    passwordEntry?: boolean,
    onBlur?: any
}
