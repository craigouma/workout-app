import { View, Text, SafeAreaView, ImageBackground,StatusBar,Image,Dimensions, TouchableOpacity,ScrollView } from 'react-native'
import React,{useState,useContext} from 'react'
import style from '../theme/style'
import themeContext from '../theme/themeContex';
import { Colors } from '../theme/color';
import Icon from 'react-native-vector-icons/Ionicons'
import { AppBar,HStack, IconButton  } from '@react-native-material/core';
// import { Avatar } from 'react-native-paper';
import Height from './Height';
import {Avatar} from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';


const width =Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Home() {
  
  const categories =[
     require('../../assets/image/list1.png'),
     require('../../assets/image/list2.png'),
     require('../../assets/image/list3.png'),
     require('../../assets/image/list4.png'),
     
  ];
  const [categoryIndex, setcategoryIndex] = useState(0)

    const theme = useContext(themeContext);
    const navigation=useNavigation();
    const [darkMode,setDarkMode] = useState(false)

    
    const Categorylist=()=>{
      return( <View style={style.categorycontainer}>
        {categories.map((item,index)=>(
          <TouchableOpacity key={index} 
            activeOpacity={0.8}
            onPress={()=>setcategoryIndex(index)}>
            <Image 
             source={item}
             key={index}
             resizeMode='stretch' 
             style={[categoryIndex==index && style.categoryTextSelected,{width:width/5,height:height/8.5}]
             }>
           
          </Image>
          </TouchableOpacity>
          
        ))}
      </View>
      );
    };

    return (
    <SafeAreaView style={{flex:1,}}>
             
              <StatusBar backgroundColor={"transparent"}translucent={true}/>

              <ImageBackground source={require('../../assets/image/Homebg.png')}
      style={{flex:1}}>

       <View style={{flex:0.8,paddingHorizontal: 20,marginTop:20}}> 
         <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>

          <View >
            <Avatar source={require('../../assets/image/user.png')}
            size={40}></Avatar>
          </View>

          <View style={{flexDirection:'row',alignItems:'center'}}>
            <TouchableOpacity onPress={()=>navigation.navigate('Messagedelete')}>
            <Avatar
              size={25}
              source={require('../../assets/image/Message.png')}
              overlayContainerStyle={{backgroundColor: 'transparent'}}
              // containerStyle={{ marginTop: 10}}
            />
            </TouchableOpacity>
          
            <View style={{margin:10}}></View>
            <TouchableOpacity onPress={()=>navigation.navigate('MessageN')}>
            <Avatar
              size={25}
              source={require('../../assets/image/Notification.png')}
              overlayContainerStyle={{backgroundColor: 'transparent'}}
              // containerStyle={{ marginTop: 10}}
            />
            </TouchableOpacity>
            
          </View>

         </View>

         <View>
          <Text style={{marginTop:20,fontSize:16,color:Colors.secondary,fontFamily:'Itim-Regular'}}>Hi, Andeas !</Text>
          <Text style={{marginTop:20,fontSize:22,fontWeight:'600',width:200,color:Colors.secondary,fontFamily:'Itim-Regular'}}>Have you exercised today?</Text>
         </View>

         <View style={{marginTop:20}}>
          <Image source={require('../../assets/image/Frame.png')}
             resizeMode='stretch'
             style={{alignSelf:'center',height:height/7,width:width-40}}
          >
          </Image>
         </View>

       </View>


       <View style={{flex:1.1,backgroundColor:theme.bg,borderTopLeftRadius:30,borderTopRightRadius:30,paddingHorizontal: 20}}>
       
       <ScrollView contentContainerStyle={{height:height/1.15}} showsVerticalScrollIndicator={false}
        style={{marginTop:10,}}>


          <Image source={theme.banner}

             resizeMode='stretch'
             style={{alignSelf:'center',height:height/4.5,width:width-40,marginBottom:5}}
          >
            </Image>

        <Text style={{fontSize:20,color:theme.txt,fontFamily:'Itim-Regular'}}>Category</Text>
        <Categorylist></Categorylist>

        <View style={{justifyContent:'space-between',flexDirection:'row'}}>
          <Text style={[style.subtitle,{color:theme.txt,fontFamily:'Itim-Regular'}]}>Populer Workout</Text>
          <Text style={{color:Colors.btn,fontFamily:'Itim-Regular'}}>See All</Text>
        </View>

          <ScrollView nestedScrollEnabled={true} horizontal
          showsHorizontalScrollIndicator={false}>
        <View style={{flex:1,flexDirection:'row',marginTop:20,}}>
          <View>
          <View>
          <ImageBackground source={require('../../assets/image/workout1.png')}
           resizeMode='stretch'
         style={{width:width/1.7,height:height/5,alignSelf:'center'}}>
                <View style={{flexDirection:'row',margin:10}}>
                 <View >
                  <Text style={{paddingVertical:7,paddingHorizontal:10,color:Colors.secondary,fontSize:18,fontWeight:'600',borderRadius:10,fontFamily:'Itim-Regular',backgroundColor:'rgba(00, 00, 00, 0.4)'}}>Things</Text>
                 </View>
                 <View >
                  <Text style={{paddingVertical:7,paddingHorizontal:10,marginHorizontal:5,color:Colors.secondary,fontSize:18,fontWeight:'600',fontFamily:'Itim-Regular',borderRadius:10,backgroundColor:'rgba(10, 00, 00, 0.4)'}}>Legs</Text>
                 </View>
                </View>
          </ImageBackground>
          </View>
          <Text style={{fontSize:18,fontWeight:'600',color:theme.txt,fontFamily:'Itim-Regular'}}>Up and Down Stairs</Text>
          <Text style={style.subtxt}>Train your thighs and legs</Text>
        </View>
        <View style={{padding:10}}></View>
        <View>
          <View>
          <ImageBackground source={require('../../assets/image/workout2.png')}
          resizeMode='stretch'
          style={{width:width/1.7,height:height/5}}>
               <View style={{flexDirection:'row',margin:10}}>
                 <View >
                  <Text style={{paddingVertical:7,paddingHorizontal:10,color:Colors.secondary,fontSize:18,fontWeight:'600',fontFamily:'Itim-Regular',borderRadius:10,backgroundColor:'rgba(00, 00, 00, 0.4)'}}>Stomach</Text>
                 </View>
                 <View >
                  <Text style={{paddingVertical:7,paddingHorizontal:10,marginHorizontal:5,color:Colors.secondary,fontSize:18,fontWeight:'600',fontFamily:'Itim-Regular',borderRadius:10,backgroundColor:'rgba(10, 00, 00, 0.4)'}}>Hand</Text>
                 </View>
               </View>
          </ImageBackground>
          </View>
          <Text style={{fontSize:18,fontWeight:'600',color:theme.txt,fontFamily:'Itim-Regular'}}>Lifting Belly</Text>
          <Text style={style.subtxt}>Shape the stomach to loo...</Text>
        </View>
        </View>
        </ScrollView>
        </ScrollView>

        <View style={{backgroundColor:'transparent',position:'absolute',bottom:30,right:0,}}>
             <TouchableOpacity  onPress={() => navigation.navigate('TodayPlane')}>
             <Avatar source={require('../../assets/image/plus.png')}
            size={130}
            >
            </Avatar>
             </TouchableOpacity>
          </View>
       
        </View>
       </ImageBackground>
            
    </SafeAreaView>
  )
}