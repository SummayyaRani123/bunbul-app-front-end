
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Provider } from 'react-redux';
import { Store } from './src/redux/store';

//Screens
import AuthNav from './src/navigation/AuthNav/AuthNav';
import BottomTab from './src/navigation/BottomTab/BottomTab';

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
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

export default App;