import React, { Component } from 'react'
import {View, Text, Image, Button, Dimensions, Animated, SafeAreaView,StyleSheet} from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
const {width, height} = Dimensions.get('window');

export default class AboutMe extends Component{

    scrollX = new Animated.Value(0);

    renderIllustrations = () => {
        const {illustrations} = this.props;
        return(
                <FlatList
                    horizontal
                    pagingEnabled // chuyen luon sang trang moi
                    scrollEnabled // keo sang trang khac
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={16}
                    snapToAlignment='center' // can chinh
                    data={illustrations}
                    extraData={this.state}
                    keyExtractor={(item, index) => item.id+ Math.random()}
                    renderItem={({item, index}) =>{
                        return(
                            <View style={{alignItems:'center', justifyContent:'center'}} key={index}>
                                <Image 
                                    source={item.source} 
                                    style={{width, resizeMode:'contain',overflow:'visible'}}
                                />
                               <Text style={{fontSize:24, fontWeight:'500', width:width/1.2,
                                    textAlign:'center', opacity:0.7}}>
                                    {item.content}
                                </Text>
                            </View>
                        );
                    }}
                    onScroll={
                        Animated.event([
                            {
                                nativeEvent: { contentOffset: { x: this.scrollX } }
                            }
                        ])
                    }
                />            
        );
    }

    renderSteps = () =>{
        const { illustrations } = this.props;
        const stepPosition = Animated.divide(this.scrollX, width);
        return(

            <View style={{flexDirection:'row', justifyContent:'center'}}>
                {illustrations.map((item, index) =>{
                    const backgroundColor = stepPosition.interpolate({
                        inputRange : [index -1 , index , index + 1],
                        outputRange: ['gray','#5059e4', 'gray'],
                        extrapolate: 'clamp'
                    })
                    const width = stepPosition.interpolate({
                        inputRange : [index -1 , index , index + 1],
                        outputRange: [10,20,10],
                        extrapolate: 'clamp'
                    })
                    return(
                        <Animated.View style={[styles.steps, {backgroundColor, width}]}></Animated.View>
                    );
                })}
                
            </View>
        );
    } 
    render(){
        const {navigation} = this.props;
        navigation.setOptions({
            headerShown: false,
        });
        return(
            <View style={{flex:1, backgroundColor:'white'}}>
                {this.renderIllustrations()}
                <View style={{flex:1, justifyContent:'space-around'}}>
                    {this.renderSteps()}
                     <TouchableOpacity
                     onPress={()=>{
                         navigation.navigate('Home');
                     }}
                        activeOpacity={0.9}
                         style={styles.styleButton}>
                        <Text style={{fontSize:20, fontWeight:'500', color:'white', textAlign:'center'}}>Bắt đầu</Text>    
                    </TouchableOpacity>       
                </View>
                                             
            </View>
        );
    }
}
AboutMe.defaultProps ={
    illustrations : [
        {id:1, source:require('../../assets/images/lockscreen3.png'), content: 'Nội dung được biên soạn để tập trung học tử vựng'},
        {id:2, source:require('../../assets/images/lockscreen2.png'),content: 'Kho bài tập đa dạng, bộ từ vựng biên soạn theo từng chủ đề '},
        {id:3, source:require('../../assets/images/lockscreen1.png'),content: 'Sử dụng phương pháp "spaced repetition" và AI để giúp bạn ôn luyện hiệu quả'}
    ]
};

const styles = StyleSheet.create({
    steps: {
        height:10,
        borderRadius:10,
        marginHorizontal:8,
    },
    styleButton: {
        alignSelf:'center', 
        marginVertical:20, 
        backgroundColor:'#5059e4',
        width:width/1.2,
        padding:15,
        borderRadius:15
    }
})