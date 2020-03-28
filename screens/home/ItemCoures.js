import React, { Component } from 'react'
import {View, Text, Image, Button, Dimensions, ImageBackground, StyleSheet} from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { TouchableWithoutFeedback, TouchableHighlight, TouchableOpacity, ScrollView } from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('window');

export default class ItemCourse extends Component{

    showItemMenu = item => {
        const {navigation} = this.props;
        return(
            <TouchableOpacity style={styles.miniboxCourse} activeOpacity={0.8}
                onPress={()=> navigation.push(item.navigation)}
            >
                <Image source={item.image} 
                     style={{width:40, height:40, resizeMode:'contain', margin:5, alignSelf:'flex-end'}}/>
                <Text style={{fontSize:16, fontWeight:'600', margin:5, width:'80%'}}>{item.name}</Text>
            </TouchableOpacity>
        );
    }

    showBoxMenu = () =>{
        return(
                <View style={styles.boxInfo}>
                    <Text style={{color:'#808080', fontSize:18, fontWeight:'600'}}>Completed</Text>
                    <View style={{flexDirection:'row', justifyContent:'flex-start', marginTop:10, alignItems:'center'}}>
                        <View style={{flex:1,marginRight:10}}>
                            <Text style={{fontSize:40, fontWeight:'bold'}}>20%</Text>                
                            <Text  style={{fontSize:16, fontWeight:'bold'}}>of the course</Text>
                        </View>
                        <View style={{flex:1}} >
                            <View style={{flexDirection:'row'}}>
                                <Text style={{ fontWeight:'bold'}}>20 </Text>
                                <Text>learning</Text>
                            </View>
                            <View  style={{flexDirection:'row', marginVertical:5}}> 
                                 <Text style={{ fontWeight:'bold'}}>80 </Text>
                                <Text>remaining</Text>
                            </View>
                            <View  style={{flexDirection:'row'}}>
                                <Text style={{ fontWeight:'bold'}}>30 </Text>
                                <Text>completed</Text>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={{flexDirection:'row', 
                        alignItems:'center', 
                        justifyContent:'space-between',
                        marginVertical:10,
                    }}>
                         <View style={{}}></View>
                            <View style={{flexDirection:'row',backgroundColor:'#5059e4', 
                                padding:10, justifyContent:'center', alignItems:'center',borderRadius:20
                            }}>
                                <Text style={{paddingHorizontal:10,color:'#fff', fontWeight:'bold'}}>WORD COLLECTION</Text>
                                <FontAwesome name='angle-right' size={20} color='#fff'/> 
                            </View>
                            
                    </TouchableOpacity>
                </View>
        );
    }

    render(){
        const {navigation, itemMenus} = this.props;
        navigation.setOptions({
            headerShown: false,
        }) 

        return(
            <View style={{flex:1}}>
                <ImageBackground
                    source={require('../../assets/images/8.png')}
                    imageStyle={{resizeMode:'stretch'}}
                    style={{width, height: height/5.5, paddingVertical:20, paddingHorizontal:20, justifyContent:'center'}}
                >
                        <View style={{flexDirection:'row', justifyContent:'flex-start',
                             alignItems:'center'
                        }}>
                            <TouchableWithoutFeedback 
                                onPress={()=> navigation.navigate('Home')}
                            >
                                 <FontAwesome name='angle-left' size={30}/> 
                            </TouchableWithoutFeedback>
                            <Text style={[{ fontSize:24, fontWeight:'600', marginLeft:10}]}>500 từ vựng cơ bản</Text>
                        </View>                        
                </ImageBackground>
               
               <ScrollView showsVerticalScrollIndicator={false}>
                    {this.showBoxMenu()}
                    <View style={{marginVertical:20}}>
                        <Text style={{fontSize:24, fontWeight:'bold', marginHorizontal:20}}>
                            Monday, 10-9
                        </Text>
                        <View style={{flexWrap:'wrap',padding:5, flexDirection:'row', marginHorizontal:1 , justifyContent:'space-evenly'}}>
                            {itemMenus.map( item => {
                                return(
                                    this.showItemMenu(item)
                                );
                            })}
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

ItemCourse.defaultProps = {
    itemMenus : [
        {
            image: require('../../assets/icons/3.png'),
            name: 'New Words',
            navigation: 'LearnNewWord'
        },
        {
            image: require('../../assets/icons/1.png'),
            name: 'Review',
            navigation: 'WelcomeTest'
        },
        {
            image: require('../../assets/icons/2.png'),
            name: 'Quiz',
            navigation: ''
        },
        {
            image: require('../../assets/icons/4.png'),
            name: 'Notice word',
            navigation: ''
        }
    ]
}

const styles = StyleSheet.create({
    boxInfo : {
        margin:10, 
        marginVertical:20,
        padding:10,
        paddingHorizontal:20, 
        borderWidth:1.5, 
        borderColor:'#dcdcdc',
        borderRadius:20,
        shadowOffset:{
            width: 1,
            height: 1,
        },
        shadowOpacity: 0.18,
    },
    miniboxCourse: {
        backgroundColor:'#f8f8ff',
        width:width/2.2,
        marginVertical:5,
        borderRadius:15,
        borderWidth:1.5, 
        borderColor:'#dcdcdc',
        shadowOffset:{
            width: 0,
            height: 1,
            },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        elevation: 1,
        padding:5
    }
})