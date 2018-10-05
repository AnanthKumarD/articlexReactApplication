import React from 'react';
import Routes from '../Routes.js'
import { createStackNavigator } from 'react-navigation';
import { Constants } from 'expo';


import { 
  Animated,
  Text,
  View ,
  StyleSheet,
  TouchableHighlight ,
  TouchableOpacity,
  ScrollView ,
  Image,
  TextInput
} from 'react-native';
import { 
  Card,
  ListItem,
  Button,
  Header,
  FormLabel,
  FormInput,
  FormValidationMessage,
  Input,
  Overlay
} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class LoginView extends React.Component {
    constructor(props){
        super(props);
        this.state = { isVisible : true };
    }
    render() {
        return (
           <ScrollView>
                <View style = {styles.container}>

                    <Image
                        style={styles.iconPosition}
                        source={require('../../images/articlex_logo.png')}
                    >
                    </Image>

                    <View style={ styles.loginContainer }>
                        <Text 
                            style={ styles.iconHeading }>
                            ARTICLEX
                        </Text>

                        <Text 
                            style={ styles.iconLogin }>
                            Login
                        </Text>

                        <TextInput
                            style={ styles.InputStyleDetails }
                            placeholder="Emai-Id / UserName"
                            onChangeText={(text) => this.setState({text})}
                            underlineColorAndroid="transparent"
                        />

                        <TextInput
                            style={ styles.InputStyleDetails }
                            placeholder="Password!"
                            onChangeText={(text) => this.setState({text})}
                            underlineColorAndroid="transparent"
                        />
                        
                        <Button
                            buttonStyle={{
                                backgroundColor: "rgba(92, 99,216, 1)",
                                width: 300,
                                height: 45,
                                borderColor: "transparent",
                                borderWidth: 0,
                                borderRadius: 25,
                                marginLeft:"auto",marginRight:"auto",marginTop:50
                            }}
                            Icon={{
                                name: 'arrow-right',
                                size: 15,
                                color: 'white'
                            }}
                            title='Submit'
                            onPress={() => this.props.navigation.navigate('Home')}
                        />

                        

                        <Button
                          title="Have no account yet? SignUp"
                          titleStyle={{ fontWeight: "700" }}
                          buttonStyle={{
                            width: 300,
                            height: 45,
                            borderColor: "transparent",
                            borderWidth: 0,
                            borderRadius: 5,
                            marginLeft:"auto",marginRight:"auto"
                          }}
                          containerStyle={{ marginTop: 20 }}
                        />
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#f8f8f8',  
        marginTop : 15,
        width: "auto",
        paddingTop: Constants.statusBarHeight,
    },
    iconPosition :{
        flex: 3,
        alignSelf: 'stretch',
        width: 150,
        height: 150,
        position:'relative',
        marginTop:70,
        marginLeft:"auto",
        marginRight:"auto",
        zIndex: 1,
        borderRadius:75
    },
    loginContainer:{
        position:'relative',
        backgroundColor:'#ffffff',
        borderWidth:2,
        height:450,
        marginLeft:10,
        marginRight:10,
        marginBottom:20,
        top:-50,
        zIndex: 0
    },
    iconHeading :{
        position:'relative',
        textAlign: 'center', 
        fontSize:35,
        top:50
    },
    iconLogin: {
        marginTop:80,
        textAlign: 'center', 
        fontSize:25,
        width: "auto",
        color:"black"
    },
    InputStyleDetails:{
        width: 350,height:50, borderWidth: 2,borderColor: 'black',marginLeft:"auto",marginRight:"auto",marginTop:0,borderRadius: 25,textAlign: 'center' ,fontSize: 20,fontWeight: "bold"
    }
});
