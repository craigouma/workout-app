import { View, Text,StatusBar } from 'react-native'
import React,{useState,useEffect} from 'react';
// import { createStackNavigator } from '@react-navigation/stack';

import { NavigationContainer , DarkTheme, DefaultTheme} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { EventRegister } from 'react-native-event-listeners';
import theme from '../theme/theme';
import themeContext from '../theme/themeContex';
import Introduction from '../Introduction';
import Loginemail from '../screens/loginscreens/login-email';
import CreatAccount from '../screens/loginscreens/CreatAccount';
import FinalOnBoarding from '../screens/FinalOnBoarding';
import Splash from '../screens/Splash';
import Login from '../screens/loginscreens/Login';
import Signup from '../screens/loginscreens/Signup';
import OnBoarding from '../screens/OnBoarding';
import Language from '../screens/Language';
import Aboutyourself from '../screens/Aboutyourself';
import Location from '../screens/Location';
import HelpSupport from '../screens/HelpSupport';
import Forgot from '../screens/Forgot';
import Changepass from '../screens/Changepass';
import Height from '../screens/Height';
import Languagelist from '../screens/Languagelist';
import Forgotpass from '../screens/Forgotpass';
import NewPassword from '../screens/NewPassword';
import Otp from '../screens/Otp';
import User from '../screens/User';
import UserJProfile from '../screens/UserJProfile';
import Security from '../screens/Security';
import Notification from '../screens/Notification';
import Language1 from '../screens/Language1';
import Home from '../screens/Home';
import TodayPlane from '../screens/TodayPlane';
import PlaneDetail from '../screens/PlaneDetail';
import Workout from '../screens/Workout';
import Allworkout from '../screens/Allworkout';
import Workoutdetail from '../screens/Workoutdetail';
import PlayWorkout from '../screens/PlayWorkout';
import Legal from '../screens/Legal';
import Profile from '../screens/Profile';
import BottomNavigator from './BottomNavigator';
import Chat from '../screens/Chat';
import Message from '../screens/Message';
import MessageN from '../screens/MessageN';
import Messagedelete from '../screens/Messagedelete';
import TodaysPlaneAll from '../screens/TodaysPlaneAll';
import { Colors } from '../theme/color';
// import Messagedelete from '../screens/Messagedelete';


const Stack = createNativeStackNavigator();

