import { View, Text, SafeAreaView,Image,Dimensions,ActivityIndicator,StatusBar } from 'react-native'
import React,{useState,useContext} from 'react'
import style from '../theme/style'
import themeContext from '../theme/themeContex';
import { Colors } from '../theme/color';
import theme from '../theme/theme';
import { useNavigation } from '@react-navigation/native';


const width =Dimensions.get('screen').width
const height =Dimensions.get('screen').height


export default function Splash() {
    const theme = useContext(themeContext);
    const navigation=useNavigation();
    const [darkMode,setDarkMode] = useState(false)


  return (
    <SafeAreaView style={{backgroundColor:theme.background,flex:1}}>
            
            <StatusBar backgroundColor="transparent" translucent={true}/>

      <View style={{flex:2.5,alignItems:'center',justifyContent:'center'}}>
        <Image source={require('../../assets/image/Title.png')}
          resizeMode='stretch'
          style={{alignSelf:'center',height:height/7,width:width-40}}
        // style={{resizeMode:'center',width:width/1.5,}}
        >

        </Image>
      </View>

      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <ActivityIndicator size={50} color={Colors.btn}  />
      </View>

    </SafeAreaView>
  )
}