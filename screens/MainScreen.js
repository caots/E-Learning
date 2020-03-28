import React, { Component } from 'react'
import {View, Text, Image, Button, Dimensions} from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'

import AboutMeScreen from './home/AboutMe'
import HomeApp from './home/HomeApp'
import LearnWordComponent from './learn/LearnWordCom'
import LearnNewWord from './learn/LearnNewWord'
import QuickTest from './review/QuickTest'
import ItemCourse from './home/ItemCoures'
import WelcomeTest from './review/WelcomeTest'
import ResultTest from './review/ResultTest'
import ReviewSuccess from  './notice/ReviewSuccess'

const {width, height} = Dimensions.get('window');
const Stack = createStackNavigator();

export default class MainScreen extends Component{

    state ={
        isLoading : false
    }

    renderLoadingScreen= () =>{
        return(
            <View style={{flex:1, marginHorizontal:20}}>
                <Image source={require('../assets/images/logo.png')}
                    style={{flex:1, width:width-40, resizeMode:'contain'}}
                />
            </View>
        );
    }

    render(){
        setTimeout(()=>{
            this.setState({isLoading: true})
        }, 2000)

        if(!this.state.isLoading){
            return(
                <View style={{flex:1}}>
                    {this.renderLoadingScreen()}
                </View>
            );
        }
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name='Welcome' component={AboutMeScreen}/>
                    <Stack.Screen name='Home' component={HomeApp}/>
                    <Stack.Screen name='ItemCourse' component={ItemCourse}/>
                    <Stack.Screen name='LearnNewWord' component={LearnNewWord}/>
                    <Stack.Screen name='LearnWord' component={LearnWordComponent}/>
                    <Stack.Screen name='WelcomeTest' component={WelcomeTest}/>
                    <Stack.Screen name='QuickTest' component={QuickTest}/>
                    <Stack.Screen name='ResultTest' component={ResultTest}/>
                    <Stack.Screen name='ReviewSuccess' component={ReviewSuccess}/>
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}