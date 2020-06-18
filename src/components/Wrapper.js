import React, { Component } from 'react'
import { View } from 'react-native'

// components
import Header from './Header'
import { Content } from 'native-base'
import GlobalStyles from '../styles/GlobalStyles'

const Wrapper = ({
    title,
    isScrolled,
    children
}) => {
    const Wrapper = isScrolled ? Content : View
    return (
        <>
            <Header {...{ title }} />
            <Wrapper
                style={[GlobalStyles.container, GlobalStyles.flexFill]}>
                {children}
            </Wrapper>
        </>
    )
}

export default Wrapper
