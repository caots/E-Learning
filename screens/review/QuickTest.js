import React, { Component } from 'react'
import {View, Text, Image, Button, Slider,Dimensions, SafeAreaView,StyleSheet} from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import ProgressCircle from 'react-native-progress-circle'
import {Surface, Shape} from '@react-native-community/art';

const {width, height} = Dimensions.get('window');

export default class QuickTest extends Component{

    wordQuestion = () =>{
        return(
                <View style={styles.containBox}>
                    <View style={{alignItems:'flex-end', marginRight:10}}>
                        <FontAwesome name='mixcloud' size={30} color='#fff' />
                    </View>
                    <View style={{
                        justifyContent:'center',
                        alignItems:'center',
                        marginBottom:30
                    }}>
                        <Text style={{color:'#fff', fontSize:32, fontWeight:'bold'}}>
                            accommodation
                        </Text>
                        <Text style={{color:'#fff', fontSize:20, marginVertical:15}}>(noun)</Text>
                        <Text style={{color:'#fff', fontSize:20}}>/heˈlō/,/həˈlō/</Text>
                    </View>
                    
                </View>
        );
    }
    answerQuestion = () =>{
        return(
            <View style={{alignItems:'center', flexDirection:'row', flexWrap:'wrap', justifyContent:'space-between'}}>
                    <TouchableOpacity activeOpacity={0.6} 
                        style={[styles.boxResult,{backgroundColor:'#e0f8e3',borderColor:'#32cd32'}]}
                    >
                        <Text style={[styles.textResult,{color:'#32cd32'}]}>Chỗ ở</Text>
                        <FontAwesome name='smile-o' color='#32cd32' size={25}/>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.6} 
                        style={[styles.boxResult,{backgroundColor:'#ffd9e0',borderColor:'#ff1493'}]}
                    >
                        <Text style={[styles.textResult,{color:'#ff1493'}]}>Khách sạn</Text>
                        <FontAwesome name='frown-o' color='#ff1493' size={25}/>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.6} 
                        style={styles.boxResult}
                    >
                        <Text style={styles.textResult}>Nhà hàng</Text>
                        
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.6} 
                        style={styles.boxResult}
                    >
                        <Text style={styles.textResult}>Bệnh viện</Text>
                    </TouchableOpacity> 
                </View>
        );
    }
    render(){
        const {navigation} = this.props;
        navigation.setOptions({
            headerShown: false,
        }) 
        return(
            <SafeAreaView style={{flex:1, marginHorizontal:15}}>
                <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                <FontAwesome name='language' color='#5059e4' size={30} />
                    <View style={{flexDirection:'row', justifyContent:'center'}}>
                        <FontAwesome name='heart' color='#a9a9a9' size={25} style={{color:'red'}}/>
                        <FontAwesome name='heart' color='#a9a9a9' size={25} style={{marginHorizontal:10,color:'red'}}/>
                        <FontAwesome name='heart' color='#a9a9a9' size={25} style={{color:'gray'}}/>
                    </View>
                    <TouchableWithoutFeedback
                        onPress={()=> navigation.push('ItemCourse')}
                    > 
                         <FontAwesome name='times' color='#a9a9a9' size={30} />
                    </TouchableWithoutFeedback>
                </View>
                {this.wordQuestion()}

                <View style={{justifyContent:'center', alignItems:'center', marginVertical:20}}>
                    <ProgressCircle
                        percent={20}
                        radius={80}
                        borderWidth={5}
                        color="#5059e4"
                        shadowColor="#f0f3f7"
                        bgColor="#fcfcfc"
                    >
                        <Text style={{ fontSize: 30}}>{'30'}</Text>
                    </ProgressCircle>
                </View>
                {this.answerQuestion()}

            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    containBox: {
        paddingHorizontal:10, 
        backgroundColor:'#5059e4', 
        marginTop:20, 
        marginBottom:20,
        padding:15,
        borderRadius:15,
        borderColor:'#0000cd',
        shadowOffset: {width:1, height:1},
        
    },
    boxResult :{
        backgroundColor:'#fcfcfc',
        justifyContent:'center',
        alignItems:'center',
        width: width/2.3,
        borderRadius:20,
        borderColor:'#a9a9a9',
        borderWidth:0.5,
        shadowOffset: {width:1, height:1},
        flexDirection:'row',
        marginBottom:20,
        padding:15,

    },
    textResult:{
        fontSize:20, fontWeight:'600', marginRight:5
    },

})