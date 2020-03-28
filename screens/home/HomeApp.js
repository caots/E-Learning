import React, { Component } from 'react'
import {View, Text, Image, Button, Dimensions, ImageBackground, StyleSheet} from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { TouchableWithoutFeedback, TouchableHighlight, TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import ProgressBarAnimated from 'react-native-progress-bar-animated';

const {width, height} = Dimensions.get('window');

export default class HomeApp extends Component{

    state = {
        isTimeinDay: true
    }

    imageCourse = source => {
        const {navigation} = this.props;
        const {isTimeinDay} = this.state;
        const color = isTimeinDay? 'black': '#fff';
        return(
            <TouchableOpacity 
                activeOpacity={0.7}
                onPress={()=>{
                    navigation.navigate('ItemCourse');
                }}
            >
                <ImageBackground
                    source={source}
                    style={styles.imageCourse}
                    imageStyle={{resizeMode:'stretch'}}
                >
                    <Text style={{fontSize:24,color, fontWeight:'bold'}}>500 từ vựng cơ bản</Text>
                    <View style={{marginVertical:10,}}>
                        <Text style={{fontSize:16,fontWeight:'600' ,paddingBottom:5, color}}>20%</Text>
                        <ProgressBarAnimated
                            width={width/2.1}
                            height={10}
                            value={40}
                            borderRadius={16}
                            backgroundColor={color}
                            borderColor={isTimeinDay?'#a9a9a9':'#dcdcdc'}
                            barEasing="ease"
                        />
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        );
    }

    render(){
        const {isTimeinDay} = this.state;
        const color = isTimeinDay? '#ff0000': '#fff';
        const {navigation} = this.props;
        navigation.setOptions({
            headerShown: false,
        }) 
        return(
            <View style={{flex:1,backgroundColor: isTimeinDay? '#fff': '#333'}}>
                <ImageBackground
                    source={require('../../assets/images/13.png')}
                    imageStyle={{resizeMode:'cover', borderBottomLeftRadius:100, borderBottomRightRadius:100}}
                    style={{width, height: height/2.5, paddingVertical:50, paddingHorizontal:20}}
                >
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <FontAwesome name={isTimeinDay ? 'sun-o' : 'moon-o'} size={30} style={{opacity:0}} />
                        <Text style={[{ fontSize:28, fontWeight:'600'},{color}]}>E-Learning</Text>
                        <TouchableOpacity activeOpacity={0.7}
                            onPress={()=> this.setState({isTimeinDay : !isTimeinDay})}
                        >
                            <FontAwesome name={isTimeinDay ? 'sun-o' : 'moon-o'} size={30} style={{color}}/>
                        </TouchableOpacity>
                    </View> 
                </ImageBackground>
                <ScrollView showsVerticalScrollIndicator={false} style={{marginTop:10, marginHorizontal:15}}>
                    {this.imageCourse(require('../../assets/images/8.png'))}
                    {this.imageCourse(require('../../assets/images/5.png'))}
                    {this.imageCourse(require('../../assets/images/9.png'))}
                    {this.imageCourse(require('../../assets/images/6.png'))}
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    imageCourse : {
        width : width-40, 
        height: height/6, 
        paddingVertical:20, 
        paddingHorizontal:20, 
        marginVertical:10,
        justifyContent:'center',
        shadowColor:'#333',
        shadowOffset:{width:1, height:1},
        shadowOpacity:0.2,
        
    }
})