export default function StackNavigator() {

   
  const [darkMode,setDarkMode] =useState(false)
      // const toggleSwitch = () => setDarkMode(previousState => !previousState);

    
    useEffect(() => {
      const listener= EventRegister.addEventListener('ChangeTheme',(data) =>{
        setDarkMode(data) 
        console.log(data)

      })
    
      return () => {
        EventRegister.removeAllListeners(listener)
      }
    }, [darkMode])

    const [showSplashScreen, setshowSplashScreen] = useState(true);
    useEffect(() => {
      setTimeout(() => {
        setshowSplashScreen(false);
      }, 4000);
  
  
    }, [])

  return (
    
    <themeContext.Provider value={darkMode === true ? theme.dark : theme.light}>
    <NavigationContainer theme={darkMode ===true ? DarkTheme : DefaultTheme} >
    {/* <StatusBar
      backgroundColor={theme.bg}
      barStyle={theme.txt}
  />  */}

   <StatusBar backgroundColor={darkMode === true ? Colors.active: Colors.secondary} 
        barStyle={darkMode === true  ? 'light-content' : 'dark-content'} translucent={false}
        />
    <Stack.Navigator>
    {
        showSplashScreen ?
          <Stack.Screen
            name="Splash"
            component={Splash}
            options={{ headerShown: false }} />
          : null
      } 
      
      <Stack.Screen 
      name="Introduction" 
      component={Introduction} 
      options={{ headerShown:false }}/>
      
    {/* <Stack.Screen 
      name="Splash" 
      component={Splash} 
      options={{ headerShown:false }}/> */}

      <Stack.Screen 
      name="FinalOnBoarding" 
      component={FinalOnBoarding} 
      options={{ headerShown:false }}/>
     
    
     
     <Stack.Screen 
      name="Login" 
      component={Login} 
      options={{ headerShown:false }}/>

     <Stack.Screen 
      name="loginemail" 
      component={Loginemail} 
      options={{ headerShown:false }}/>

     <Stack.Screen 
      name="CreatAccount" 
      component={CreatAccount} 
      options={{ headerShown:false }}/>

     <Stack.Screen 
      name="Signup" 
      component={Signup} 
      options={{ headerShown:false }}/>

     <Stack.Screen 
      name="OnBoarding" 
      component={OnBoarding} 
      options={{ headerShown:false }}/>

     <Stack.Screen 
      name="Language" 
      component={Language} 
      options={{ headerShown:false }}/>

     <Stack.Screen 
      name="Aboutyourself" 
      component={Aboutyourself} 
      options={{ headerShown:false }}/>

     <Stack.Screen 
      name="Location" 
      component={Location} 
      options={{ headerShown:false }}/>

    <Stack.Screen 
      name="HelpSupport" 
      component={HelpSupport} 
      options={{ headerShown:false }}/>

    <Stack.Screen 
      name="Forgot" 
      component={Forgot} 
      options={{ headerShown:false }}/>

    <Stack.Screen 
      name="Changepass" 
      component={Changepass} 
      options={{ headerShown:false }}/>

    <Stack.Screen 
      name="Height" 
      component={Height} 
      options={{ headerShown:false }}/>

    <Stack.Screen 
      name="Languagelist" 
      component={Languagelist} 
      options={{ headerShown:false }}/>
    
    <Stack.Screen
            name="Forgotpass"
            component={Forgotpass}
            options={{ headerShown: false }} />

          <Stack.Screen
            name="NewPassword"
            component={NewPassword}
            options={{ headerShown: false }} />

      <Stack.Screen 
      name="Otp" 
      component={Otp} 
      options={{ headerShown:false }}/>

      <Stack.Screen 
      name="User" 
      component={User} 
      options={{ headerShown:false }}/>

      <Stack.Screen 
      name="Security" 
      component={Security} 
      options={{ headerShown:false }}/>

      <Stack.Screen 
      name="Notification" 
      component={Notification} 
      options={{ headerShown:false }}/>

      <Stack.Screen 
      name="Language1" 
      component={Language1} 
      options={{ headerShown:false }}/>
       

      {/* <Stack.Screen 
      name="Home" 
      component={Home} 
      options={{ headerShown:false }}/> */}
      
      <Stack.Screen 
      name="TodayPlane" 
      component={TodayPlane} 
      options={{ headerShown:false }}/>

      <Stack.Screen 
      name="TodaysPlaneAll" 
      component={TodaysPlaneAll} 
      options={{ headerShown:false }}/>

      <Stack.Screen 
      name="PlaneDetail" 
      component={PlaneDetail} 
      options={{ headerShown:false }}/>

      {/* <Stack.Screen 
      name="Workout" 
      component={Workout} 
      options={{ headerShown:false }}/> */}

      <Stack.Screen 
      name="Allworkout" 
      component={Allworkout} 
      options={{ headerShown:false }}/> 

      <Stack.Screen 
      name="Workoutdetail" 
      component={Workoutdetail} 
      options={{ headerShown:false }}/>

      <Stack.Screen 
      name="Legal" 
      component={Legal} 
      options={{ headerShown:false }}/> 

       {/* <Stack.Screen 
      name="Profile" 
      component={Profile} 
      options={{ headerShown:false }}/>  */}

      <Stack.Screen 
      name="Message" 
      component={Message} 
      options={{ headerShown:false }}/>

      <Stack.Screen 
      name="MessageN" 
      component={MessageN} 
      options={{ headerShown:false }}/> 

      <Stack.Screen 
      name="Messagedelete" 
      component={Messagedelete} 
      options={{ headerShown:false }}/> 

       <Stack.Screen 
      name="Chat" 
      component={Chat} 
      options={{ headerShown:false }}/> 

      <Stack.Screen 
      name="PlayWorkout" 
      component={PlayWorkout} 
      options={{ headerShown:false }}/> 

      <Stack.Screen 
      name="UserJProfile" 
      component={UserJProfile} 
      options={{ headerShown:false }}/>

      

       
  
      <Stack.Screen 
          name ="BottomNavigator"
          component={BottomNavigator} 
          options={{headerShown:false}}/>

    </Stack.Navigator>
    </NavigationContainer>
    </themeContext.Provider>
   
  )
}