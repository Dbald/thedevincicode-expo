import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import PodcastScreen from '../screens/PodcastScreen';
import VideoScreen from '../screens/VideoScreen';
import InquireScreen from '../screens/InquireScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'android'
          ? `ios-home${focused ? '' : '-outline'}`
          : 'md-home'
      }
    />
  ),
};

const PodcastStack = createStackNavigator({
  Podcast: PodcastScreen,
});

PodcastStack.navigationOptions = {
  tabBarLabel: 'Podcast',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'android' ? `ios-radio${focused ? '' : '-outline'}` : 'md-radio'}
    />
  ),
};

const VideoStack = createStackNavigator({
  Videos: VideoScreen,
});

VideoStack.navigationOptions = {
  tabBarLabel: 'Videos',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'android' ? `ios-film${focused ? '' : '-outline'}` : 'md-film'}
    />
  ),
};

const InquireStack = createStackNavigator({
  Inquire: InquireScreen,
});

InquireStack.navigationOptions = {
  tabBarLabel: 'Inquire',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      color='black'
      name={Platform.OS === 'android' ? `ios-mail${focused ? '' : '-outline'}` : 'md-mail'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  PodcastStack,
  VideoStack,
  InquireStack,
},{
  tabBarOptions: {
    inactiveTintColor: 'black',
    inactiveBackgroundColor: '#fff952',
    TabBarIcon: {
      activeTintColor: 'black',
    }
  }
});