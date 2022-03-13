import {View, Text} from 'react-native';
import React, {useState} from 'react';
import Label from '../Label';
import {
  Calendar,
  ExpandableCalendar,
  TimelineEventProps,
  TimelineList,
  CalendarProvider,
  TimelineProps,
  CalendarUtils,
} from 'react-native-calendars';
import {scale} from 'react-native-size-matters';
import {appColors} from '../../utils/appColors';

export default function index() {
  const [selcetedDate, setSelcetedDate] = useState({});
  const onDayPress = (date) => {
    const {year, month, day} = date;
    setSelcetedDate({
      [`${year}-${month < 10 ? `0${month}` : month}-${day}`]: {
        /*  selected: true,
        marked: true,
        selectedColor: appColors.secondary, */
        startingDay: true,
        endingDay: true,
        color: appColors.secondary,
        textColor: appColors.white,
        height: scale(30),
        width: scale(30),
        borderRadius: scale(20),
      },
    });
  };

  return (
    <>
      <Calendar
        style={{flex: 1}}
        hideArrows={true}
        onDayPress={onDayPress}
        selected={selcetedDate}
        markingType={'period'}
        theme={{
          calendarBackground: 'transparent',
          textDayFontSize: scale(13),
          textDayHeaderFontSize: scale(13),
          textDayFontFamily: 'Nunito-SemiBold',
          textDayHeaderFontFamily: 'Nunito-Bold',
          dayTextColor: appColors.white,
          textMonthFontSize: scale(18),
          textMonthFontFamily: 'Nunito-Bold',
          monthTextColor: appColors.white,
          todayTextColor: appColors.white,
          selectedDayBackgroundColor: appColors.secondary,
          'stylesheet.day.period': {
            today: {
              backgroundColor: appColors.secondary,
              height: scale(30),
              width: scale(30),
              borderRadius: scale(20),
            },
          },
        }}
        markedDates={selcetedDate}
      /> 

    </>
  );
}
