
import * as React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens
import SliderScreen from '../../screens/StackScreens/SliderScreeen/SliderScreen';

const Stack = createNativeStackNavigator();
function StackNav() {
  return (
      <Stack.Navigator>

      <Stack.Screen name="SliderScreen" component={SliderScreen}
        options={{
        headerShown: false,
        }} />
      </Stack.Navigator>
  );
}

export default StackNav;