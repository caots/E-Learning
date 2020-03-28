import React, { Component } from 'react'
import {View, Text, Image, Button, Dimensions, ImageBackground, StyleSheet, Platform} from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { TouchableWithoutFeedback, TouchableHighlight, TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import ProgressCircle from 'react-native-progress-circle'

const {width, height} = Dimensions.get('window');

export default class ReviewSuccess extends Component{
    render(){

        const {navigation} = this.props;
        navigation.setOptions({
            headerShown: false,
        }) 

        return(
            <View style={{flex:1, marginTop:Platform.OS === 'ios' ? 34 :0}}>
                <View style={{marginHorizontal:20}}>
                    <Text style={{fontSize:28, fontWeight:'bold', marginVertical:10}}>Hoàn thành luyện tập</Text>
                    <Text style={{fontWeight:'600', color:'gray'}}>Thứ 2, ngày 10-9</Text>
                </View>
                <View style={{marginVertical:20}}>
                    <Image source={require('../../assets/images/review_success.png')} 
                        style={{width:width, height:height/4.5, resizeMode:'stretch'}}
                    />
                </View>
                <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                     <ProgressCircle
                        percent={70}
                        radius={100}
                        borderWidth={8}
                        color="#5059e4"
                        shadowColor="#f0f3f7"
                        bgColor="#fcfcfc"
                    >
                        <Text style={{ fontSize: 30}}>{'70%'}</Text>
                    </ProgressCircle>
                </View>
                <View style={{marginHorizontal:20, marginVertical:20}}>
                    <TouchableOpacity activeOpacity={0.8} 
                        onPress={()=> navigation.push('LearnWord')}
                        style={[styles.buttonStart,{backgroundColor:'#5059e4',}]}>
                        <Text style={{color:'#FFF', fontSize:20, fontWeight:'600', alignItems:'center', textAlign:'right'}}>
                            Tiếp tục ôn luyện
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} 
                        style={[styles.buttonStart,{backgroundColor:'#FFF',}]}
                        onPress={()=> navigation.push('ItemCourse')}
                    >
                        <Text style={{fontSize:20, fontWeight:'600', alignItems:'center', textAlign:'right'}}>
                            Quay về màn hình chính
                        </Text>
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
        paddingVertical:15, 
        borderRadius:18,
        justifyContent:'center'
    }
})