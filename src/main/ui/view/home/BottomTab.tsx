import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text, Image} from 'react-native';
import Notification from '../../view/home/Notification.tsx';
import Profile from '../../view/home/Profile.tsx';
import Search from '../../view/home/Search.tsx';
import Home1 from '../../view/home/Home1.tsx';

const Tab = createBottomTabNavigator();

const ICONS_MENU = {
  Home: 'https://img.icons8.com/ios/50/home--v1.png',
  Profile: 'https://img.icons8.com/ios/50/gender-neutral-user--v1.png',
  Search: 'https://img.icons8.com/ios/50/search--v1.png',
  Notification: 'https://img.icons8.com/ios/50/appointment-reminders.png',
};

const renderIcon = (
  icon: string,
  props: {focused: boolean; color: string; size: number},
) => (
  <Image
    source={{uri: icon}}
    style={{tintColor: props.color, height: 25, width: 25}}
  />
);

const renderLabel = (props: {
  focused: boolean;
  color: string;
  children: string;
}) =>
  props.focused ? (
    <Text style={{color: props.color, fontSize: 7}}>{props.children}</Text>
  ) : null;
function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#000000',
        tabBarLabelStyle: {flexDirection: 'row'},
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Home1}
        options={{
          tabBarLabel: props => renderLabel({...props, children: '●'}),
          tabBarIcon: props => renderIcon(ICONS_MENU.Home, props),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: props => renderLabel({...props, children: '●'}),
          tabBarIcon: props => renderIcon(ICONS_MENU.Search, props),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarLabel: props => renderLabel({...props, children: '●'}),
          tabBarIcon: props => renderIcon(ICONS_MENU.Notification, props),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: props => renderLabel({...props, children: '●'}),
          tabBarIcon: props => renderIcon(ICONS_MENU.Profile, props),
        }}
      />
    </Tab.Navigator>
  );
}
export default BottomTab;
