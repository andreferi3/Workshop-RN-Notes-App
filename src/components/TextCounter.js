import React, { Component } from 'react'
import { Text, View } from 'react-native'

function TextCounter({
    text,
    textStyle
}) {
    return (
        <Text style={textStyle}>{text}</Text>
    )
}

export default TextCounter
