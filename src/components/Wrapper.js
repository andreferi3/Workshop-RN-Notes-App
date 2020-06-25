import React, { Component } from 'react';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';

// components
import Header from './Header';
import { Content, Container } from 'native-base';
import GlobalStyles from '../public/styles/GlobalStyles';

const Wrapper = ({
    isScrolled,
    children,
    rightIconPress,
    title,
    goBack
}) => {
    const Wrapper = isScrolled ? Content : View
    return (
        <Container>
            <Header {...{ title, goBack, rightIconPress }} />
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <Wrapper
                    style={[GlobalStyles.container, GlobalStyles.flexFill]}>
                    {children}
                </Wrapper>
            </TouchableWithoutFeedback>
        </Container>
    )
}

export default Wrapper
