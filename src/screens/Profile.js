import { View, Text,Switch, SafeAreaView,TextInput,Modal, ImageBackground,StatusBar,Image,Dimensions, TouchableOpacity,ScrollView } from 'react-native'
import React,{useState,useContext} from 'react'
import style from '../theme/style'
import themeContext from '../theme/themeContex';
import { Colors } from '../theme/color';
import Icon from 'react-native-vector-icons/Ionicons'
import { AppBar } from '@react-native-material/core';
import { Avatar } from 'react-native-paper';
import Height from './Height';
// import {Avatar} from 'react-native-elements';
import Icons from 'react-native-vector-icons/FontAwesome'
import {List} from 'react-native-paper';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons'
import { EventRegister } from 'react-native-event-listeners'
import { useNavigation } from '@react-navigation/native';




const width =Dimensions.get('screen').width
const height = Dimensions.get('screen').height


export default function Profile() {

    const theme = useContext(themeContext);
    const [darkMode,setDarkMode] = useState('false')
    // const toggleSwitch = () => setDarkMode(previousState => !previousState);

    const [visible,setVisible] = useState(false)
    const navigation=useNavigation();

  return (
    <SafeAreaView style={[style.area,{backgroundColor:theme.bg}]} >
           {/* <StatusBar backgroundColor={darkMode === true ? '#000':'#fff'} barStyle={darkMode === true ? 'light-content' : 'dark-content'} translucent={false}/> */}
           <View style={[style.main,{backgroundColor:theme.bg}]}>
   <ScrollView showsVerticalScrollIndicator={false} style={{marginTop:30}}>
    <View style={{marginTop:20,flexDirection:'row',alignItems:'center'}}>
    <Image source={require('../../assets/image/user.png')}
    resizeMode='stretch'
    style={{width:width/7,height:height/15}}
    ></Image>
    <View style={{marginHorizontal:10}}>
        <Text style={{fontSize:20,fontWeight:'500',color:theme.txt,marginBottom:5,fontFamily:'Itim-Regular'}}>Andeas Dewindow</Text>
        <Text style={[style.subtxt,{width:180}]}>@Andeas</Text>    
    </View>
    <View style={{marginRight:20,alignSelf:'center',marginLeft:50}}>
        <TouchableOpacity onPress={()=>navigation.navigate('User')}>
           <Icons name='edit' color={theme.txt} size={30}></Icons>
        </TouchableOpacity>
    </View> 
   </View>

   <View style={{marginVertical:20}}>
          <Image source={darkMode === true ? require('../../assets/image/Frame3.png'):require('../../assets/image/Frame2.png')}
             resizeMode='stretch'
             style={{alignSelf:'center',height:height/7,width:width-40}}
          >
          </Image>
         </View>

         <Text style={{color:theme.txt,marginVertical:10,fontFamily:'Itim-Regular'}}>Security</Text>
         <TouchableOpacity onPress={()=>navigation.navigate('Changepass')}>
         <List.Item
            title='Change Password' titleStyle={{color:theme.txt,fontSize:16,fontWeight:'600',fontFamily:'Itim-Regular'}}
            left={props =>  <Icon1 {...props} name='lock-outline' color={theme.txt} size={26}></Icon1>}
            right={props => 
            <Icon1 {...props} name='chevron-right'color={Colors.disable} size={26}></Icon1>}/>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Forgot')}>
         <List.Item
            title='Forgot Password' titleStyle={{color:theme.txt,fontSize:16,fontWeight:'600',fontFamily:'Itim-Regular'}}
            left={props =>  <Icon1 {...props} name='lock-open-outline' color={theme.txt} size={26}></Icon1>}
            right={props =>
            <Icon1 {...props} name='chevron-right'color={Colors.disable} size={26}></Icon1>}/>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Security')}>
        <List.Item
            title='Security' titleStyle={{color:theme.txt,fontSize:16,fontWeight:'600',fontFamily:'Itim-Regular'}}
            left={props =>  <Icon {...props} name='shield-checkmark-outline' color={theme.txt} size={26}></Icon>}
            right={props => 
                <Icon1 {...props} name='chevron-right'color={Colors.disable} size={26}></Icon1>
            }
        /></TouchableOpacity>

        <Text style={{color:theme.txt,marginVertical:10,fontFamily:'Itim-Regular'}}>General</Text>
        
        <TouchableOpacity onPress={()=>navigation.navigate('Language1')}>
         <List.Item
            title='Language' titleStyle={{color:theme.txt,fontSize:16,fontWeight:'600',fontFamily:'Itim-Regular'}}
            left={props =>  <Icon {...props} name='globe-outline' color={theme.txt} size={26}></Icon>}
            right={props =>
            <Icon1 {...props} name='chevron-right'color={Colors.disable} size={26}></Icon1>
        }
        />
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Notification')}>
         <List.Item
            title='Notification' titleStyle={{color:theme.txt,fontSize:16,fontWeight:'600',fontFamily:'Itim-Regular'}}
            left={props =>  <Icon {...props} name='notifications-outline' color={theme.txt} size={26}></Icon>}
            right={props =>
            <Icon1 {...props} name='chevron-right'color={Colors.disable} size={26}></Icon1>
        }
        /></TouchableOpacity>

         <List.Item
            title='Clear Cache' titleStyle={{color:theme.txt,fontSize:16,fontWeight:'600',fontFamily:'Itim-Regular'}}
            left={props =>  <Icon {...props} name='trash-outline' color={theme.txt} size={26}></Icon>}
            right={props => <Text {...props} style={{color:Colors.disable,alignSelf:'center',fontSize:12,fontFamily:'Itim-Regular'}} >88 MB</Text>}
        />

        <Text style={{color:theme.txt,marginVertical:10,fontFamily:'Itim-Regular'}}>About</Text>

        <TouchableOpacity onPress={()=>navigation.navigate('Legal')}>
        <List.Item
            title='Legal and Policies' titleStyle={{color:theme.txt,fontSize:16,fontWeight:'600',fontFamily:'Itim-Regular'}}
            left={props =>  <Icon {...props} name='shield-outline' color={theme.txt} size={26}></Icon>}
            right={props => 
            <Icon1 {...props} name='chevron-right'color={Colors.disable} size={26}></Icon1>
        }
        />
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('HelpSupport')}>
        <List.Item
            title='Help & Support' titleStyle={{color:theme.txt,fontSize:16,fontWeight:'600',fontFamily:'Itim-Regular'}}
            left={props =>  <Icon1 {...props} name='help-circle-outline' color={theme.txt} size={26}></Icon1>}
            right={props => 
                <Icon1 {...props} name='chevron-right'color={Colors.disable} size={26}></Icon1>
            }
        />
</TouchableOpacity>

        <List.Item
            title='Dark Mode' titleStyle={{color:theme.txt,fontSize:16,fontWeight:'600',fontFamily:'Itim-Regular'}}
            left={props =>  <Icon {...props} name='trending-up' color={theme.txt} size={26}></Icon>}
            right={props =>  <Switch {...props}
                value={darkMode}
                onValueChange={
                     (value)=>{
                  setDarkMode(value);
                  EventRegister.emit('ChangeTheme',value) 
                  }
                }
              />}
        />
        <View style={{marginBottom:70}}>
        <TouchableOpacity  onPress={()=>setVisible(true)}
        style={[style.btn1,{borderColor:Colors.btn,borderWidth:1,backgroundColor:theme.bg}]}>
               <Text style={[style.btntxt1,{color:Colors.btn}]}>Log Out</Text>
               <Modal
                transparent={true}
                visible={visible}
            >
                <View style={{
                    flex: 1,
                    width: width,
                    backgroundColor: '#000000aa'
                }}>
                    <View style={[style.modalcontainer, { backgroundColor: theme.bg, width: width - 30 ,marginVertical:170}]}>
                        <View style={{ paddingHorizontal: 20 }}>
                            <View style={{ paddingTop: 10, alignSelf: 'center' }}>
                                <Avatar.Icon icon='help' color='#FF4747' size={80}
                                    style={{
                                        borderWidth: 5,
                                        borderColor: '#FF4747',
                                        backgroundColor: theme.bg
                                    }}
                                />
                            </View>
                            <View style={{ paddingTop: 20 }}>
                                <Text style={[style.subtitle, { color: theme.txt, textAlign: 'center' }]}>Are You Sure?</Text>
                            </View>
                            <View style={{ paddingTop: 20 }}>
                                <Text style={[style.subtxt, { color: Colors.disable, textAlign: 'center' }]}>Lorem ipsum dolor sit amet, consectetur</Text>
                                <Text style={[style.subtxt, { color: Colors.disable, textAlign: 'center' }]}>adipiscing elit. Eget ornare quam vel</Text>
                            </View>
                            <View style={{ paddingTop: 20, flexDirection: 'row', alignItems: 'center',justifyContent:'center' }}>
                                <TouchableOpacity onPress={()=>{navigation.navigate('Login'); setVisible(false);}}
                                style={{
                                    paddingHorizontal: 30,
                                    paddingVertical: 12,
                                    borderColor:'#FF4747',
                                    borderWidth:1,
                                    borderRadius:20,
                                    backgroundColor:theme.bg
                                }}>
                                    <Text style={{fontSize:14,color:'#FF4747',fontFamily:'Itim-Regular'}}>Log Out</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{
                                    paddingHorizontal: 35,
                                    paddingVertical: 12,
                                    backgroundColor:Colors.primary,
                                    borderRadius:20,
                                    marginLeft:10
                                }}
                                onPress={()=>setVisible(false)}
                                >
                                    <Text style={{fontSize:14,color:theme.bg,fontFamily:'Itim-Regular'}}>Cancel</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
            </TouchableOpacity>
        </View>
        
        </ScrollView>
        </View>
    </SafeAreaView>
  )
}