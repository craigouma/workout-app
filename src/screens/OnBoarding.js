import {  View, Text ,SafeAreaView, TextInput, StatusBar,TouchableOpacity,Image,ScrollView,ImageBackground} from 'react-native'
import React,{useState,useContext} from 'react'
import theme from '../theme/theme';
import themeContext from '../theme/themeContex';
import { Colors } from '../theme/color';
import style from '../theme/style';
import { useNavigation } from '@react-navigation/native';


export default function OnBoarding() {
    
    const theme = useContext(themeContext);
    const navigation = useNavigation()
    const [darkMode,setDarkMode] = useState(false)


  return (

    <SafeAreaView style={{flex:1, backgroundColor:theme.bg}} >
        <StatusBar backgroundColor="transparent" translucent={true}/>
    
      <ImageBackground 
       source={theme.boarding}
      style={{flex:1,}}>
            
        <View style={{flex:1.5,}}>

        </View>
        <View style={{flex:1, paddingHorizontal:20}}>
          <Text style={[style.title,{textAlign:'center',paddingHorizontal:20}]}>Welcome, let's exercise together</Text>
        <View style={{marginTop:20}}>
          <Text style={[style.txt,{textAlign:'center',lineHeight: 25}]}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy </Text>
        </View>
        <View style={{paddingVertical:30,}}>
            <TouchableOpacity onPress={()=>navigation.navigate('Language')}
            style={[style.btn,{backgroundColor:Colors.btn}]}>
                <Text style={style.btntxt}>Start Introduction</Text>
            </TouchableOpacity>
        </View>
        
        </View>

      </ImageBackground>   
    </SafeAreaView>
)
}