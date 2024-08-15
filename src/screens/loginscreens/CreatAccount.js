import { View, Text ,SafeAreaView, TextInput, StatusBar,TouchableOpacity,Image,ScrollView} from 'react-native'
import React,{useState,useContext} from 'react'
import theme from '../../theme/theme'
import themeContext from '../../theme/themeContex';
import style from '../../theme/style';
import { Colors } from '../../theme/color';
import { useNavigation } from '@react-navigation/native';

export default function CreatAccount() {
    const theme = useContext(themeContext);
    const navigation=useNavigation();
    const [darkMode,setDarkMode] = useState(false)

  return (
 
    <SafeAreaView style={[style.area,{backgroundColor:theme.bg,paddingTop:30}]}>

              {/* <StatusBar backgroundColor={darkMode === true ? '#000':'#fff'} barStyle={darkMode === true  ? 'light-content' : 'dark-content'} translucent={true}/> */}
              <View style={[style.main,{backgroundColor:theme.bg}]}>
       <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{paddingTop:70,marginBottom:15}}>
        <Text style={[style.logintitle,{color:theme.txt}]}>Create account</Text>
        <Text style={[style.txt1,{textAlign:'center'}]}>Lorem ipsum dolor sit amet</Text>
      </View>
      <View style={{flex:1,paddingTop:30}}>
        <Text style={{color:theme.txt,fontWeight:'500', fontFamily:'Itim-Regular'}}>Email</Text>
        <View style={{paddingTop:10}}>
                    <TextInput placeholder='Enter Your Email Address'
                    selectionColor={Colors.primary}
                    placeholderTextColor={Colors.disable}
                    style={[style.txtinput,{backgroundColor:theme.bg,fontFamily:'Itim-Regular'}]}
                    />
          </View>
          <View style={{paddingVertical:30,}}>
            <TouchableOpacity onPress={()=>navigation.navigate('Otp')} 
            style={style.btn}>
               <Text style={style.btntxt}>Continue with Email</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection:'row',alignItems:'center', justifyContent:'space-between', paddingHorizontal:30}}>
              <View style={style.divider}></View>
              <Text style={{color:Colors.disable, fontFamily:'Itim-Regular'}}>Or continue with</Text>
              <View style={style.divider}></View>
          </View>
          <View style={{paddingTop:30,}}>
            <TouchableOpacity style={[style.btn1,{borderColor:theme.txt,borderWidth:1,backgroundColor:theme.bg}]}>
               <Image source={require('../../../assets/image/Google.png')}></Image>
               <Text style={[style.btntxt1,{color:theme.txt,}]}>Continue with Google</Text>
            </TouchableOpacity>
          </View>
          <View style={{paddingTop:15}}>
            <TouchableOpacity style={[style.btn1,{borderColor:theme.txt,borderWidth:1,backgroundColor:theme.bg}]}>
               <Image source={theme.apple}></Image>
               <Text style={[style.btntxt1,{color:theme.txt}]}>Continue with Apple</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection:'row',justifyContent:'center',paddingTop:40}}>
            <Text style={style.txt1}>Already have an account?</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('loginemail')}>
                <Text style={[style.txt,{color:Colors.primary,fontWeight:'500'}]}> Login</Text>
            </TouchableOpacity>
          </View>
      </View>
      </ScrollView>
      </View>
    </SafeAreaView>
  )
}
