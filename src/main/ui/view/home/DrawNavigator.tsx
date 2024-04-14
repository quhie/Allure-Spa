import React from 'react';
import 'react-native-gesture-handler';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import BottomTab from './BottomTab.tsx';
import Search from '../../view/home/Search.tsx';
import Notification from './Notification.tsx';
import Profile from './Profile.tsx';
import {
  DrawerNavigationHelpers,
  DrawerDescriptorMap,
} from '@react-navigation/drawer/lib/typescript/src/types';
import {DrawerNavigationState, ParamListBase} from '@react-navigation/native';
import {ScrollViewProps, ScrollView, Image} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {Alert} from 'react-native';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (
  props:
    | (React.JSX.IntrinsicAttributes &
        ScrollViewProps & {
          children: React.ReactNode;
        } & React.RefAttributes<ScrollView>)
    | (React.JSX.IntrinsicAttributes & {
        state: DrawerNavigationState<ParamListBase>;
        navigation: DrawerNavigationHelpers;
        descriptors: DrawerDescriptorMap;
      }),
) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const DrawerNavigation = () => {
  const navigation = useNavigation();

  const handleLogout = () => {
    if (navigation.canGoBack()) {
      Alert.alert('Đăng xuất', 'Bạn có chắc chắn muốn đăng xuất không?', [
        {
          style: 'cancel',
          text: 'Không',
        },
        {text: 'Có', onPress: () => navigation.navigate('Onboarding')},
      ]);
    }
  };

  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerType: 'slide',
        drawerStyle: {
          backgroundColor: '#ffffff',
          width: 300,
          marginTop: 20,
        },
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name="App"
        options={{
          drawerIcon: ({size}) => (
            <Image
              source={{uri: 'https://img.icons8.com/ios/50/home--v1.png'}}
              style={{width: size, height: size}}
            />
          ),
          drawerLabel: 'Home',
          headerShadowVisible: false,
        }}
        component={BottomTab}
      />
      <Drawer.Screen
        name="BottomTab"
        options={{
          drawerIcon: ({size}) => (
            <Image
              source={{uri: 'https://img.icons8.com/ios/50/search--v1.png'}}
              style={{width: size, height: size}}
            />
          ),
          drawerLabel: 'search',
          headerShadowVisible: false,
        }}
        component={Search}
      />
      <Drawer.Screen
        name="Notification"
        options={{
          drawerIcon: ({size}) => (
            <Image
              source={{
                uri: 'https://img.icons8.com/ios/50/appointment-reminders.png',
              }}
              style={{width: size, height: size}}
            />
          ),
          drawerLabel: 'Notification',
          headerShadowVisible: false,
        }}
        component={Notification}
      />
      <Drawer.Screen
        name="Profile"
        options={{
          drawerIcon: ({size}) => (
            <Image
              source={{uri: 'https://img.icons8.com/ios/50/user--v1.png'}}
              style={{width: size, height: size}}
            />
          ),
          drawerLabel: 'Profile',
          headerShadowVisible: false,
        }}
        component={Profile}
      />
      <Drawer.Screen
        name="Logout"
        options={{
          drawerIcon: ({size}) => (
            <Image
              source={{uri: 'https://img.icons8.com/ios/50/logout-rounded.png'}}
              style={{width: size, height: size}}
            />
          ),
          drawerLabel: 'Logout',
          headerShadowVisible: false,
        }}
        component={handleLogout}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
