import React from 'react';
import { ActivityIndicator, FlatList, Text, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import moment from 'moment';
import 'moment/locale/fr';

import CalendarDay from './CalendarDay';
import DayComponent from './containers/Day';
import style from '../Style';
import Swiper from './Swiper';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

moment.locale('fr');

function capitalize(str) {
    return `${str.charAt(0).toUpperCase()}${str.substr(1)}`;
}

export default class DaySwiper extends React.Component {
    constructor(props) {
        super(props);

        const currentDay = moment();
        const groupName = this.props.screenProps.groupName;
        const days = this.generateDays();

        this.state = {
            groupName,
            currentDay: currentDay,
            currentDayIndex: days.findIndex((e) => e.isSame(currentDay, 'day')),
            selectedDay: currentDay,
            days: [],
            shownMonth: {
                number: currentDay.month(),
                string: capitalize(currentDay.format('MMMM')),
            },
            days,
            selectedDay: currentDay,
        };

        this.viewability = {
            itemVisiblePercentThreshold: 50,
        };

        this.checkViewableItems = this.checkViewableItems.bind(this);
        this.onTodayPress = this.onTodayPress.bind(this);
        this.onDayPress = this.onDayPress.bind(this);
    }

    onTodayPress() {
        this.setState(
            {
                selectedDay: this.state.currentDay,
            },
            () => {
                if (this.calendarList) {
                    this.calendarList.scrollToIndex({index: this.state.currentDayIndex, animated: true});
                }
            }
        );
    }

    onDayPress(dayItem) {
        this.setState({
            selectedDay: dayItem,
        });
    }

    generateDays() {
        const currentDate = moment();
        const beginningGenerationDate = moment()
            .date(1)
            .month(7);

        if (currentDate.month() > 7) {
            beginningGenerationDate.year(currentDate.year());
        } else {
            beginningGenerationDate.year(currentDate.year() - 1);
        }

        const days = [];

        for (let i = 0, iMax = 365; i < iMax; i++) {
            days.push(moment(beginningGenerationDate).add(i, 'd'));
        }

        return days;
    }

    checkViewableItems(info) {
        if (!info.viewableItems.length) {
            return;
        }

        const date = moment(info.viewableItems[0].item);

        if (date.month() !== this.state.shownMonth.number) {
            this.setState({
                shownMonth: {
                    number: date.month(),
                    string: capitalize(date.format('MMMM')),
                },
            });
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <DayComponent key={this.state.days[0].dayOfYear()} day={this.state.selectedDay} groupName={this.state.groupName} />
                <View
                    style={{
                        flexGrow: 0,
                        backgroundColor: 'white',
                        borderTopColor: '#DDDDDD',
                        borderTopWidth: 1,
                    }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'stretch',
                            height: 38,
                        }}>
                        <View style={{ position: 'absolute', top: 0, right: 0, left: 0 }}>
                            <Text style={{ textAlign: 'center', fontSize: 18, marginVertical: 8 }}>{this.state.shownMonth.string}</Text>
                        </View>
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={this.onTodayPress}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 16 }}>
                                <MaterialIcons name="event-note" size={18} />
                                <Text style={{ textAlign: 'center', fontSize: 12, marginLeft: 8 }}>Aujourd'hui</Text>
                            </View>
                        </TouchableOpacity>
                        <View>
                            <Text style={{ textAlign: 'center', fontSize: 18, marginVertical: 8 }} />
                        </View>
                    </View>
                    <FlatList
                        ref={(list) => (this.calendarList = list)}
                        showsHorizontalScrollIndicator={false}
                        data={this.state.days}
                        horizontal={true}
                        keyExtractor={(item, index) => `${item.date()}-${item.month()}`}
                        viewabilityConfig={this.viewability}
                        onViewableItemsChanged={this.checkViewableItems}
                        initialScrollIndex={this.state.currentDayIndex}
                        getItemLayout={(data, index) => ({
                            length: style.calendarList.itemSize,
                            offset: style.calendarList.itemSize * index,
                            index,
                        })}
                        extraData={this.state}
                        renderItem={({ item }) => (
                            <CalendarDay
                                item={item}
                                selectedDay={this.state.selectedDay}
                                currentDay={this.state.currentDay}
                                onPressItem={this.onDayPress}
                            />
                        )}
                    />
                </View>
            </View>
        );
    }
}