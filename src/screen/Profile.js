import React, { Component } from "react";
import { Text, StyleSheet, Image, Dimensions, View, TouchableOpacity } from 'react-native';
import Wrapper from "../components/Wrapper";

export default class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            time: 0,
            data: new Array(20).fill('')
        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <Wrapper>
                <Image source={require('../assets/images/Andre.jpeg')} style={style.imageProfile} />
                <View style={style.row}>
                    <Text style={style.headerText}>Hello! Andre</Text>
                    <TouchableOpacity onPress={this.goToSetting}>
                        <Text>Go to setting -></Text>
                    </TouchableOpacity>
                </View>
            </Wrapper>
        )
    }

    goToSetting = () => {
        this.props.navigation.navigate('Setting', {
            idProfile: '012435464'
        })
    }

    renderListItem() {
        return this.state.data.map(((item, index) => (
            <Text style={style.listItem}>Item No. {index}</Text>
        )))
    }
}

const style = StyleSheet.create({
    headerText: {
        fontSize: 24,
        marginTop: 10
    },
    listItem: {
        paddingVertical: 15
    },
    imageProfile: {
        height: 100,
        width: 100,
        borderRadius: 50,
        resizeMode: 'contain'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})
