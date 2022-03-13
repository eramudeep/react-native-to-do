import {View, Image, Text, StyleSheet} from 'react-native';
import React from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import {scale} from 'react-native-size-matters';
import Label from '../../components/Label';
import LinearGradient from 'react-native-linear-gradient';

import {appColors} from '../../utils/appColors';
import CustomButton from 'Components/CustomButton';
import Container from 'Components/Container';

export default function index({navigation}) {
  const _onDone = () => {
    navigation?.navigate('Home');
  };
  return (
    <>
      <LinearGradient
        colors={['#000', appColors.primary,'#000']}
        style={{flex:1, justifyContent:'space-between', alignItems:'center', paddingVertical:scale( 150), paddingHorizontal:scale(30) }}>
         <Label style={{fontSize:scale(60)}}  text="on.time" />
         <Label style={{fontSize:scale(26)}}  text={`Make yourself \n more on time`} />

         <CustomButton onPress={_onDone} style={{width:'100%'}}  label="START" labelStyle={{color:'#000', fontSize:scale(24)}} />
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  buttonCircle: {
    width: scale(7),
    height: scale(7),
    borderRadius: scale(3),
    backgroundColor: 'rgba(0, 0, 0, .2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeButton: {
    width: scale(8),
    height: scale(8),
    backgroundColor: appColors.primary,
    borderRadius: scale(5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    //   backgroundColor:"red"
    //   paddingHorizontal:scale(20)
  },
  btn: {
    marginTop: scale(10),
    fontSize: scale(15),
  },
});
