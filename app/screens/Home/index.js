import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {setError} from '../../redux/actions';
import {} from 'react-native-gesture-handler';
import {features, starterIntro} from '../../utils/MockData';
import {AlertHelper} from '../../utils/AlertHelper';
import {appColors} from '../../utils/appColors';
import CustomInput from '../../components/CustomInput';
import Label from '../../components/Label';
import CustomButton from '../../components/CustomButton';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import Divider from '../../components/Divider';
import {FloatingAction} from 'react-native-floating-action';

import {scale} from 'react-native-size-matters';
import ReduxWrapper from '../../redux/ReduxWrapper';
import Container from '../../components/Container';
import Header from '../../components/Header';
import Calander from '../../components/Calander';
import Timeline from '../../components/Timeline';
const TABS = {
  SCHEDULE: 1,
  NOTE: 2,
};
function Home({toggleDarkMode$}) {
  const FlotAction = ({onPress,label,icon}) => {
    return (
      <View style={{ flexDirection:'row', justifyContent:'center', alignItems:'center'}} >
        <Label text={label} semiBold/>
        <View
          style={{
            marginLeft:scale(20),
            height: scale(40),
            width: scale(40),
            backgroundColor: appColors.secondary,
            borderRadius:scale(20)
          }}
        />
      </View>
    );
  };
  const items = [
    { 
       
      render: () => ( <FlotAction label={'Accessibility'} /> ), 
      name: 'bt_accessibility',
      position: 1,
    },
    { 
       
      render: () => ( <FlotAction label={'Accessibility'} /> ), 
      name: 'bt_accessibility_2',
      position: 2,
    },
     
    { 
       
      render: () => ( <FlotAction label={'Accessibility'} /> ), 
      name: 'bt_accessibility_3',
      position: 3,
    },
     
  ];
  const [activeTab, setActiveTab] = useState(TABS.SCHEDULE);
  const togleTab = (tabIndex) => {
    setActiveTab(tabIndex);
  };
  const getColor = (currentTab) => {
    if (currentTab == activeTab) {
      return appColors.primaryDark;
    }
    return appColors.primary;
  };

  const _renderTab = () => {
    return (
      <View
        style={{
          marginTop: scale(20),
          backgroundColor: appColors.primary,
          height: scale(40),
          borderRadius: scale(4),
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: scale(10),
        }}>
        <CustomButton
          label="Schedule"
          onPress={() => togleTab(TABS.SCHEDULE)}
          style={{
            paddingHorizontal: scale(30),
            backgroundColor: getColor(TABS.SCHEDULE),
            height: scale(32),
            borderRadius: scale(4),
          }}
          text="Sechedule"
        />
        <CustomButton
          label="Note"
          onPress={() => togleTab(TABS.NOTE)}
          style={{
            paddingHorizontal: scale(30),
            backgroundColor: getColor(TABS.NOTE),
            height: scale(32),
            borderRadius: scale(4),
          }}
          text="Note"
        />
      </View>
    );
  };
  return (
    <Container isScrollable>
      <View style={{paddingVertical: scale(10)}}>
        <Header />
        <View
          style={{paddingVertical: scale(10), paddingHorizontal: scale(20)}}>
          {_renderTab()}
        </View>
      </View>
      <Calander />
      <View style={{paddingVertical: scale(20)}}>
        <Label text="Schedule" bold />
      </View>
      <Timeline />

      <FloatingAction
        actions={items}
        onPressItem={(name) => {
          console.log(`selected button: ${name}`);
        }}
        //textStyle={{fontFamily: 'Nunito-SemiBold', color:'red'}}

        buttonSize={scale(48)}
        color={appColors.secondary}
      />
    </Container>
  );
}

export default ReduxWrapper(Home);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: 'white',
  },
  header: {
    backgroundColor: appColors.primary,
    alignItems: 'center',
    borderBottomWidth: 12,
    borderBottomColor: '#ddd',
  },
  headerText: {
    color: 'white',
    fontSize: 25,
    padding: 20,
    margin: 20,
    textAlign: 'center',
  },
  TitleText: {
    fontSize: 25,
    // padding: 20,
    marginVertical: 20,
  },
  scrollContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
});
