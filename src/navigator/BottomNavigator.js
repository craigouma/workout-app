import React,{useContext,useState} from 'react';
import {StyleSheet,Text} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Ionicons from "react-native-vector-icons/Ionicons"
import Profile from '../screens/Profile';
import { Colors } from '../theme/color';
import Workout from '../screens/Workout';
import Statistics from '../screens/Statistics';
import themeContext from '../theme/themeContex';
import Icon from 'react-native-vector-icons/FontAwesome5'


const Tab = createBottomTabNavigator();

export default function MyTabs() {

  const theme = useContext(themeContext);
  const [darkMode,setDarkMode] = useState('false')

  return (
    <Tab.Navigator
    screenOptions={{
      // BottomTabBarHeight:30,
      tabBarStyle: { position: 'absolute',height:60 },
      tabBarLabelStyle: {
        fontSize: 15,
      },
    }}>
    
    <Tab.Screen name="Home" component={Home} 
    options={{
      tabBarShowLabel:true,
      tabBarLabel: ({focused, color,}) => (
        <Text style={{color: focused ? theme.icon : Colors.disable,fontFamily:'Itim-Regular'}}>Home</Text>
      ),
      tabBarIcon:({focused,color}) => {
        return <Ionicons name="home-outline" size={25} 
        color={focused ? theme.icon : Colors.disable} />
      },
      headerShown:false,
    }}
    />
    
  
    <Tab.Screen name="Workout" component={Workout}
     options={{
      tabBarShowLabel:true,
      tabBarLabel: ({focused, color,}) => (
        <Text style={{color: focused ? theme.icon : Colors.disable,fontFamily:'Itim-Regular'}}>Workout</Text>
      ),
      tabBarIcon:({focused,color}) => {
        return <Icon name="dumbbell" size={20}
        color={ focused ? theme.icon : Colors.disable} />
      },
      headerShown:false,
    }} />
 <Tab.Screen name="Statistics" component={Statistics}
     options={{
      tabBarShowLabel:true,
      tabBarLabel: ({focused, color,}) => (
        <Text style={{color: focused ? theme.icon : Colors.disable,fontFamily:'Itim-Regular'}}>Statistics</Text>
      ),
      tabBarIcon:({focused,color}) => {
        return <Ionicons name="analytics-sharp" size={30}
        color={focused ? theme.icon : Colors.disable} />
      },
      headerShown:false,
    }} />

<Tab.Screen name="Profile" component={Profile}
    options={{
      tabBarShowLabel:true,
      tabBarLabel: ({focused, color,}) => (
        <Text style={{color: focused ? theme.icon : Colors.disable,fontFamily:'Itim-Regular'}}>Profile</Text>
      ),
      tabBarIcon:({focused,color}) => {
        return <Ionicons name="person-outline" size={25}
        color={focused ? theme.icon: Colors.disable} />
      },
      headerShown:false,
    }} />

  </Tab.Navigator>
  );
}

