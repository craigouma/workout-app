import {
    View, Text,
    TouchableOpacity,
    Image,
    Dimensions,
    SafeAreaView,
    ScrollView,
    StatusBar
} from 'react-native'
import React, { useState, useContext } from 'react'
import { AppBar, Spacer } from '@react-native-material/core';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import style from '../theme/style';
import { Colors } from '../theme/color'
import theme from '../theme/theme';
import { useNavigation } from '@react-navigation/native';
import { Avatar } from 'react-native-paper';
import themeContext from '../theme/themeContex';


const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function UserJProfile() {
    const navigation = useNavigation();
    const theme = useContext(themeContext);
    const [darkMode,setDarkMode] = useState(false)

    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg,paddingTop:30 }]}>
            {/* <StatusBar backgroundColor={darkMode === true  ? '#000' : '#fff'} barStyle={darkMode === true  ? 'light-content' : 'dark-content'} translucent={false} /> */}
            {/* <StatusBar
      backgroundColor={theme.bg}
      barStyle={theme.barStyle}
  />  */}
        <View style={[style.main,{backgroundColor:theme.bg}]}>
            <AppBar
                color={theme.bg}
                title="User Join Profile"
                titleStyle={{fontFamily:'Itim-Regular'}}
                centerTitle={true}
                elevation={0}
                leading={<TouchableOpacity
                onPress={() => navigation.navigate('Workoutdetail')}
                >
                    <Avatar.Icon icon="arrow-left"
                        style={{ backgroundColor: Colors.secondary, }}
                        color='black' size={40}

                    />
                </TouchableOpacity>
                }
            />
            <View style={{ paddingTop: 20, alignItems: 'center' }}>
                <Avatar.Image source={require('../../assets/image/userJP4.png')}
                    size={80}
                />
                <View>
                    <Avatar.Image source={require('../../assets/image/green4.png')}
                        style={{
                            position: 'absolute',
                            marginTop: -70,
                            marginLeft: 25
                        }}
                        size={15}
                    />
                </View>


            </View>
            <View style={{ paddingTop: 20, alignSelf: 'center', }}>
                <Text style={{ fontSize: 20, color: theme.txt, fontWeight: '600',fontFamily:'Itim-Regular' }}>Edward Alesky</Text>
                <Text style={[style.txt1, { textAlign: 'center' }]}>A sports lover</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} scrollEnabled={true}>
                <View style={{ paddingTop: 15, flexDirection: 'row', justifyContent: 'center' }}>
                    <View >
                        <TouchableOpacity
                            style={{
                                paddingVertical: 10,
                                paddingHorizontal: 20,
                                backgroundColor: Colors.primary,
                                flexDirection: 'row',
                                alignItems: 'center',
                                borderRadius: 10,

                            }}
                            // onPress={() => navigation.navigate('Statistics')}
                        >
                            <Icons name='plus' color='white' size={20} />
                            <Text style={{ color: 'white', textAlign: 'center', fontSize: 18, paddingLeft: 5,fontFamily:'Itim-Regular' }}>Follow</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ paddingLeft: 10, flexDirection: 'row' }}>
                        <TouchableOpacity
                            style={{
                                backgroundColor: theme.bg,
                                flexDirection: 'row',
                                alignItems: 'center',
                                paddingVertical: 10,
                                paddingHorizontal: 20,
                                borderRadius: 10,
                                borderColor: 'red',
                                borderWidth: 1
                            }}>
                            <Icons name='message-plus-outline' color='red' size={20} />
                            <Text style={{ color: 'red', textAlign: 'center', fontSize: 18, paddingLeft: 5 ,fontFamily:'Itim-Regular'}}>Message</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ paddingTop: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingRight: 15 }}>
                        <Image source={require('../../assets/image/workout.png')} />
                        <View style={{ paddingLeft: 5 }}>
                            <Text style={style.txt1}>Workout</Text>
                            <Text style={[style.subtitle, { color: theme.txt }]}>153</Text>
                        </View>
                    </View>
                    <View style={[style.verticaldivider, { backgroundColor: Colors.disable }]}></View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 15 }}>
                        <Image source={require('../../assets/image/calories1.png')} />
                        <View style={{ paddingLeft: 5 }}>
                            <Text style={style.txt1}>Calories</Text>
                            <Text style={[style.subtitle, { color: theme.txt }]}>320</Text>
                        </View>
                    </View>
                </View>
                <View style={{ paddingTop: 20 }}>
                    <Text style={{ fontSize: 20, color: theme.txt,fontFamily:'Itim-Regular' }}>Activities</Text>
                </View>
                <View style={{ paddingTop: 15, alignItems: 'center' }} >
                    <Image source={require('../../assets/image/activities4.png')}
                        style={{ height: height / 4.9, width: width / 1.2 }}
                    />
                </View>
                <View style={{ paddingTop: 20 }}>
                    <Text style={{ fontSize: 20, color: theme.txt,fontFamily:'Itim-Regular' }}>Today's Report</Text>
                </View>
                <View style={{ flexDirection: 'row', paddingTop: 10, marginBottom: 10, justifyContent: 'space-between' }}>
                    <Image source={require('../../assets/image/purpole4.png')}
                        resizeMode='stretch'
                        style={{ width: width / 2.4, height: height / 7 }}
                    />
                    <Image source={require('../../assets/image/red4.png')}
                        resizeMode='stretch'
                        style={{ width: width / 2.4, height: height / 7 }}
                    />
                </View>
                <View style={{ flexDirection: 'row', paddingTop: 10, marginBottom: 20, justifyContent: 'space-between' }}>
                    <Image source={require('../../assets/image/sky4.png')}
                        resizeMode='stretch'
                        style={{ width: width / 2.4, height: height / 7 }}
                    />
                    <Image source={require('../../assets/image/orange4.png')}
                        resizeMode='stretch'
                        style={{ width: width / 2.4, height: height / 7 }}
                    />
                </View>
            </ScrollView>
</View>
        </SafeAreaView>
    )
}