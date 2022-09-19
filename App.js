
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Provider } from 'react-redux';
import { Store } from './src/redux/store';

//Screens
import AuthNav from './src/navigation/AuthNav/AuthNav';
import BottomTab from './src/navigation/BottomTab/BottomTab';
import SliderScreen from './src/screens/StackScreens/SliderScreeen/SliderScreen';
import Settings from './src/screens/StackScreens/Settings/Settings';
import UpdateProfile from './src/screens/StackScreens/UpdateProfile/UpdateProfile';
import EditBundle from './src/screens/StackScreens/Edit Bundle/EditBundle';
import Privacy from './src/screens/StackScreens/Privacy/Privacy';
import CreatePasscode from './src/screens/StackScreens/Passcode/CreatePasscode/CretePasscode';
import UpdatePasscode from './src/screens/StackScreens/Passcode/UpdatePasscode/UpdatePasscode';


const Stack = createNativeStackNavigator();
function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="AuthNav" component={AuthNav}
            options={{
              headerShown: false,
            }} />
          <Stack.Screen name="BottomTab" component={BottomTab}
            options={{
              headerShown: false,
            }} />
          <Stack.Screen name="SliderScreen" component={SliderScreen}
            options={{
              headerShown: false,
            }} />
          <Stack.Screen name="Settings" component={Settings}
            options={{
              headerShown: false,
            }} />
          <Stack.Screen name="UpdateProfile" component={UpdateProfile}
            options={{
              headerShown: false,
            }} />
          <Stack.Screen name="EditBundle" component={EditBundle}
            options={{
              headerShown: false,
            }} />
          <Stack.Screen name="Privacy" component={Privacy}
            options={{
              headerShown: false,
            }} />
          {/* <Stack.Screen name="CreatePasscode" component={CreatePasscode}
            options={{
              headerShown: false,
            }} />
          <Stack.Screen name="UpdatePasscode" component={UpdatePasscode}
            options={{
              headerShown: false,
            }} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;