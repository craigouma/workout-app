import {
    View, Text,
    Image,
    Dimensions,
    TouchableOpacity,
    SafeAreaView,
    ImageBackground,
    StatusBar
} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Avatar } from 'react-native-paper';
import style from './theme/style';
import Slides from './Slides';


const height = Dimensions.get('screen').height
const width = Dimensions.get('screen').width

export default function IntroItem({ item }) {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={{ width:width }}>
            <StatusBar backgroundColor="transparent" translucent={true}/>
            <View style={{ flex: 2 }}>
                <Image source={item.bg}
                    style={{  width:width,height:height/1.4}}
                    
                >

                </Image>
            </View>
            <View style={{ flex: 1, 
                backgroundColor: '#1F4690',
                 paddingHorizontal: 18, 
                 paddingTop: 15,
                 borderTopRightRadius:50
                 }}>
                <Text style={[style.title]}>{item.title1}</Text>
                <Text style={[style.title]}>{item.title2}</Text>
                <View style={{ paddingTop: 15 }}>
                    <Text style={[style.txt]}>{item.subtitle}</Text>
                    
                </View>

            </View>
            {/* <View style={{ flexDirection: 'row' }}>
            <Avatar.Icon icon="chevron-left" 
                    size={20} 
                    style={{ backgroundColor: '#FE970F', }} 
                    color='white' />
            <TouchableOpacity>
                <Text style={style.txt}>Skip</Text>
            </TouchableOpacity>

            </View> */}
        </SafeAreaView>
    )
}