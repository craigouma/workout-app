import { View, Text,SafeAreaView,TouchableOpacity,TextInput,Image,ScrollView,StatusBar} from 'react-native'
import React,{useState,useContext} from 'react'
import { AppBar} from '@react-native-material/core';
import { Avatar } from 'react-native-paper';
import theme from '../theme/theme';
import themeContext from '../theme/themeContex';
import { Colors } from '../theme/color';
import style from '../theme/style';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';


export default function Changepass() {
    const theme = useContext(themeContext);
    const navigation=useNavigation();
    const [darkMode,setDarkMode] = useState(false)

    return (
    <SafeAreaView style={[style.area,{backgroundColor:theme.bg,paddingTop:30}]}>
       {/* <StatusBar backgroundColor={darkMode === true ? '#000':'#fff'} barStyle={darkMode === true  ? 'light-content' : 'dark-content'} translucent={false}/> */}
       <View style={[style.main,{backgroundColor:theme.bg}]}>
        <AppBar 
        color={theme.bg}
        title='Change Password'
        titleStyle={{color:theme.txt,fontFamily:'Itim-Regular'}}
        centerTitle={true}
        elevation={0}
        leading={ <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
        <Avatar.Icon icon="arrow-left"  
        style={{backgroundColor:Colors.secondary,}}  
        color='black' size={40}
        />
        </TouchableOpacity>
        }/>

        <View style={{marginVertical:30}}>
            <Text style={{fontSize:18,fontWeight:'600',fontFamily:'Itim-Regular',color:theme.txt}}>The new password must be different from the current password</Text>
        </View>

        <Text style={{color:theme.txt,fontWeight:'500',}}>Password</Text>
        <View style={{paddingVertical:10}}>
                    <TextInput placeholder='********'
                    secureTextEntry={true}
                    selectionColor={Colors.primary}
                    placeholderTextColor={Colors.disable}
                    style={[style.txtinput,{backgroundColor:theme.bg,fontFamily:'Itim-Regular'}]}
                    />
        </View>
        <View style={{flexDirection:'row',alignItems:'center'}}>
            <Icon name='checkmark' size={25} color={'#00C566'}></Icon>
            <Text style={{color:'#00C566',fontFamily:'Itim-Regular'}}>There must be at least 8 characters</Text>
        </View>
        <View style={{flexDirection:'row',alignItems:'center'}}>
            <Icon name='checkmark' size={25} color={'#00C566'}></Icon>
            <Text style={{color:'#00C566',fontFamily:'Itim-Regular'}}>There must be a unique code like @!#</Text>
        </View>
        <Text style={{color:theme.txt,fontWeight:'500',marginTop:30,fontFamily:'Itim-Regular'}}>Confirm Password</Text>
        <View style={{paddingVertical:10}}>
                    <TextInput placeholder='********'
                    secureTextEntry={true}
                    selectionColor={Colors.primary}
                    placeholderTextColor={Colors.disable}
                    style={[style.txtinput,{backgroundColor:theme.bg,fontFamily:'Itim-Regular'}]}
                    />
        </View>
        <View style={{justifyContent:'flex-end',flex:1,marginBottom:20}}>
            <TouchableOpacity style={style.btn}>
               <Text style={style.btntxt}>Submit</Text>
            </TouchableOpacity>
        </View>  
</View>
    </SafeAreaView>
  )
}