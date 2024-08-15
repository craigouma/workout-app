import { StyleSheet } from "react-native";
import {theme} from '../theme/theme'
import { Colors } from "./color";
import themeContext from "./themeContex";

export default StyleSheet.create({
    area: {
        flex: 1,
        // paddingHorizontal: 20,
        // fontFamily:'Itim-Regular'
    },
    main: {
        flex: 1,
        backgroundColor: 'white',
        marginHorizontal:20
        // fontFamily:'Itim-Regular'
    },
    title:{
        fontSize:28,
        fontWeight:'600',
        color:Colors.secondary,
        fontFamily:'Itim-Regular'
    },
    txt:{
        fontSize:16,
        color:Colors.secondary,
        fontFamily:'Itim-Regular',
        
        
    },
    btn:{
        backgroundColor:Colors.primary,
        alignItems:'center',
        paddingVertical:15,
        borderRadius:25,
        // fontFamily:'Itim-Regular'
       
    },
    btntxt:{
        fontSize:16,
        color:Colors.secondary,
        fontFamily:'Itim-Regular'
    },
    indicator:{
        borderColor:'#BDBDBD',
        borderWidth:1,
        padding:4,
        borderRadius:20,
        backgroundColor:'#BDBDBD',
        marginHorizontal:5
    },
    logintitle:{
        fontSize:26,
        textAlign:'center',
        fontWeight:'600',
        fontFamily:'Itim-Regular'

    },
    txt1:{
        fontSize:16,
        color:Colors.disable,
        fontFamily:'Itim-Regular'
        
    },
    txtinput:{
        // backgroundColor:'white',
        borderWidth:1,
        borderRadius:10,
        paddingHorizontal:20,
        borderColor:Colors.bord,
        color: Colors.disable,
        height:50
        // fontFamily:'Itim-Regular'
    },

    radio:{
        borderWidth:1,
        borderRadius:10,
        paddingHorizontal:10,
        borderColor:Colors.bord,
        color: Colors.disable,
        // fontFamily:'Itim-Regular'
    },

    divider:{
        height:1,
        backgroundColor:Colors.disable,
        width:80

    },

    divider1:{
        height:1,
        backgroundColor:Colors.bord,
        marginTop:20,
        marginBottom:25  
    },

    dividertxt:{
        color:Colors.disable,
        fontFamily:'Itim-Regular'
    },

    btn1:{
       
        alignItems:'center',
        paddingVertical:15,
        borderRadius:25,
        flexDirection:'row',
        justifyContent:'center',
       
    
    },
    btntxt1:{
        fontSize:16,
        color:Colors.active,
        paddingLeft:15,
        fontFamily:'Itim-Regular'
    },
    title1:{
        fontSize:30,
        fontWeight:'600',
        // fontStyle:'italic',
        fontFamily:'Itim-Regular'
    },
    subtitle:{
        fontSize:20,
        fontWeight:'600',
        fontFamily:'Itim-Regular'
    },
    subtxt:{
        fontSize:14,
        color:Colors.disable,
        lineHeight:20,
        fontFamily:'Itim-Regular'
    },
    categoryTextSelected:{
        paddingBottom:5,
        borderBottomWidth:2,
        borderColor:'#227C70',
        // fontFamily:'Itim-Regular'
    },
    categoryText:{
        fontSize:14,
        fontWeight:'600',
        // fontFamily:'Itim-Regular'
    },
    categorycontainer:{
        flexDirection:'row',
        marginTop:20,
        marginBottom:30,
        justifyContent:'space-between',
        // fontFamily:'Itim-Regular'
    },
    inputContainer:{
        alignItems:'center',
        flexDirection:'row',
        borderWidth:1,
        borderColor:Colors.bord,
        flex:1,
        marginTop:10,
        borderRadius:20,
        paddingHorizontal:10,
        height:50
        // fontFamily:'Itim-Regular'
    },
    btn3:{
        marginLeft:10,
        height:50,
        width:50,
        backgroundColor:'#227C70',
        justifyContent:'center',
        alignItems:'center',
        marginTop:10,
        borderRadius:10,
        // fontFamily:'Itim-Regular'
        // paddingHorizontal:10
      },
      verticaldivider:{
        height:'40%',
        width:1,
       },
       modalcontainer:{
        flex: 1, 
        borderRadius: 20, 
        paddingHorizontal: 10, 
        marginVertical: 140, 
        paddingTop: 20, 
        marginHorizontal: -10,
        alignSelf: 'center',
        // fontFamily:'Itim-Regular'
       },  
       btnoutline:{
        borderColor:Colors.bord,
        borderWidth:1,
        alignItems:'center',
        paddingVertical:14,
        borderRadius:10,
        // fontFamily:'Itim-Regular'
       }

}
);