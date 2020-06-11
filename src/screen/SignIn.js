import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet, AsyncStorage } from 'react-native'
import Wrapper from '../components/Wrapper'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default class SignIn extends Component {
    render() {
        return (
            <Wrapper>
                <Text>Email : </Text>
                <TextInput 
                    placeholder='Email' 
                    placeholderTextColor='black'
                    style={style.textInput} />
                <View style={{marginVertical: 15}} />
                <Text>Password : </Text>
                <TextInput 
                    placeholder='Password' 
                    placeholderTextColor='black'
                    style={style.textInput} />
                <TouchableOpacity style={style.buttonContainer} onPress={this.onLogin}>
                    <Text style={style.buttonText}>Login</Text>
                </TouchableOpacity>
            </Wrapper>
        )
    }

    onLogin = async () => {
        await AsyncStorage.setItem('TOKEN', '123352gdsd3');
        this.props.navigation.navigate('User');
    }
}

const style = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        paddingVertical: 10,
        paddingLeft: 10,
        borderColor: '#ff5757',
        marginTop: 10
    },
    buttonContainer: {
        backgroundColor: 'skyblue',
        marginTop: 20,
        paddingVertical: 15,
        borderRadius: 10
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 18
    }
})
