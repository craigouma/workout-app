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


export default function HelpSupport() {
    const theme = useContext(themeContext);
    const navigation=useNavigation();
    const [darkMode,setDarkMode] = useState(false)

    return (
    <SafeAreaView style={[style.area,{backgroundColor:theme.bg,paddingTop:30}]}>
      
      {/* <StatusBar backgroundColor={darkMode === true ? '#000':'#fff'} barStyle={darkMode === true  ? 'light-content' : 'dark-content'} translucent={false}/> */}
      <View style={[style.main,{backgroundColor:theme.bg}]}>
        <AppBar 
        color={theme.bg}
        title='Help and Support'
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

      <View style={{paddingVertical:20}}>
                    <View style={[style.txtinput,{ flexDirection:'row',alignItems:'center',borderRadius:25,}]}>
                    <Icon name='search' size={20} color={Colors.disable} />
                    <TextInput placeholder='Search...'
                     selectionColor={Colors.primary}
                     placeholderTextColor={Colors.disable} 
                     style={{paddingHorizontal:10,fontFamily:'Itim-Regular'}}
                     />
          </View>
          
   </View>
          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
            <Text style={[style.txt1,{color:theme.txt,fontWeight:'500',}]}>Lorem ipsum dolor sit amet</Text>
            <Icon name='chevron-down' size={20} color={theme.txt} ></Icon>
          </View>
          <View style={style.divider1}></View>
          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
            <Text style={[style.txt1,{color:theme.txt,fontWeight:'500',}]}>Lorem ipsum dolor sit amet</Text>
            <Icon name='chevron-down' size={20} color={theme.txt} ></Icon>
          </View>
          <View style={style.divider1}></View>
          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
            <Text style={[style.txt1,{color:theme.txt,fontWeight:'500',}]}>Lorem ipsum dolor sit amet</Text>
            <Icon name='chevron-up' size={20} color={theme.txt} ></Icon>
          </View>
          <View style={{marginTop:10}}>
            <Text style={style.subtxt}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</Text>
          </View>
          <View style={style.divider1}></View>
          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
            <Text style={[style.txt1,{color:theme.txt,fontWeight:'500',}]}>Lorem ipsum dolor sit amet</Text>
            <Icon name='chevron-down' size={20} color={theme.txt} ></Icon>
          </View>
          <View style={style.divider1}></View>
          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
            <Text style={[style.txt1,{color:theme.txt,fontWeight:'500',}]}>Lorem ipsum dolor sit amet</Text>
            <Icon name='chevron-down' size={20} color={theme.txt} ></Icon>
          </View>
          </View>
    </SafeAreaView>
  )
}