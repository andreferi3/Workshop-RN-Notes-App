import React from 'react'
import { View, Text, Image } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import GlobalStyles from '../styles/GlobalStyles';

const Header = ({
    title
}) => {
    return (
        <View style={[style.wrapper, GlobalStyles.statusBarHeight, GlobalStyles.flexRowCenter]}>
            <View style={style.headerSide}>
                <Image source={require('../assets/images/Andre.jpeg')} style={style.imageProfile} />
            </View>
            <View style={style.headerBody}>
                <Text style={[GlobalStyles.textCenter, GlobalStyles.size20, GlobalStyles.bolder]}>{title}</Text>
            </View>
            <View style={style.headerSide}>
                <Image source={require('../assets/images/Andre.jpeg')} style={[style.imageProfile, style.noDisplay]} />
            </View>
        </View>
    )
}

const style = EStyleSheet.create({
    wrapper: {
        backgroundColor: 'white',
        paddingVertical: '9.5rem',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    headerSide: {
        paddingLeft: '9.5rem',
        flex: .2
    },
    headerBody: {
        flex: 1
    },
    imageProfile: {
        width: '50rem',
        height: '50rem',
        resizeMode: 'contain',
        borderRadius: '50rem'
    },
    noDisplay: {
        display: 'none'
    }
})

export default Header