import React, { Component } from 'react'
import { View, SafeAreaView, StyleSheet } from 'react-native'

export default class Wrapper extends Component {
    render() {
        return (
            <View style={style.container}>
                {this.props.children}
            </View>
        )
    }
}

const style = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1
    }
})
