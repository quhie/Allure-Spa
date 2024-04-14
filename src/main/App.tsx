import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import OnboardingScreen from './ui/view/welcome/Onbording.tsx';
import SplashScreen from './ui/view/welcome/SplashScreen.tsx';
import Welcome from './ui/view/welcome/Welcome.tsx';
import LoginScreen from './ui/view/auth/Login.tsx';
import RegisterScreen from './ui/view/auth/Register.tsx';
import Home from './ui/view/home/BottomTab.tsx';
import DetailProfile from './ui/view/home/DetailProfile/DetailProfile.tsx';
import Settings from './ui/view/home/DetailProfile/Settings.tsx';
import BottomTab from './ui/view/home/BottomTab.tsx';
import DrawerNavigation from '../main/ui/view/home/DrawNavigator.tsx';

import DetailService from '../main/ui/Item/DetailService.tsx';
import DetailProduct from '../../src/main/ui/Item/DetailProduct.tsx';
import CustomCheckbox from '../../src/main/ui/Item/checkBox/CustomCheckbox.tsx';
import CartProvider from './ui/Item/CartProvider.tsx';
import Cart from "../../src/main/ui/Item/cart.tsx";
const Stack = createStackNavigator();

function App(): React.JSX.Element {
  // @ts-ignore
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen
            name="Onboarding"
            component={OnboardingScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="DetailProfile"
            component={DetailProfile}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Settings"
            component={Settings}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="BottomTab"
            component={BottomTab}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="DrawerHome"
            component={DrawerNavigation}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="DetailService"
            component={DetailService}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="DetailProduct"
            component={DetailProduct}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="CustomCheckbox"
            component={CustomCheckbox}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Cart"
            component={Cart}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}

export default App;
