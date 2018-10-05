import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Button, ListView ,ScrollView, Dimensions} from 'react-native';
import { Card, ListItem, Button1, Header, FormLabel, FormInput, FormValidationMessage, Input, Overlay, Avatar, Divider } from 'react-native-elements'; 
// 0.19.1
import { Constants } from 'expo';
import CarouselCard from 'react-native-card-carousel'; // 1.1.0

import Icon from 'react-native-vector-icons/FontAwesome'; // 5.0.0
import "@expo/vector-icons"; // 6.3.1

import { TabView, TabBar, SceneMap } from 'react-native-tab-view'; // 1.0.2
import { AreaChart, Grid, PieChart } from 'react-native-svg-charts'

import * as shape from 'd3-shape'

const FirstRoute = () => (
  <ScrollView style={styles.container}>
        <View style={styles.cardElement}>
            <Avatar
        size="large"
        rounded
        source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
        onPress={() => console.log("Works!")}
        activeOpacity={0.7}
        containerStyle={{marginTop:20,position:"relative",left:15,borderRadius:150}}
      />
            <View style={{flex:1,position:"relative",left:70,top:-40,flexDirection: 'row'}}>
              <Text style={{fontSize:20, flexWrap: 'wrap'}}>Serena Gomez</Text>
            </View>
            <View style={{flex:1,position:"relative",left:70,top:-50,flexDirection: 'row'}}>
              <Text style={{fontSize:15, flexWrap: 'wrap'}}>2 hrs ago</Text>
            </View>
            <View style={{position:"relative",left:10,top:-50,flexDirection:'row'}}>
              <Text style={{fontSize:20, flexWrap: 'wrap'}}>Why product thinking is next big thing in UX design</Text>
            </View>
            <View style={{flex:1,position:"relative",left:10,top:-40,flexDirection: 'row'}}>
              <Icon name="lock" size={30} color="#900" />
              <Text style={{fontSize:15,left:5,top:5}}>5202 shares on social media</Text>
            </View>
            <Divider style={{ backgroundColor: 'blue' ,top:-30,marginLeft:10,marginRight:10}} />
            <View style={{flex:1,flexDirection: 'row',top:-40,padding:10}}>
                <View>
                  <Avatar
                    size="large"
                    rounded
                    source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
                    onPress={() => console.log("Works!")}
                    activeOpacity={0.7}
                    containerStyle={{marginTop:20,position:"relative",left:15,borderRadius:150}}
                  />
                </View>
                <View>
                  <Avatar
                    size="large"
                    rounded
                    source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
                    onPress={() => console.log("Works!")}
                    activeOpacity={0.7}
                    containerStyle={{marginTop:20,position:"relative",left:15,borderRadius:150}}
                  />
                </View>
                <View>
                  <Avatar
                    size="large"
                    rounded
                    source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
                    onPress={() => console.log("Works!")}
                    activeOpacity={0.7}
                    containerStyle={{marginTop:20,position:"relative",left:15,borderRadius:150}}
                  />
                </View>
              </View> 
        </View>
        <View style={styles.cardElement}>
            <Avatar
              size="large"
              rounded
              source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
              onPress={() => console.log("Works!")}
              activeOpacity={0.7}
              containerStyle={{marginTop:20,position:"relative",borderRadius:150}}
            />
            <View style={{flex:1,position:"relative",left:70,top:-40,flexDirection: 'row'}}>
              <Text style={{fontSize:20, flexWrap: 'wrap'}}>Serena Gomez</Text>
            </View>
            <View style={{flex:1,position:"relative",left:70,top:-50,flexDirection: 'row'}}>
              <Text style={{fontSize:15, flexWrap: 'wrap'}}>2 hrs ago</Text>
            </View>
            <View style={{position:"relative",left:10,top:-50,flexDirection:'row'}}>
              <Text style={{fontSize:20, flexWrap: 'wrap'}}>Why product thinking is next big thing in UX design</Text>
            </View>
            <View style={{flex:1,position:"relative",left:10,top:-40,flexDirection: 'row'}}>
              <Icon name="lock" size={30} color="#900" />
              <Text style={{fontSize:15,left:5,top:5}}>5202 shares on social media</Text>
            </View>
            <Divider style={{ backgroundColor: 'blue' ,top:-30,marginLeft:10,marginRight:10}} />
            <View style={{flex:1,flexDirection: 'row',top:-40,padding:10}}>
                <View>
                  <Avatar
                    size="large"
                    rounded
                    source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
                    onPress={() => console.log("Works!")}
                    activeOpacity={0.7}
                    containerStyle={{marginTop:20,position:"relative",left:15,borderRadius:150}}
                  />
                </View>
                <View>
                  <Avatar
                    size="large"
                    rounded
                    source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
                    onPress={() => console.log("Works!")}
                    activeOpacity={0.7}
                    containerStyle={{marginTop:20,position:"relative",left:15,borderRadius:150}}
                  />
                </View>
              </View> 
        </View>
        <View style={styles.cardElement}>
          <Avatar
              size="large"
              rounded
              source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
              onPress={() => console.log("Works!")}
              activeOpacity={0.7}
              containerStyle={{marginTop:20,position:"relative",left:15,borderRadius:150}}
            />
            <View style={{flex:1,position:"relative",left:70,top:-40,flexDirection: 'row'}}>
              <Text style={{fontSize:20, flexWrap: 'wrap'}}>Serena Gomez</Text>
            </View>
            <View style={{flex:1,position:"relative",left:70,top:-50,flexDirection: 'row'}}>
              <Text style={{fontSize:15, flexWrap: 'wrap'}}>2 hrs ago</Text>
            </View>
            <View style={{position:"relative",left:10,top:-50,flexDirection:'row'}}>
              <Text style={{fontSize:20, flexWrap: 'wrap'}}>Why product thinking is next big thing in UX design</Text>
            </View>
            <View style={{flex:1,position:"relative",left:10,top:-40,flexDirection: 'row'}}>
              <Icon name="lock" size={30} color="#900" />
              <Text style={{fontSize:15,left:5,top:5}}>5202 shares on social media</Text>
            </View>
            <Divider style={{ backgroundColor: 'blue' ,top:-30,marginLeft:10,marginRight:10}} />
            <View style={{flex:1,flexDirection: 'row',top:-40,margin:10,padding:10}}>
                <View>
                  <Avatar
                    size="large"
                    rounded
                    source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
                    onPress={() => console.log("Works!")}
                    activeOpacity={0.7}
                    containerStyle={{marginTop:20,position:"relative",left:15,borderRadius:150}}
                  />
                </View>
              </View> 
        </View>
      </ScrollView>
);
const SecondRoute = () => (
  <View style={styles.cardElement}>
          <Avatar
              size="large"
              rounded
              source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
              onPress={() => console.log("Works!")}
              activeOpacity={0.7}
              containerStyle={{marginTop:20,position:"relative",left:15,borderRadius:150}}
              imageProps={{height:50,width:50}}
            />
            <View style={{flex:1,position:"relative",left:70,top:-40,flexDirection: 'row'}}>
              <Text style={{fontSize:20, flexWrap: 'wrap'}}>Serena Gomez</Text>
            </View>
            <View style={{flex:1,position:"relative",left:70,top:-50,flexDirection: 'row'}}>
              <Text style={{fontSize:15, flexWrap: 'wrap'}}>2 hrs ago</Text>
            </View>
            <View style={{position:"relative",left:10,top:-50,flexDirection:'row'}}>
              <Text style={{fontSize:20, flexWrap: 'wrap'}}>Why product thinking is next big thing in UX design</Text>
            </View>
            <View style={{flex:1,position:"relative",left:10,top:-40,flexDirection: 'row'}}>
              <Icon name="lock" size={30} color="#900" />
              <Text style={{fontSize:15,left:5,top:5}}>5202 shares on social media</Text>
            </View>
            <Divider style={{ backgroundColor: 'blue' ,top:-30,marginLeft:10,marginRight:10}} />
            <View style={{flex:1,flexDirection: 'row',top:-40}}>
                <Avatar
                  size="large"
                  rounded
                  source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
                  onPress={() => console.log("Works!")}
                  activeOpacity={0.7}
                  containerStyle={{marginTop:20,position:"relative",left:15,borderRadius:150}}
                  imageProps={{height:30,width:30}}
                />
                <Avatar
                  size="large"
                  rounded
                  source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
                  onPress={() => console.log("Works!")}
                  activeOpacity={0.7}
                  containerStyle={{marginTop:20,position:"relative",left:25,borderRadius:150}}
                  imageProps={{height:30,width:30}}
                />
                <Avatar
                  size="large"
                  rounded
                  source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
                  onPress={() => console.log("Works!")}
                  activeOpacity={0.7}
                  containerStyle={{marginTop:20,position:"relative",borderRadius:150}}
                  imageProps={{height:30,width:30}}
                />
              </View> 
        </View>
);
const data = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ]


