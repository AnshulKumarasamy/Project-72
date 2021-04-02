import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import ReadingStoryScreen from './screen/ReadingStoryScreen';
import WritingStoryScreen from './screen/WritingStoryScreen';

export default class App extends React.Component{
  render(){
    return (
      <AppContainer />
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  ReadingStoryScreen: {screen: ReadingStoryScreen},
  WritingStoryScreen: {screen: WritingStoryScreen},
},
{
  defaultNavigationOptions:({navigation})=> ({
    tabBarIcon:()=>{
      const routeName = navigation.state.routeName;

      if(routeName === "WritingStoryScreen"){
        return(
          <Image 
          source={require("./assets/write.png")}
          style={{width:40, height:40}}
          />
        )
      } 
      else if(routeName === "ReadingStoryScreen"){
        return(
          <Image 
          source={require("./assets/read.png")}
          style={{width:40, height:40}}
          />
        )
      } 
    }
  })
});

const AppContainer =  createAppContainer(TabNavigator);