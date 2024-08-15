import { View, Text, SafeAreaView,TextInput, ImageBackground,StatusBar,Image,Dimensions, TouchableOpacity,ScrollView } from 'react-native'
import React,{useState,useContext} from 'react'
import style from '../theme/style'
import themeContext from '../theme/themeContex';
import { Colors } from '../theme/color';
import Icon from 'react-native-vector-icons/Ionicons'
import { AppBar } from '@react-native-material/core';
import { Avatar } from 'react-native-paper';
import Height from './Height';
// import {Avatar} from 'react-native-elements';
import RBSheet from 'react-native-raw-bottom-sheet';
import { useNavigation } from '@react-navigation/native';




const width =Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Workout() {

    const categories =[
        require('../../assets/image/list1.png'),
        require('../../assets/image/list2.png'),
        require('../../assets/image/list3.png'),
        require('../../assets/image/list4.png'),
        
     ];
     const [categoryIndex, setcategoryIndex] = useState(0)
   
       const theme = useContext(themeContext);
       const [darkMode,setDarkMode] = useState(false)
       const navigation=useNavigation();

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
    <SafeAreaView style={[style.area,{backgroundColor:theme.bg,paddingTop:30}]}>
       {/* <StatusBar
      backgroundColor={theme.bg}
      barStyle={theme.barStyle}
  />   */}
      <AppBar 
        color={theme.bg}
        title='Workout'
        titleStyle={{color:theme.txt,fontFamily:'Itim-Regular'}}
        centerTitle={true}
        elevation={0}
         />

    <View style={[style.main,{backgroundColor:theme.bg}]}>
    <View style={{flexDirection:'row',justifyContent:'space-around',}}>
   <View style={[style.inputContainer,{backgroundColor:theme.bg}]}>
   <Icon name="search" size={20} color={Colors.disable}/>  
    <TextInput placeholder="search"
        selectionColor={Colors.primary}
        placeholderTextColor={Colors.disable}
        style={{flex:1,color:Colors.active,fontFamily:'Itim-Regular'}}/>

    
    <View style={[style.verticaldivider,{backgroundColor:Colors.disable,marginHorizontal:10}]}></View> 
    <TouchableOpacity onPress={() => this.RBSheet.open()}>
    <Image source={require('../../assets/image/Filter1.png')}
     style={{width:width/16,height:height/39}}></Image>
      <RBSheet
                    ref={ref => {
                        this.RBSheet = ref;
                    }}
                    height={600}
                    openDuration={100}
                    customStyles={{
                        container: {
                            borderTopRightRadius: 20,
                            borderTopLeftRadius: 20,
                        }
                    }}
                >
                    <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: theme.bg }}>
                        <View style={{ paddingHorizontal: 20 }}>
                            <View style={{ flexDirection: 'row', paddingTop: 20, alignItems: 'center' }}>
                                <TouchableOpacity onPress={() => this.RBSheet.close()}>
                                    <Avatar.Icon icon='close' color={theme.txt} size={30}
                                        style={{ backgroundColor: theme.box }}
                                    />
                                </TouchableOpacity>

                                <Text style={[style.subtitle, { color: theme.txt, paddingHorizontal: 120 }]}>Filter</Text>
                            </View>
                            <View style={{ paddingVertical: 15 }}>
                                <Text style={[style.txt1, { color: theme.txt, fontWeight: '600', fontSize: 18 }]}>Many People Join</Text>
                            </View>
                            <ImageBackground source={require('../../assets/image/bgline.png')}
                                style={{ resizeMode: 'center', }}
                            >
                            <Image  source={theme.line}
                                 style={{ marginLeft: 50, }} />

                            </ImageBackground>

                            <View style={{ paddingTop: 15, flexDirection: 'row' }}>
                                <TouchableOpacity style={{
                                    paddingHorizontal: 40,
                                    paddingVertical: 10,
                                    borderRadius: 17,
                                    borderColor: '#E3E7EC',
                                    backgroundColor: theme.bg,
                                    borderWidth: 1,
                                }}>
                                    <Text style={{ fontSize: 14, color: theme.icon,fontFamily:'Itim-Regular' }}>24</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{
                                    paddingHorizontal: 40,
                                    paddingVertical: 10,
                                    borderRadius: 17,
                                    borderColor: '#E3E7EC',
                                    backgroundColor: theme.bg,
                                    borderWidth: 1,
                                    marginLeft: 70
                                }}>
                                    <Text style={{ fontSize: 14, color: theme.icon,fontFamily:'Itim-Regular' }}>89</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ paddingTop: 15 }}>
                                <Text style={[style.txt1, { color: theme.txt, fontWeight: '600', fontSize: 18 }]}>Popular Category</Text>
                            </View>
                            <View style={{ paddingTop: 15, flexDirection: 'row', alignItems: 'center' }}>
                                <TouchableOpacity
                                    style={{
                                        paddingHorizontal: 15,
                                        paddingVertical: 10,
                                        borderRadius: 20,
                                        borderColor: '#E3E7EC',
                                        backgroundColor: theme.bg,
                                        borderWidth: 1
                                    }}>
                                    <Text style={{ fontSize: 14, color: theme.txt,fontFamily:'Itim-Regular' }}>Foot(5)</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{
                                    paddingHorizontal: 15,
                                    paddingVertical: 10,
                                    borderRadius: 20,
                                    borderColor: theme.icon,
                                    backgroundColor: theme.bg,
                                    borderWidth: 1,
                                    marginLeft: 10
                                }}>
                                    <Text style={{ fontSize: 14, color: theme.icon,fontFamily:'Itim-Regular'}}>Stomach(11)</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{
                                    paddingHorizontal: 15,
                                    paddingVertical: 10,
                                    borderRadius: 20,
                                    borderColor: '#E3E7EC',
                                    backgroundColor: theme.bg,
                                    borderWidth: 1,
                                    marginLeft: 10
                                }}>
                                    <Text style={{ fontSize: 14, color: theme.txt ,fontFamily:'Itim-Regular'}}>Arm(10)</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ paddingTop: 10, flexDirection: 'row', alignItems: 'center' }}>
                                <TouchableOpacity style={{
                                    paddingHorizontal: 18,
                                    paddingVertical: 10,
                                    borderRadius: 20,
                                    borderColor: '#E3E7EC',
                                    backgroundColor: theme.bg,
                                    borderWidth: 1
                                }}>
                                    <Text style={{ fontSize: 14, color: theme.txt,fontFamily:'Itim-Regular' }}>Chest(4)</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{
                                    paddingHorizontal: 18,
                                    paddingVertical: 10,
                                    borderRadius: 20,
                                    borderColor: '#E3E7EC',
                                    backgroundColor: theme.bg,
                                    borderWidth: 1,
                                    marginLeft: 10
                                }}>
                                    <Text style={{ fontSize: 14, color: theme.txt,fontFamily:'Itim-Regular' }}>Thigh(7)</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{
                                    paddingHorizontal: 18,
                                    paddingVertical: 10,
                                    borderRadius: 20,
                                    borderColor: '#E3E7EC',
                                    backgroundColor: theme.bg,
                                    borderWidth: 1,
                                    marginLeft: 10
                                }}>
                                    <Text style={{ fontSize: 14, color: theme.txt,fontFamily:'Itim-Regular' }}>Butt(6)</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ paddingTop: 15 }}>
                                <Text style={[style.txt1, { color: theme.txt, fontWeight: '600', fontSize: 18 }]}>Date Upload</Text>
                            </View>
                            <View style={{ paddingTop: 15, flexDirection: 'row', alignItems: 'center' }}>
                                <TouchableOpacity
                                    style={{
                                        paddingHorizontal: 15,
                                        paddingVertical: 10,
                                        borderRadius: 20,
                                        borderColor: '#E3E7EC',
                                        backgroundColor: theme.bg,
                                        borderWidth: 1
                                    }}>
                                    <Text style={{ fontSize: 14, color: theme.txt,fontFamily:'Itim-Regular' }}>Latest</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{
                                    paddingHorizontal: 15,
                                    paddingVertical: 10,
                                    borderRadius: 20,
                                    borderColor: theme.icon,
                                    backgroundColor: theme.bg,
                                    borderWidth: 1,
                                    marginLeft: 10
                                }}>
                                    <Text style={{ fontSize: 14, color: theme.icon ,fontFamily:'Itim-Regular'}}>1 Day ago</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{
                                    paddingHorizontal: 15,
                                    paddingVertical: 10,
                                    borderRadius: 20,
                                    borderColor: '#E3E7EC',
                                    backgroundColor: theme.bg,
                                    borderWidth: 1,
                                    marginLeft: 10
                                }}>
                                    <Text style={{ fontSize: 14, color: theme.txt,fontFamily:'Itim-Regular' }}>3 Days ago</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ paddingTop: 10, flexDirection: 'row', alignItems: 'center' }}>
                                <TouchableOpacity style={{
                                    paddingHorizontal: 18,
                                    paddingVertical: 10,
                                    borderRadius: 20,
                                    borderColor: '#E3E7EC',
                                    backgroundColor: theme.bg,
                                    borderWidth: 1
                                }}>
                                    <Text style={{ fontSize: 14, color: theme.txt,fontFamily:'Itim-Regular' }}>1 Week ago</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{
                                    paddingHorizontal: 18,
                                    paddingVertical: 10,
                                    borderRadius: 20,
                                    borderColor: '#E3E7EC',
                                    backgroundColor: theme.bg,
                                    borderWidth: 1,
                                    marginLeft: 10
                                }}>
                                    <Text style={{ fontSize: 14, color: theme.txt,fontFamily:'Itim-Regular' }}>1 Month ago</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{
                                    paddingHorizontal: 18,
                                    paddingVertical: 10,
                                    borderRadius: 20,
                                    borderColor: '#E3E7EC',
                                    backgroundColor: theme.bg,
                                    borderWidth: 1,
                                    marginLeft: 10
                                }}>
                                    <Text style={{ fontSize: 14, color: theme.txt ,fontFamily:'Itim-Regular'}}>longest</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ paddingVertical: 30, }}>
                                <TouchableOpacity style={[style.btn, { backgroundColor: theme.icon }]}>
                                    <Text style={style.btntxt}>Apply Filter</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ paddingTop: 15 }}>
                                    <Text style={[style.txt1, { color: '#FF4747', textAlign: 'center' }]}>Clear All</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                </RBSheet>
     </TouchableOpacity>
   </View>
   
   </View>
   <ScrollView showsVerticalScrollIndicator={false} style={{marginTop:20,}}>

   <Text style={{fontSize:20,color:theme.txt,marginTop:20,fontFamily:'Itim-Regular'}}>Category</Text>
        <Categorylist></Categorylist>
    
      
   <View style={{justifyContent:'space-between',flexDirection:'row',alignItems:'center'}}>
          <Text style={[style.subtitle,{color:theme.txt}]}>Workout List</Text>
         <TouchableOpacity onPress={()=>navigation.navigate('Allworkout')}>
         <Text style={{color:Colors.btn,fontFamily:'Itim-Regular'}}>See All</Text>
         </TouchableOpacity>
        </View>


        <View>

          <ScrollView nestedScrollEnabled={true} horizontal
          showsHorizontalScrollIndicator={false}>
        <View style={{flex:1,flexDirection:'row',marginTop:20}}>
          <View>
          <View>
          <ImageBackground source={require('../../assets/image/workout1.png')}
           resizeMode='stretch'
         style={{width:width/1.7,height:height/5,alignSelf:'center'}}>
                <View style={{flexDirection:'row',margin:10}}>
                 <View >
                  <Text style={{paddingVertical:7,paddingHorizontal:10,color:Colors.secondary,fontSize:16,fontWeight:'600',fontFamily:'Itim-Regular',borderRadius:10,backgroundColor:'rgba(00, 00, 00, 0.4)'}}>Things</Text>
                 </View>
                 <View >
                  <Text style={{paddingVertical:7,paddingHorizontal:10,marginHorizontal:5,color:Colors.secondary,fontSize:16,fontWeight:'600',fontFamily:'Itim-Regular',borderRadius:10,backgroundColor:'rgba(10, 00, 00, 0.4)'}}>Legs</Text>
                 </View>
                </View>
          </ImageBackground>
          </View>
          <Text style={{fontSize:16,fontWeight:'600',color:theme.txt,fontFamily:'Itim-Regular'}}>Up and Down Stairs</Text>
          <Text style={{fontSize:14,color:Colors.disable,fontFamily:'Itim-Regular'}}>Train your thighs and legs</Text>
        </View>
        <View style={{padding:10}}></View>
        <View>
          <View>
          <ImageBackground source={require('../../assets/image/workout2.png')}
          resizeMode='stretch'
          style={{width:width/1.7,height:height/5}}>
               <View style={{flexDirection:'row',margin:10}}>
                 <View >
                  <Text style={{paddingVertical:7,paddingHorizontal:10,fontFamily:'Itim-Regular',color:Colors.secondary,fontSize:16,fontWeight:'600',borderRadius:10,backgroundColor:'rgba(00, 00, 00, 0.4)'}}>Stomach</Text>
                 </View>
                 <View >
                  <Text style={{paddingVertical:7,paddingHorizontal:10,fontFamily:'Itim-Regular',marginHorizontal:5,color:Colors.secondary,fontSize:16,fontWeight:'600',borderRadius:10,backgroundColor:'rgba(10, 00, 00, 0.4)'}}>Hand</Text>
                 </View>
               </View>
          </ImageBackground>
          </View>
          <Text style={{fontSize:16,fontWeight:'600',color:theme.txt,fontFamily:'Itim-Regular'}}>Lifting Belly</Text>
          <Text style={{fontSize:14,color:Colors.disable,fontFamily:'Itim-Regular'}}>Shape the stomach to loo...</Text>
        </View>
        </View>
        </ScrollView>
        </View>

        <View style={{justifyContent:'space-between',flexDirection:'row',alignItems:'center',marginTop:20}}>
          <Text style={[style.subtitle,{color:theme.txt}]}>Build Leg Muscles</Text>
          <Text style={{color:Colors.btn,fontFamily:'Itim-Regular'}}>See All</Text>
        </View>
        

   <View style={{marginTop:20,flexDirection:'row',alignItems:'center',}}>
    <Image source={require('../../assets/image/listc.png')}
    resizeMode='stretch'
    style={{width:width/5,height:height/9}}
    ></Image>
    <View style={{marginHorizontal:10}}>
        <Text style={{fontSize:18,fontWeight:'600',color:theme.txt,marginBottom:5,fontFamily:'Itim-Regular'}}>Doing leg stretch</Text>
        <Text style={[style.subtxt,{width:180}]}>Finish this exercise in 15 minutes</Text>    
    </View>
    <View style={{alignSelf:'center',flex:1,alignItems:'flex-end'}}>
    <Avatar.Image source={theme.img} 
            size={40}
            style={{backgroundColor:'transparent'}}
            >
            </Avatar.Image>

    </View>
    
   </View>

   <View style={{marginTop:20,flexDirection:'row',alignItems:'center',}}>
    <Image source={require('../../assets/image/lista.png')}
    resizeMode='stretch'
    style={{width:width/5,height:height/9}}
    ></Image>
    <View style={{marginHorizontal:10}}>
        <Text style={{fontSize:18,fontWeight:'600',fontFamily:'Itim-Regular',color:theme.txt,marginBottom:5}}>Lifting Belly</Text>
        <Text style={[style.subtxt,{width:180}]}>Finish this exercise in 15 minutes</Text>    
    </View>
    <View style={{alignSelf:'center',flex:1,alignItems:'flex-end'}}>
    <Avatar.Image source={theme.img1} 
            size={40}
            style={{backgroundColor:'transparent'}}
            >
            </Avatar.Image>
    </View> 
   </View>

   <View style={{marginTop:20,flexDirection:'row',alignItems:'center',marginBottom:70}}>
    <Image source={require('../../assets/image/listb.png')}
    resizeMode='stretch'
    style={{width:width/5,height:height/9}}
    ></Image>
    <View style={{marginHorizontal:10,}}>
        <Text style={{fontSize:18,fontWeight:'600',fontFamily:'Itim-Regular',color:theme.txt,marginBottom:5}}>High Jump</Text>
        <Text style={[style.subtxt,{width:180}]}>Finish this exercise in 15 minutes</Text>    
    </View>
    <View style={{alignSelf:'center',flex:1,alignItems:'flex-end'}}>
    <Avatar.Image source={theme.img1} 
             style={{backgroundColor:'transparent'}}
            size={40}
            >
            </Avatar.Image>
    </View>
   </View>

   

   
   </ScrollView>
   <View style={{backgroundColor:'transparent',position:'absolute',bottom:30,right:0}}>
         <TouchableOpacity>
         <Avatar.Image source={require('../../assets/image/plus.png')}
            style={{backgroundColor:''}}
            size={130}
            >
            </Avatar.Image>
         </TouchableOpacity>
          
          </View>

    </View>
   
    </SafeAreaView>
  )
}