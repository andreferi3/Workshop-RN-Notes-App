import React, { Component } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

export default class AuthLoading extends Component {
    async componentDidMount() {
        const token = await AsyncStorage.getItem('TOKEN').then((value) => {
            if(value) {
                return value;
            }
        })

        if(token) {
            this.props.navigation.navigate('DrawerNavigator')
        } else {
            this.props.navigation.navigate('SignIn')
        }
    }

    render() {
        return (
            <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
                <ActivityIndicator size='large' />
            </View>
        )
    }
}
