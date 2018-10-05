import React from 'react'
// import { Router, Scene } from 'react-native-router-flux'
import LoginView from './components/LoginView.js'
import HomeView from './components/Home.js'


import { createStackNavigator  } from 'react-navigation';


const Routes = createStackNavigator(
  	{
	    Login :  LoginView,
	    Home :  HomeView
  	},
  	{
    	initialRouteName: 'Login'
  	}
);

export default Routes
