import { View, Text,SafeAreaView,TouchableOpacity,TextInput,Image,ScrollView,StatusBar} from 'react-native'
import React,{useState,useContext} from 'react'
import { AppBar} from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import { Avatar } from 'react-native-paper';
import { Colors } from '../../theme/color';
import theme from '../../theme/theme';
import themeContext from '../../theme/themeContex';
import style from '../../theme/style';
import { useNavigation } from '@react-navigation/native';


export default function Loginemail() {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    const navigation=useNavigation();
    const theme = useContext(themeContext);
    const [darkMode,setDarkMode] = useState(false)

    return (
    <SafeAreaView style={[style.area,{backgroundColor:theme.bg,paddingTop:40}]}>
        
         {/* <StatusBar backgroundColor={darkMode === true ? '#000':'#fff'} barStyle={darkMode === true  ? 'light-content' : 'dark-content'} translucent={false}/> */}

      <AppBar 
        color={theme.bg}
        title='Login'
        titleStyle={{color:theme.txt, fontFamily:'Itim-Regular'}}
        centerTitle={true}
         elevation={0}
         leading={ <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
        <Avatar.Icon icon="arrow-left"  
         style={{backgroundColor:Colors.secondary,}}  
         color='black' size={40}
     />
     </TouchableOpacity>
     }/>

     <ScrollView showsVerticalScrollIndicator={false}>
     <View style={{flex:1,marginHorizontal:20}}>
     <Text style={{color:theme.txt,fontWeight:'500',paddingTop:30, fontFamily:'Itim-Regular'}}>Email</Text>
        <View style={{paddingVertical:10}}>
                    <TextInput placeholder='Enter Your Email Address'
                    selectionColor={Colors.primary}
                    placeholderTextColor={Colors.disable}
                    style={[style.txtinput,{backgroundColor:theme.bg,fontFamily:'Itim-Regular'}]}
                    />
        </View>
        <Text style={{color:theme.txt,fontWeight:'500',paddingVertical:10, fontFamily:'Itim-Regular'}}>PassWord</Text>
        <View style={[style.txtinput,{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}]}>
                    
                    <TextInput placeholder='Enter Your Password'
                         selectionColor={Colors.primary}
                        secureTextEntry={!isPasswordVisible}
                        placeholderTextColor={Colors.disable}
                        style={{backgroundColor:theme.bg,color:Colors.disable, fontFamily:'Itim-Regular'}}
                    ></TextInput>
                    <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                        <Icon name={isPasswordVisible ? 'eye-off' : 'eye'} color={Colors.active} size={20} />
                    </TouchableOpacity>
        </View>
        <View style={{alignItems:'flex-end',paddingTop:10}}>
          <TouchableOpacity onPress={()=>navigation.navigate('Forgotpass')}>
            <Text style={{color:Colors.primary, fontFamily:'Itim-Regular'}}>Forgot Password</Text>
          </TouchableOpacity>
        </View>

        <View style={{paddingVertical:30,}}>
            <TouchableOpacity onPress={()=>navigation.navigate('OnBoarding')} 
            style={style.btn}>
               <Text style={style.btntxt}>Login</Text>
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
               <Text style={[style.btntxt1,{color:theme.txt}]}>Continue with Google</Text>
            </TouchableOpacity>
          </View>
          <View style={{paddingTop:15}}>
            <TouchableOpacity style={[style.btn1,{borderColor:theme.txt,borderWidth:1,backgroundColor:theme.bg}]}>
               <Image source={theme.apple}></Image>
               <Text style={[style.btntxt1,{color:theme.txt}]}>Continue with Apple</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection:'row',justifyContent:'center',paddingTop:40}}>
            <Text style={style.txt1}>Don't have an account?</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('Signup')}>
                <Text style={[style.txt,{color:Colors.primary,fontWeight:'500'}]}> Sign Up</Text>
            </TouchableOpacity>
          </View>
     </View>
     </ScrollView>
    </SafeAreaView>
  )
}

