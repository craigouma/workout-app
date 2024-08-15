import {  View, Text ,SafeAreaView, TextInput, StatusBar,TouchableOpacity,Image,ScrollView,ImageBackground,Dimensions} from 'react-native'
import React,{useState,useContext} from 'react'
import theme from '../theme/theme';
import themeContext from '../theme/themeContex';
import { Colors } from '../theme/color';
import style from '../theme/style';
import Icon from 'react-native-vector-icons/Ionicons';
import { RadioButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';


const width =Dimensions.get('screen').width
const height =Dimensions.get('screen').height


export default function Aboutyourself() {

    const theme = useContext(themeContext);
    const [checked, setChecked] = useState(false);
    const navigation=useNavigation();
    const [darkMode,setDarkMode] = useState(false)

  return (
    <SafeAreaView style={[style.area,{backgroundColor:theme.bg,paddingTop:30}]}>
       {/* <StatusBar backgroundColor={darkMode === true ? '#000':'#fff'} barStyle={darkMode === true  ? 'light-content' : 'dark-content'} translucent={false}/> */}
       <View style={[style.main,{backgroundColor:theme.bg}]}>
       <View style={{flex:1,justifyContent:'center'}}>
           <Text style={[style.title1,{color:theme.txt}]}>Mussles</Text>
           <Text style={{color:theme.txt,fontSize:16,fontFamily:'Itim-Regular'}}>Exercise with style</Text>
        </View>
        <View style={{flex:2.7,marginTop:-30}}>
          <Text style={[style.subtitle,{color:theme.txt,marginBottom:10}]}>Tell us about yourself</Text>
          <Text style={style.subtxt}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
        
          <View style={{flexDirection:'row',alignItems:'center',marginVertical:20}}>
            <View style={[ style.txtinput,{width:width/2.4,paddingVertical:7,flexDirection:'row'}]}>
            <RadioButton

            value="first"
            status={checked === 'first' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('first')}
            color={Colors.primary}
            />
            <Text style={{ paddingTop: 8,fontWeight:'600',color:theme.txt,fontFamily:'Itim-Regular'}}>Male</Text>
            </View>
            <View style={{margin:10}}></View>   
           <View style={[ style.txtinput,{width:width/2.4,paddingVertical:7,flexDirection:'row'}]}>
           <RadioButton
              value="second"
              status={checked === 'second' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('second')}
              color={Colors.primary}/>
            <Text style={{ paddingTop: 8 ,fontWeight:'600',color:theme.txt ,fontFamily:'Itim-Regular'}}>Female</Text>
           </View>

          </View> 

        <View style={{paddingVertical:30,}}>
            <TouchableOpacity  onPress={()=>navigation.navigate('Height')}
            style={style.btn}>
               <Text style={style.btntxt}>Next</Text>
            </TouchableOpacity>
        </View>        
        </View>
        </View>
    </SafeAreaView>
  )
}