import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Timeline from 'react-native-timeline-flatlist';
import Label from '../Label';
import {scale} from 'react-native-size-matters';
import {appColors} from '../../utils/appColors';
import CheckBox from '@react-native-community/checkbox';

export default function index() {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const data = [
    {
      time: '07.00 am - 10.00 am',
      title: 'Meeting with Anomali Team',
      place: 'Anomali Office',
      notes: 'Nothing',
    },
    {
      time: '07.00 am - 10.00 am',
      title: 'Meeting with Anomali Team',
      place: 'Anomali Office',
      notes: 'Nothing',
    },
  ];

  const DataCard = ({label, value}) => {
    return (
      <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
        <Label text={label} style={[{padding: scale(5)}]} semiBold />
        <Label text={value} style={[{padding: scale(5)}]} />
      </View>
    );
  };
  const renderDetail = (rowData, sectionID, rowID) => {
    const {title, time, place, notes} = rowData;
    return (
      <View
        style={{
          width: '92%',
          backgroundColor: appColors.primary,
          borderRadius: scale(4),
          paddingHorizontal: scale(10),
          top: scale(-9),
          left: scale(15),
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottomWidth: scale(1),
            borderBottomColor: appColors.gray,
          }}>
          <Label
            text={title}
            style={[{paddingVertical: scale(10), fontSize: scale(14)}]}
            semiBold
          />
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={(newValue) => setToggleCheckBox(newValue)}
            boxType="square"
            style={{height: scale(14), width: scale(14)}}
            onCheckColor={appColors.white}
            onTintColor={appColors.white}
          />
        </View>
        <DataCard label={'Time'} value={time} />
        <DataCard label={'Place'} value={place} />
        <DataCard label={'Note'} value={notes} />
      </View>
    );
  };

  return (
    <View>
      <Timeline
        data={data}
        options={{
          style: {paddingVertical: 30, paddingTop: scale(25)},
        }}
        isUsingFlatlist={true}
        showTime={false}
        renderDetail={renderDetail}
        circleSize={scale(32)}
        circleColor={appColors.secondary}
        lineColor={appColors.secondary}
        lineWidth={scale(4)}
      />
    </View>
  );
}
const styles = StyleSheet.create({});
