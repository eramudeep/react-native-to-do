import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {scale} from 'react-native-size-matters';
import ReduxWrapper from 'Redux/ReduxWrapper';
import {appColors} from '../../utils/appColors';

function Label({text, style, appState: {darkMode}, bold, semiBold, medium}) {
  const getFontStyle = () => {
    if (bold) {
      return styles.bold;
    }
    if (semiBold) {
      return styles.semiBold;
    }
    if (medium) {
      return styles.medium;
    }
  };
  return (
    <Text
      style={[
        styles.label,
        
          styles.dark  ,
        getFontStyle(),style,
      ]}>
      {text}
    </Text>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: scale(14),
    color: appColors.black,
    fontFamily: 'Nunito-Regular',
  },
  light: {
    color: appColors.black,
  },
  dark: {
    color: appColors.white,
  },
  bold: {
    fontFamily: 'Nunito-Bold',
  },
  semiBold: {
    fontFamily: 'Nunito-SemiBold',
  },
  medium: {
    fontFamily: 'Nunito-Medium',
  },
});

export default ReduxWrapper(Label);