const data1 = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ]
 
const randomColor = () => ('#' + (Math.random() * 0xFFFFFF << 0).toString(16) + '000000').slice(0, 7)

const pieData = data1
  .filter(value => value > 0)
  .map((value, index) => ({
      value,
      svg: {
          fill: randomColor(),
          onPress: () => console.log('press', index),
      },
      key: `pie-${index}`,
  }))

const thirdRoute = () => (
  
  <ScrollView>
    <View style={{flex:1}}>
      <AreaChart
          style={{ height: 200 }}
          data={ data }
          contentInset={{ top: 30, bottom: 30 }}
          curve={ shape.curveNatural }
          svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
      >
        <Grid/>
      </AreaChart>
    </View>
    
    <View style={{flex:1}}>
      <AreaChart
          style={{ height: 200 }}
          data={ data }
          contentInset={{ top: 30, bottom: 30 }}
          curve={ shape.curveNatural }
          svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
        >
          <Grid/>
      </AreaChart>
    </View>
  </ScrollView>
);
export default class TabViewExample extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Popular' },
      { key: 'second', title: 'Recent' },
      { key: 'third', title: 'Followers' }
    ],
  };

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={SceneMap({
          first: FirstRoute,
          second: SecondRoute,
          third: thirdRoute
        })}
        tabStyle={{width:"auto"}}
        labelStyle={{position:'relative',bottom:10}}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ height: 0,width: Dimensions.get('window').width }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#eee',
    width:"auto",
  },
  cardElement:{
    width:"auto",
    height: 250,
    backgroundColor:"#ffffff",
    borderWidth:2,
    borderRadius:10,
    marginRight:5,
    marginLeft:5,
    margin:10
  }
});