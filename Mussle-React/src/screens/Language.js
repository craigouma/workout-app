import {  View, Text ,SafeAreaView, TextInput, StatusBar,TouchableOpacity,Image,ScrollView,ImageBackground} from 'react-native'
import React,{useState,useContext} from 'react'
import theme from '../theme/theme';
import themeContext from '../theme/themeContex';
import { Colors } from '../theme/color';
import style from '../theme/style';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';



export default function Language() {
 
    const theme = useContext(themeContext);
    const navigation=useNavigation();
    const [darkMode,setDarkMode] = useState(false)


    return (
    <SafeAreaView style={[style.area,{backgroundColor:theme.bg,paddingTop:20}]}>
        <View style={[style.main,{backgroundColor:theme.bg}]}>
       {/* <StatusBar backgroundColor={darkMode === true ? '#000':'#fff'} barStyle={darkMode === true  ? 'light-content' : 'dark-content'} translucent={false}/> */}
        <View style={{flex:1,justifyContent:'center'}}>
           <Text style={[style.title1,{color:theme.txt}]}>Mussles</Text>
           <Text style={{color:theme.txt,fontSize:16,fontFamily:'Itim-Regular'}}>Exercise with style</Text>
        </View>
        <View style={{flex:2.7,marginTop:-30}}>
          <Text style={[style.subtitle,{color:theme.txt,marginBottom:10}]}>Select your Language</Text>
          <Text style={style.subtxt}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
        
          <View style={[style.txtinput,{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginVertical:20}]}>
                    
                    <TextInput placeholder='Select Language'
                        selectionColor={Colors.primary}
                        placeholderTextColor={theme.txt}
                        style={{backgroundColor:theme.bg,color:Colors.disable, fontFamily:'Itim-Regular'}}
                    ></TextInput>
                    <TouchableOpacity onPress={()=>navigation.navigate('Languagelist')}>
                        <Icon name='chevron-down' color={theme.txt} size={20} />
                    </TouchableOpacity>
        </View>
        <View style={{paddingVertical:30,}}>
            <TouchableOpacity onPress={()=>navigation.navigate('Aboutyourself')}
            style={style.btn}>
               <Text style={style.btntxt}>Save</Text>
            </TouchableOpacity>
        </View>        
        </View>
        </View>
    </SafeAreaView>
  )
}