import React from 'react';
import { Text} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Colors from '../../utills/Colors';

const Tab = createBottomTabNavigator();

//screeens 
import Home from '../../screens/BottomTabScreens/MainScreen/Home';
import Notification from '../../screens/BottomTabScreens/Notification/Notification';
//import Account from '../../screens/BottomTabScreens/Account/Account';


function BottomTab() {
  return (
    <Tab.Navigator 
    labeled={false}
    activeColor={Colors.Appthemecolor}
    screenOptions={
      {
      headerShown:false,
       tabBarActiveTintColor:Colors.Appthemecolor,
         tabBarInactiveTintColor:'grey',
           tabBarStyle:  {height: 70 },
       
       } }
    tabBarOptions={{
      activeTintColor:Colors.Appthemecolor,
      labelStyle: {
        fontSize: 12,
        marginBottom:12,
        padding: 0,
        fontWeight:'bold'
      },
    }}
    >
      <Tab.Screen name="Home" component={Home} 
      options={{
        headerShown: false,
        tabBarIcon: ({ color }) => (
         <Icon name="home" color={color} size={26} />
        ),
      }}/>
     <Tab.Screen name="Notification" component={Notification} 
       options={{
        headerShown: false,
        title:'Notification',
        tabBarIcon: ({ color }) => (
          <Icon name="notifications" color={color} size={26} />
         ),
        }}/>
    
            {/* <Tab.Screen name="Account" component={Account} 
       options={{
        headerShown: false,
        title:'Profile',
        tabBarIcon: ({ color }) => (
          <Ionicons name="person" color={color} size={26} />
         ),
        }}/> */}
    </Tab.Navigator>
  );
}
export default BottomTab;