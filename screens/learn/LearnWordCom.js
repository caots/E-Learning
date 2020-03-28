import React, { Component } from 'react'
import {View, Text, Image, Button, Slider,Dimensions, SafeAreaView,StyleSheet} from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import ProgressBarAnimated from 'react-native-progress-bar-animated';

import AwesomeAlert from 'react-native-awesome-alerts';

const {width, height} = Dimensions.get('window');

export default class LearnWord extends Component{

    state = {
        showAlert : true,
        countReadyStart : 3
    }

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
                        <Text style={{color:'#fff', fontSize:20, marginVertical:20}}>(noun)</Text>
                        <Text style={{color:'#fff', fontSize:20}}>/heˈlō/,/həˈlō/</Text>
                    </View>
                    
                </View>
        );
    }
    answerQuestion = () =>{
        const {navigation} = this.props;
        return(
            <View style={{alignItems:'center'}}>

                    <TouchableOpacity activeOpacity={0.6} 
                        onPress={()=> navigation.push('ReviewSuccess')}
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

    componentDidMount(){
        const {showAlert,countReadyStart} = this.state;
        let index  = 3;
            // setInterval(()=>{
            //     if(parseInt(countReadyStart) > 0){
            //         this.setState({countReadyStart: index});
            //         index --;
            //         console.log(index)
            //     }
            // },1000)
        
           
        //     if(parseInt(countReadyStart) == 0 ){{
        //         this.setState({showAlert:false});
        //         this.setState({countReadyStart:0})
        //     }   
    }

    render(){
        const {showAlert,countReadyStart} = this.state;
        const {navigation} = this.props;
        navigation.setOptions({
            headerShown: false,
        }) 

        return(
            <SafeAreaView style={{flex:1, marginHorizontal:15}}>
                <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginBottom:5}}>
                        <ProgressBarAnimated
                            width={width/1.2}
                            height={20}
                            value={40}
                            borderRadius={16}
                            backgroundColor="#5059e4"
                            barEasing="ease"
                        />
                        <TouchableWithoutFeedback onPress={()=> navigation.push('ItemCourse')}>
                            <FontAwesome name='times' color='#a9a9a9' size={25}/>
                        </TouchableWithoutFeedback>
                        
                </View>
                <View>
                    <Text style={{fontSize:22, fontWeight:'600'}}>Chọn nghĩa</Text>
                </View>
                
                {this.wordQuestion()}
                {this.answerQuestion()}

                <View style={{flex:1, flexDirection:'row', justifyContent:'space-between'}} >
                    <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                        <Image source={require('../../assets/icons/light.png')} 
                            style={{width:50, height:50}}/>
                         <Text style={{fontSize:16, fontWeight:'600'}}>Gợi ý</Text>
                    </View>
                    <View style={{flexDirection:'row' ,justifyContent:'center', alignItems:'center'}}>
                        <Image source={require('../../assets/icons/tag.png')} 
                                style={{width:50, height:50}}/>
                        <Text style={{fontSize:16, fontWeight:'600'}}>Tôi đã biết từ này</Text>
                    </View>
                </View>
                <AwesomeAlert
                    show={showAlert}
                    showProgress={true}
                    title="Are you ready"
                    titleStyle={{color:'gray'}}
                    message={countReadyStart}
                    messageStyle={{fontSize:50}}
                    closeOnTouchOutside={true}
                    closeOnHardwareBackPress={false}
                    showCancelButton={false}
                    showConfirmButton={false}
                   
                />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    containBox: {
        paddingHorizontal:10, 
        backgroundColor:'#5059e4', 
        marginTop:15, 
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
        width: width-30,
        marginVertical:10,
        borderRadius:20,
        borderColor:'#a9a9a9',
        borderWidth:0.5,
        shadowOffset: {width:1, height:1},
        flexDirection:'row'
    },
    textResult:{
        fontSize:20, margin:12, fontWeight:'600'
    },
    thumb: {
        width: 16,
        height: 16,
        borderRadius: 16,
        borderColor: "white",
        borderWidth: 3,
        backgroundColor: 'red'
      },
})