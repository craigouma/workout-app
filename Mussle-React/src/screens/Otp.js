import {
    View, Text,
    SafeAreaView,
    TouchableOpacity,
    Alert,
    Modal,
    Dimensions,
    Image
} from 'react-native'
import React, { useContext, useState } from 'react'
import style from '../theme/style'
import themeContext from '../theme/themeContex'
import { Colors } from '../theme/color';
import OtpInputs from 'react-native-otp-inputs'
import Clipboard from '@react-native-clipboard/clipboard'
import { useNavigation } from '@react-navigation/native';
import { AppBar } from '@react-native-material/core';
import { Avatar } from 'react-native-paper'



const height = Dimensions.get('screen').height
const width = Dimensions.get('screen').width
export default function Otp() {
    const theme = useContext(themeContext);
    const navigation = useNavigation();
    const [visible, setVisible] = useState(false)
    const [darkMode,setDarkMode] = useState(false)


    return (
        <SafeAreaView style={[style.area,{ backgroundColor: theme.bg,paddingTop:40 }]}>
           {/* <StatusBar backgroundColor={darkMode === true ? '#000':'#fff'} barStyle={darkMode === true ? 'light-content' : 'dark-content'} translucent={false}/> */}
            
           <AppBar
                color={theme.bg}
                
                elevation={0}
                leading={<TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Avatar.Icon icon="arrow-left"
                        style={{ backgroundColor: Colors.secondary, }}
                        color='black' size={40}
                        
                    />
                </TouchableOpacity>
                }
            />
            
            <View style={{ flex: 1, paddingTop: 50, marginHorizontal:20}}>
                <Text style={[style.title, { color: theme.txt, textAlign: 'center' }]}>Enter OTP</Text>
                <View style={{ paddingTop: 15 }}></View>
                <Text style={[style.txt1, { textAlign: 'center' }]}>We have just sent you 4 digit code via your</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <Text style={[style.txt1,]}>your</Text>
                    <Text style={[style.txt1, { color: theme.txt }]}> example@gmail.com</Text>
                </View>
                <View style={{ paddingTop: 20 }}>
                    <OtpInputs
                        Clipboard={Clipboard}
                        numberOfInputs={4}
                        selectionColor={Colors.primary}
                        style={{ flexDirection: 'row', justifyContent: 'space-evenly', }}
                        inputStyles={{
                            
                            borderColor: Colors.primary,
                            backgroundColor: theme.bg,
                            borderRadius: 5,
                            textAlign: 'center',
                            height: 50,
                            width: 50,
                            fontSize: 20,
                            borderWidth: 1,
                            color: theme.txt,
                            fontWeight: 'bold'
                        }}
                    />
                </View>
                <View style={{ paddingTop: 20 }}>
                   
                    <TouchableOpacity style={style.btn}
                        onPress={() => setVisible(true)}
                    >
                        <Text style={style.btntxt}>Continue</Text>
                    </TouchableOpacity>
                    
                </View>
                <View style={{ flexDirection: 'row', paddingTop: 10, justifyContent: 'center' }}>
                    <Text style={[style.txt1]}>Didn't receive code?</Text>
                    <TouchableOpacity>
                        <Text style={[style.txt1, { color: Colors.primary }]}> Resend Code</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Modal
                        transparent={true}
                        visible={visible}
                    >
                        <View style={{
                            width: width,
                            flex: 1,
                            backgroundColor:'#000000aa',
                            transparent:'true',
                        }}>
                            <View style={[style.modalcontainer,{backgroundColor: theme.bg, }]}>
                                <Image source={require('../../assets/image/success.png')}
                                    style={{ alignSelf: 'center' }}
                                />
                                <View style={{ paddingTop: 15 }}>
                                    <Text style={[style.title, { color: theme.txt, textAlign: 'center' }]}>You have logged in</Text>
                                    <Text style={[style.title, { color: theme.txt, textAlign: 'center' }]}>successfully</Text>
                                </View>
                                <View style={{ paddingTop: 15 }}>
                                    <Text style={[style.txt1, { textAlign: 'center' }]}>Lorem Ipsum is simply dummy text of the</Text>
                                    <Text style={[style.txt1, { textAlign: 'center' }]}>printing and typesetting industry.</Text>
                                </View>
                                <View style={{ paddingTop: 20, marginBottom:20}}>
                                    <TouchableOpacity style={style.btn}
                                        onPress={ ()=>{setVisible(false); navigation.navigate('OnBoarding');}}
                                    >
                                        <Text style={style.btntxt}>Continue</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{marginBottom:20}}></View>
                            </View>
                        </View>
             </Modal>
        </SafeAreaView>
    )
}

