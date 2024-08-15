import {  View, Text ,SafeAreaView, TextInput,Switch, StatusBar,TouchableOpacity,Image,ScrollView,ImageBackground,Dimensions} from 'react-native'
import React,{useState,useContext} from 'react'
import theme from '../theme/theme';
import themeContext from '../theme/themeContex';
import { Colors } from '../theme/color';
import style from '../theme/style';
import Icon from 'react-native-vector-icons/Ionicons';
import { AppBar} from '@react-native-material/core';
import { Avatar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';


export default function Language1() {

    const theme = useContext(themeContext);
    const navigation=useNavigation();
    const [darkMode,setDarkMode] = useState(false)


    return (
    <SafeAreaView style={[style.area,{backgroundColor:theme.bg,paddingTop:30}]}>
           {/* <StatusBar backgroundColor={darkMode === true ? '#000':'#fff'} barStyle={darkMode === true  ? 'light-content' : 'dark-content'} translucent={false}/> */}
           <View style={[style.main,{backgroundColor:theme.bg}]}>
            <AppBar 
        color={theme.bg}
        title='Language'
        titleStyle={{color:theme.txt,fontFamily:'Itim-Regular'}}
        centerTitle={true}
        elevation={0}
        leading={ <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
        <Avatar.Icon icon="arrow-left"  
        style={{backgroundColor:Colors.secondary,}}  
        color='black' size={35}
        />
        </TouchableOpacity>
        }/>

        <ScrollView showsVerticalScrollIndicator={false}>

           <View style={{marginTop:30,borderColor:Colors.bord,borderWidth:1,paddingHorizontal:20,paddingVertical:30,borderRadius:15}}>
            <Text style={{fontSize:12,color:Colors.disable,fontWeight:'600',fontFamily:'Itim-Regular'}}>Suggested Languages</Text>
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:20}}>
                <Text style={[style.txt1,{color:theme.txt,}]}>English (UK)</Text>
                <Avatar.Icon icon="check"  
                    style={{backgroundColor:Colors.primary,}}  
                    color='white' size={30}
                />
            </View>

            <View style={style.divider1}></View>
            
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                <Text style={[style.txt1,{color:theme.txt,}]}>English</Text>
                
            </View>
            <View style={style.divider1}></View>
            
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                <Text style={[style.txt1,{color:theme.txt,}]}>Bahasa Indonesia</Text>
             </View>
             </View>

            <View style={{marginTop:30,borderColor:Colors.bord,borderWidth:1,paddingHorizontal:20,paddingVertical:30,borderRadius:15}}>
            <Text style={{fontSize:12,color:Colors.disable,fontWeight:'600',fontFamily:'Itim-Regular'}}>Other Languages</Text>
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:20}}>
                <Text style={[style.txt1,{color:theme.txt,}]}>Chineses</Text>
            </View>
            <View style={style.divider1}></View>
            
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                <Text style={[style.txt1,{color:theme.txt,}]}>Croatian</Text>
                
            </View>
            <View style={style.divider1}></View>
            
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                <Text style={[style.txt1,{color:theme.txt,}]}>Czech</Text>
             </View>
             <View style={style.divider1}></View>
            
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                <Text style={[style.txt1,{color:theme.txt,}]}>Danish</Text>
                
            </View>
            <View style={style.divider1}></View>
            
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                <Text style={[style.txt1,{color:theme.txt,}]}>Filipino</Text>
                
            </View>
            <View style={style.divider1}></View>
            
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                <Text style={[style.txt1,{color:theme.txt,}]}>Finland</Text>
                
            </View>
            
             </View>   
        </ScrollView>
        </View>
    </SafeAreaView>
  )
}