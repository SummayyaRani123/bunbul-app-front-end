import React from 'react';
import { Text,StyleSheet,View} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


//////////////////app styles///////////////////
import Colors from '../../utills/Colors';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const Tab = createBottomTabNavigator();

//screeens 
import Home from '../../screens/BottomTabScreens/MainScreen/Home';
import MarketPlace from '../../screens/BottomTabScreens/MarketPlace/MarketPlace';
import Profile from '../../screens/BottomTabScreens/Profile/Profile';

import { appImages } from '../../constant/images';


function BottomTab() {
  return (
    <Tab.Navigator 
    labeled={false}
    activeColor={Colors.Appthemecolor}
    screenOptions={
      {
        tabBarShowLabel: false,
        headerShown: false,
       tabBarActiveTintColor:'white',
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
        tabBarIcon: ({ color, focused }) => (
          <View style={[style.tab, focused ? style.selectedTab : null]}>
           <Entypo name="home" color={color} size={32} />
          </View>
        ),
      }}/>
     <Tab.Screen name="MarketPlace" component={MarketPlace} 
       options={{
        headerShown: false,
        title:'Notification',
        tabBarIcon: ({ color,focused }) => (
          <View style={[style.tab, focused ? style.selectedTab : null]}>
          <Entypo name="shop" color={color} size={32} />
          </View>
         ),
        }}/>
    
            <Tab.Screen name="Profile" component={Profile} 
       options={{
        headerShown: false,
        title:'Profile',
        tabBarIcon: ({ color ,focused}) => (
          <View style={[style.tab, focused ? style.selectedTab : null]}>
          <Ionicons name="person" color={color} size={32} />
          </View>
         ),
        }}/>
    </Tab.Navigator>
  );
}
const style = StyleSheet.create({

  tab: {
    width: wp(15),
    height: hp(7),
    borderRadius: wp(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedTab: {
    backgroundColor: Colors.Appthemecolor
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
});
export default BottomTab;