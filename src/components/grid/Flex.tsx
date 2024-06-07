import { AppBar, AppBarProps } from '@react-native-material/core';
import React, { forwardRef } from 'react'
import { DimensionValue, Image, Platform, StyleProp, StyleSheet, View, ViewProps, ViewStyle } from 'react-native';
import BackButton from '../utils/BackButton';
import style from 'theme/style';
import UserIcon from '../UserIcon';
import Logo from '../Logo';

type ButtonProps = {
   children: React.ReactNode;
   title?: string;
   w?: DimensionValue;
   h?: DimensionValue;
} & ViewProps;

type TopNavProps = {
   withLogo?: 'dark' | 'white';
   blackBtn?: boolean;
} & AppBarProps;

type RowProps = {
   children: React.ReactNode;
   center?: boolean | null
} & ViewProps;

export const Flex = forwardRef<View, ButtonProps>(({ children, title }, ref) => {
   return (
      <View ref={ref} style={{ display: 'flex' }}>
         {children}
      </View>
   );
});

export const Row = forwardRef<View, RowProps>((P, ref) => {
   const style = {
      display: 'flex',
      flexDirection: 'row',
      alignItems: P.center ? 'center' : 'baseline'
   } as StyleProp<ViewStyle>;

   return (
      <View ref={ref} style={[style, P.style]}>
         {P.children}
      </View>
   );
});

export const Center = forwardRef<View, ButtonProps>(({ children, w, h }, ref) => {
   return (
      <View ref={ref} style={{
         flexDirection: 'row',
         alignItems: 'center',
         justifyContent: 'center',
         height: h || null,
         width: w || null
      }}>
         {children}
      </View>
   );
});

export const TopNav = forwardRef<AppBarProps, TopNavProps>((p, ref) => {
   // Set the property from the outside-param or by the given default value
   const useDef = (property: any, defVal: any) => property != undefined ? property : defVal
   const txtStyle = [style.apptitle];
   const LOGO = <View style={[styles.logoWrapper, { width: p.withLogo === 'dark' ? 100 : 50 }]}>
      <Logo type={p.withLogo} />
   </View>
   const BACK = <BackButton black={useDef(p.blackBtn, true)} />
   const BELL = <UserIcon />

   return (
      <AppBar
         style={[{
            backgroundColor: 'transparent',
            marginTop: Platform.OS === 'ios' ? 10 : 30,
            marginHorizontal: 20,
         }, p.style]}
         elevation={0}
         leading={useDef(
            p.leading,
            p.withLogo ? LOGO : BACK
         )}
         centerTitle={useDef(p.centerTitle, true)}
         title={p.title}
         titleStyle={useDef(p.titleStyle, txtStyle)}
         trailing={useDef(p.trailing, BELL)}
      />
   );
});

const styles = StyleSheet.create({
   logoStyle: {
      height: 40,
      width: 100,
      marginHorizontal: 10,
      marginTop: 5
   },
   logoWrapper: {
      display: 'flex',
      justifyContent: 'flex-start'
   }
})
