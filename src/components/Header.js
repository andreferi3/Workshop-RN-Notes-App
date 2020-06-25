import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native';

import NavigationService from '../routes/NavigationServices';

// Styles and Assets
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import EStyleSheet from 'react-native-extended-stylesheet';
import GlobalStyles from '../public/styles/GlobalStyles';
import NavigationServices from '../routes/NavigationServices';

const Header = ({
    goBack,
    title,
    rightIconPress
}) => {
    const onLeftIconPress = () => {
        if (goBack) return NavigationService.back();
        else return NavigationServices.toggleDrawer();
    }
    return (
        <View style={[style.wrapper, GlobalStyles.statusBarHeight, GlobalStyles.flexRowCenter]}>
            <TouchableOpacity
                style={style.headerSide}
                onPress={onLeftIconPress}>
                <HeaderLeftComponent {...{ goBack }} />
            </TouchableOpacity>
            <View style={style.headerBody}>
                <Text style={[GlobalStyles.textCenter, GlobalStyles.size20, GlobalStyles.fw700]}>{title}</Text>
            </View>
            <TouchableOpacity
                style={style.headerSide}
                onPress={rightIconPress}>
                <HeaderRightComponent {...{ goBack }} />
            </TouchableOpacity>
        </View>
    )
}

const HeaderLeftComponent = ({ goBack }) => {
    if (goBack) {
        return (
            <Feather name='chevron-left' style={style.iconLeft} />
        )
    } else {
        return (
            <Image source={require('../assets/images/Andre.jpeg')} style={style.imageProfile} />
        )
    }
}

const HeaderRightComponent = ({ goBack }) => {
    if (goBack) {
        return (
            <Feather name='check-circle' style={[style.iconRight, style.iconChecklist]} />
        )
    } else {
        return (
            <FontAwesome name='sort-amount-desc' style={style.iconRight} />
        )
    }
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
        elevation: 5,
        position: 'relative'
    },
    headerSide: {
        position: 'relative',
        paddingLeft: '9.5rem',
        flex: .2
    },
    headerBody: {
        flex: 1
    },
    imageProfile: {
        width: '45rem',
        height: '45rem',
        resizeMode: 'contain',
        borderRadius: '50rem'
    },
    noDisplay: {
        display: 'none'
    },
    iconLeft: {
        fontSize: '28rem',
        textAlign: 'left'
    },
    iconRight: {
        fontSize: '26rem',
        textAlign: 'center'
    },
    dropdownContainer: {
        position: 'absolute',
        width: '100%',
        bottom: -30,
        zIndex: 99,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    iconChecklist: {
        color: '#33c652'
    }
})

export default Header