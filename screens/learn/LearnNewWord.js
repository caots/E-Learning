import React, { Component } from 'react'
import {View, Text, Image, Button, Slider,Dimensions, SafeAreaView,StyleSheet, TouchableHighlight,Animated} from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';
import ProgressBarAnimated from 'react-native-progress-bar-animated';


const {width, height} = Dimensions.get('window');

export default class LearnNewWord extends Component{

    constructor(props){
        super(props)
        this.state ={
            isCLickSearch : new Animated.Value(0),
            isCLickReload : new Animated.Value(0)
        }
    }

    animateSearch = () =>{
        Animated.spring(this.state.isCLickSearch,{
            toValue: 1 ,
            duration:300
        }).start();
    }

    animateReload = () =>{
        Animated.spring(this.state.isCLickReload,{
            toValue: 1 ,
            duration:300
        }).start(()=>{
            this.state.isCLickReload.setValue(0)
        });
    }

    wordQuestion = () =>{
        return(
                <View style={styles.containBox}>
                    <View style={{alignItems:'flex-end', marginRight:10}}>
                        <FontAwesome name='star' size={30} color='#ffc700' />
                    </View>
                    <View style={{
                        justifyContent:'center',
                        alignItems:'center',
                        marginBottom:30
                    }}>
                        <Text style={{color:'#fff', fontSize:32, fontWeight:'bold'}}>
                            accommodation
                        </Text>
                        <Text style={{color:'#fff', fontSize:20, marginVertical:20}}>(noun)</Text>
                        <Text style={{color:'#fff', fontSize:20}}>/heˈlō/,/həˈlō/</Text>
                    </View>
                    
                </View>
        );
    }
    
    render(){
        const {isCLickSearch, isCLickReload} = this.state;
        const {navigation} = this.props;

        navigation.setOptions({
            headerShown: false,
        }) 
        
        const widthSearch = isCLickSearch.interpolate({
            inputRange: [0,1],
            outputRange: [width/3.5, width/1.5],
            extrapolate:'clamp'
        })

        console.log(isCLickReload)

        const animationRotate = isCLickReload.interpolate({
            inputRange: [0,1],
            outputRange: ['0deg','360deg'],
            extrapolate:'clamp'
        })

        const animationStyle = {
            transform: [
                { rotate: animationRotate}
            ],
        }

        return(
            <SafeAreaView style={{flex:1, marginHorizontal:20, justifyContent:'space-between'}}>
                <View>
                    <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginBottom:5}}>
                        <TouchableOpacity activeOpacity={0.8} 
                            onPress={() => navigation.push('ItemCourse')}
                            style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}
                        >
                            <FontAwesome name='angle-left' size={30}/>
                            <Text style={{fontSize:22, fontWeight:'600',marginHorizontal:5}}>Learn new word</Text>
                        </TouchableOpacity>
                       
                        <TouchableOpacity activeOpacity={0.8} 
                            onPress={() => navigation.push('LearnWord')}
                            style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}
                        >
                            <Text style={{fontSize:22, marginHorizontal:5, fontWeight:'600'}}>Review</Text>
                            <FontAwesome name='angle-right' size={30}/>
                        </TouchableOpacity>
                        
                    </View>
                    <View style={{marginTop:10, flexDirection:'row', alignItems:'center'}}>
                        <TouchableOpacity activeOpacity={0.8}
                                 style={{flexDirection:'row', alignItems:'center'}}
                                 onPress={()=> {
                                     this.animateSearch();
                                }}
                        >
                            <FontAwesome name='search' size={30} color='#5059e4'/>
                        </TouchableOpacity>
                        <Animated.View style={{width:widthSearch}}>
                            <TextInput  
                                style={{ marginHorizontal:15, borderBottomWidth:1,paddingVertical:10,width: '100%'}}
                                placeholder='Press any word'
                            />
                        </Animated.View>
                    </View>
                </View>
                
                <View>
                    <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                        <TouchableOpacity activeOpacity={0.8}
                            onPress={() => this.animateReload()}
                        >
                            <Animated.View style={animationStyle}>
                                <FontAwesome name='repeat' size={30} color='#5059e4'/>
                            </Animated.View>
                        </TouchableOpacity>
                        <View style={{marginHorizontal:20, padding:15, 
                            paddingHorizontal:80, backgroundColor:'#dcdcdc', borderRadius:15}}>
                            <Text style={{fontSize:20, fontWeight:'600', color:'#0000cd'}}>2/12</Text>
                        </View> 
                        <TouchableHighlight>
                            <FontAwesome name='mixcloud' size={30} color='#5059e4'/>
                        </TouchableHighlight>
                        
                    </View>
                    {this.wordQuestion()}
                    <View style={{justifyContent:'center', alignItems:'center'}}>
                        <Text style={{fontSize:16, color:'#5059e4', marginBottom:10}}>Ý nghĩa</Text>
                        <View style={{borderBottomWidth:1, borderBottomColor:'#333', width:width/2.5, alignItems:'center'}}>
                            <Text style={{fontSize:40, fontWeight:'600'}}>chỗ ở</Text>
                        </View>
                    </View>
                </View>
                

                <View>
                    <TouchableOpacity activeOpacity={0.8} style={[styles.buttonStart]}>
                        <FontAwesome name='share' size={25} style={{opacity:0, marginHorizontal:20}}/>
                        <Text style={{color:'#FFF', fontSize:20, 
                            fontWeight:'600', alignItems:'center', textAlign:'right'}}>
                            Tiếp nào
                        </Text>
                        <FontAwesome name='share' size={25} style={{color:'#FFF', marginHorizontal:20}}/>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        activeOpacity={0.8} 
                        style={[styles.buttonStart,{backgroundColor:'#ffc700',marginBottom:20}]}
                        onPress={() => navigation.push('LearnWord')}
                    >
                        <FontAwesome name='check-square-o' size={30} style={{opacity:0, marginHorizontal:20 }}/>
                        <Text style={{color:'#333', fontSize:20, 
                            fontWeight:'600', alignItems:'center', textAlign:'right'}}>
                            Hoàn thành
                        </Text>
                        <FontAwesome name='check-square-o' size={30} style={{color:'#333', marginHorizontal:20}}/>
                    </TouchableOpacity>
                    
                </View>
                
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    containBox: {
        backgroundColor:'#5059e4', 
        marginTop:15, 
        marginBottom:20,
        padding:10,
        borderRadius:15,
        borderColor:'#0000cd',
        shadowOffset: {width:1, height:1},
        
    },
    buttonStart : {
        flexDirection:'row', 
        alignItems:'center',
        marginTop:10, 
        backgroundColor:'#5059e4',
        paddingVertical:15, 
        borderRadius:18,
        justifyContent:'space-between'
    }
})