import { View, Text } from 'react-native'
import React from 'react'
import Label from '../Label'
import { scale } from 'react-native-size-matters'
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons'; 
import { appColors } from '../../utils/appColors';
export default function index() {
  return (
    <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
      <Label text="on.time" style={{fontSize:scale(20)}} bold/>  
      <View style={{  flexDirection:'row', justifyContent:'space-between', flex:0.3  }} >
         <MaterialIcons name="notifications" color={appColors.white}  size={scale(24)}/>
         <MaterialIcons name="more-vert" color={appColors.white}  size={scale(24)}/>
      </View>
    </View>
  )
}