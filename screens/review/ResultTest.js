import React, { Component } from 'react'
import {View, Text, Image, Button, Dimensions, ImageBackground, StyleSheet} from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { TouchableWithoutFeedback, TouchableHighlight, TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import ProgressCircle from 'react-native-progress-circle'

const {width, height} = Dimensions.get('window');

export default class ResultTest extends Component{

    
    render(){
        const {navigation} = this.props;
        navigation.setOptions({
            headerShown: false,
        }) 
        return(
            <View style={{flex:1,justifyContent:'space-between'}}>
                <ImageBackground
                    source={require('../../assets/images/12.png')}
                    imageStyle={{resizeMode:'stretch', borderBottomLeftRadius:100, borderBottomRightRadius:100}}
                    style={{width, height: height/3.8, paddingVertical:50, paddingHorizontal:20}}
                >
                    <TouchableOpacity activeOpacity={0.7} 
                        style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}
                    >
                            <Text style={{ fontSize:28, fontWeight:'600', marginHorizontal:10}}>Kiểm tra</Text>
                    </TouchableOpacity> 
                </ImageBackground>
                <View style={{alignItems:'center'}}>
                   <Text style={{fontSize:20, fontWeight:'600',color:'#bec2c5'}}>Bạn trả lời đúng</Text>
                   <ProgressCircle
                        percent={70}
                        radius={100}
                        borderWidth={15}
                        color="#32cd32"
                        shadowColor="#f0f3f7"
                        bgColor="#fcfcfc"
                        outerCircleStyle={{marginVertical:20}}
                   >
                       <Text style={{fontSize:30, fontWeight:'600'}}>70%</Text>
                   </ProgressCircle>
                   <Text style={{fontSize:20, fontWeight:'600',color:'#bec2c5'}}>14/20 câu trả lời đúng</Text>
                </View>
                <View>
                    <TouchableOpacity activeOpacity={0.8} 
                        style={[styles.buttonStart,{backgroundColor:'#ffc700',}]}
                        onPress={()=> navigation.push('QuickTest')}
                    >
                        <FontAwesome name='undo' size={25} style={{opacity:0, marginHorizontal:20 }}/>
                        <Text style={{color:'#333', fontSize:20, 
                            fontWeight:'600', alignItems:'center', textAlign:'right'}}>
                            Làm lại
                        </Text>
                        <FontAwesome name='undo' size={25} style={{color:'#333', marginHorizontal:20}}/>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} 
                        style={[styles.buttonStart,{marginBottom:20}]}
                        onPress={()=> navigation.push('ItemCourse')}
                    >
                        <FontAwesome name='hand-peace-o' size={25} style={{opacity:0, marginHorizontal:20}}/>
                        <Text style={{color:'#FFF', fontSize:20, 
                            fontWeight:'600', alignItems:'center', textAlign:'right'}}>
                            Hoàn thành
                        </Text>
                        <FontAwesome name='hand-peace-o' size={25} style={{color:'#FFF', marginHorizontal:20}}/>
                    </TouchableOpacity>
                </View>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    buttonStart : {
        flexDirection:'row', 
        alignItems:'center',
        marginTop:10, 
        backgroundColor:'#5059e4',
        paddingVertical:15, 
        marginHorizontal:20,
        borderRadius:18,
        justifyContent:'space-between'
    }
})