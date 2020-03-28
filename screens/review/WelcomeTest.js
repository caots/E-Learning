import React, { Component } from 'react'
import {View, Text, Image, Button, Dimensions, ImageBackground, StyleSheet} from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { TouchableWithoutFeedback, TouchableHighlight, TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import ProgressBarAnimated from 'react-native-progress-bar-animated';

const {width, height} = Dimensions.get('window');

export default class WelcomeTest extends Component{

    
    render(){
        const {navigation} = this.props;
        navigation.setOptions({
            headerShown: false,
        }) 
        return(
            <View style={{flex:1,justifyContent:'space-between', backgroundColor:'#ffffff'}}>
                <ImageBackground
                    source={require('../../assets/images/11.png')}
                    imageStyle={{resizeMode:'conatin'}}
                    style={{width, height: height/2.8, paddingVertical:50, paddingHorizontal:20}}
                >
                    <TouchableOpacity activeOpacity={0.7} 
                        style={{flexDirection:'row', alignItems:'center'}}
                        onPress={()=>navigation.push('ItemCourse')}
                    >
                            <FontAwesome name='angle-left' size={30} />
                            <Text style={{ fontSize:28, fontWeight:'600', marginHorizontal:10}}>Kiểm tra</Text>
                    </TouchableOpacity> 
                </ImageBackground>
                <View style={{alignItems:'center'}}>
                    <Text style={{fontSize:20, fontWeight:'600', textAlign:'center', color:'#696969', width:'80%'}}>
                        Kiểm tra giúp bạn ôn lại kiến thức đã học
                    </Text>
                </View>
                <TouchableOpacity activeOpacity={0.8}
                    style={styles.buttonStart}
                    onPress={()=>navigation.push('QuickTest')}

                >
                    <Text style={{color:'#fff', fontSize:20, 
                        fontWeight:'600', alignItems:'center', textAlign:'right'}}>
                        Bắt đầu
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    buttonStart : {
        flexDirection:'row', 
        alignItems:'center',
        marginVertical:50, 
        backgroundColor:'#5059e4',
        paddingVertical:15, 
        marginHorizontal:20,
        borderRadius:15,
        justifyContent:'center'
    }
})