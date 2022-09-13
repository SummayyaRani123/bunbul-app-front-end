
import * as React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens
import SplashScreen from '../../screens/AuthScreens/Splash/Splash';
import Login from '../../screens/AuthScreens/SignIn/Login'
import Signup  from '../../screens/AuthScreens/SignUp/Signup'
import ForgetPassword from '../../screens/AuthScreens/ForgetPassword/ForgetPassword';
import NewPassword from '../../screens/AuthScreens/NewPassword/NewPassword';
import Verification from '../../screens/AuthScreens/Email Verification/Verification'
import Onboarding from '../../screens/AuthScreens/OnboardingSwipper/Onboarding';

const Stack = createNativeStackNavigator();
function AuthNav() {
  return (
      <Stack.Navigator>

      <Stack.Screen name="SplashScreen" component={SplashScreen}
        options={{
        headerShown: false,
        }} />
             <Stack.Screen name="Onboarding" component={Onboarding}
        options={{
        headerShown: false,
        }} />
      <Stack.Screen name="Login" component={Login}
        options={{
        headerShown: false,
        }} />
      <Stack.Screen name="Signup" component={Signup}
        options={{
        headerShown: false,
        }} />
       <Stack.Screen name="ForgetPassword" component={ForgetPassword}
        options={{
        headerShown: false,
        }} />
 <Stack.Screen name="NewPassword" component={NewPassword}
        options={{
        headerShown: false,
        }} />
 <Stack.Screen name="Verification" component={Verification}
        options={{
        headerShown: false,
        }} />
 
      </Stack.Navigator>
  );
}

export default AuthNav;