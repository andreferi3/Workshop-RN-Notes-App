import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class Settings extends Component {
    constructor(props) {
        super(props)

        this.state = {
            idProfile: this.props.navigation.getParam('idProfile')
        }
    }
    
    componentDidMount() {
        console.warn(this.state.idProfile);
    }
    
    render() {
        return (
            <View>
                <Text> textInComponent </Text>
            </View>
        )
    }

    componentWillUnmount() {
        console.warn('Leave setting screen')
    }
    
}
