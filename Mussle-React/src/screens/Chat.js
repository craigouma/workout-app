import {
    View, Text,
    ScrollView,
    TouchableOpacity,
    Image,
    Dimensions,
    StatusBar,
    TextInput
} from 'react-native'
import React, { useState, useContext } from 'react'
import { AppBar, Spacer } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons'
import style from '../theme/style';
import { Colors } from '../theme/color'
import { useNavigation } from '@react-navigation/native';
import { Avatar } from 'react-native-paper';
import themeContext from '../theme/themeContex';
import { SafeAreaView } from 'react-native-safe-area-context';


const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Chat() {
    const navigation = useNavigation();
    const theme = useContext(themeContext);
    const [darkMode, setDarkMode] = useState(false)
    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg,paddingTop:10 }]}>
            {/* <StatusBar backgroundColor={darkMode === true ? '#000' : '#fff'} barStyle={darkMode === true ? 'light-content' : 'dark-content'} translucent={false} /> */}
            <View style={[style.main,{backgroundColor:theme.bg}]}>
            <AppBar
                color={theme.bg}
                title='Edward Alesky'
                titleStyle={{ color: theme.txt,fontFamily:'Itim-Regular' }}
                centerTitle={true}
                elevation={0}
                leading={<TouchableOpacity
                onPress={() => navigation.navigate('Messagedelete')}
                >
                    <Avatar.Icon icon="arrow-left"
                        style={{ backgroundColor: Colors.secondary, }}
                        color='black' size={40}
                    />

                </TouchableOpacity>
                }
            />
            <View style={{ paddingTop: 20, flexDirection: 'row' }}>
                <Avatar.Image source={require('../../assets/image/chat1.png')} size={40} />
                <Image source={require('../../assets/image/bluedot.png')}

                    style={{
                        height: 10, width: 10,
                        marginTop: 50,
                        marginLeft: 30,
                        position: 'absolute'
                    }} />
                <View style={{ marginLeft: 15, }}>
                    <View style={{
                        paddingHorizontal: 20,
                        paddingVertical: 15,
                        backgroundColor: Colors.bord,
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        borderBottomRightRadius: 20
                    }}>
                        <Text style={[style.subtxt, { color: Colors.disable }]}>Lorem ipsum dolor sit et,</Text>
                        <Text style={[style.subtxt, { color: Colors.disable }]}> consectetur adipiscing.</Text>
                    </View>
                    <Text style={{ color: '#9CA4AB', marginTop: 5,fontFamily:'Itim-Regular' }}>15:42 PM</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', paddingTop: 20, justifyContent: 'flex-end' }}>
                <View style={{ marginRight: 15, }}>

                    <View style={{
                        backgroundColor: Colors.primary,
                        paddingHorizontal: 20,
                        paddingVertical: 15,
                        borderTopLeftRadius: 25,
                        borderTopRightRadius: 20,
                        borderBottomLeftRadius: 25
                    }}>
                        <Text style={{color:Colors.secondary,fontFamily:'Itim-Regular'}}>Lorem ipsum dolor sit et</Text>
                    </View>
                    <View style={{alignItems:'flex-end',}}>
                    <Text style={{ color: '#9CA4AB', marginTop: 5,fontFamily:'Itim-Regular' }}>15:42 PM</Text>       
                    </View>

                </View>
                <Avatar.Image source={require('../../assets/image/chat2.png')}
                    size={40}
                // style={{alignItems:'flex-end'}}
                />

            </View>
            <View style={{ paddingTop: 20, flexDirection: 'row' }}>
                <Avatar.Image source={require('../../assets/image/chat1.png')} size={40} />
                <Image source={require('../../assets/image/bluedot.png')}

                    style={{
                        height: 10, width: 10,
                        marginTop: 50,
                        marginLeft: 30,
                        position: 'absolute'
                    }} />
                <View style={{ marginLeft: 15, }}>
                    <View style={{
                        paddingHorizontal: 20,
                        paddingVertical: 15,
                        backgroundColor: Colors.bord,
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        borderBottomRightRadius: 20
                    }}>
                        <Text style={[style.subtxt, { color: Colors.disable }]}>Lorem ipsum dolor sit et,</Text>
                        <Text style={[style.subtxt, { color: Colors.disable }]}> consectetur adipiscing.</Text>
                    </View>
                    <Text style={{ color: '#9CA4AB', marginTop: 5 ,fontFamily:'Itim-Regular'}}>15:42 PM</Text>
                </View>
            </View>
            <View style={{flex:1,justifyContent:'flex-end'}}>
            <View style={{  
                flexDirection: 'row', 
                backgroundColor: theme.chat,
                paddingHorizontal:20,
                paddingVertical:5 ,
                borderRadius:20,
                justifyContent:'space-between',
                borderColor:Colors.bord,
                borderWidth:1,
                alignItems:'center',
                marginBottom:20
                }}>
                <Text style={[style.subtxt, { color: Colors.disable }]}>Type your message...</Text>
                <Avatar.Icon icon='near-me' color='#FE970F' size={40} style={{ backgroundColor: Colors.secondary }} />
            </View>
            </View>
            </View>
        </SafeAreaView>
    )
}
