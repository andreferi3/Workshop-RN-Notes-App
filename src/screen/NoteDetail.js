import React, { Component } from 'react'
import { View, TextInput } from 'react-native'
import Wrapper from '../components/Wrapper'
import EStyleSheet from 'react-native-extended-stylesheet'
import { iOS } from '../public/helpers/GlobalHelper'

export default class NoteDetail extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id_notes: this.props.navigation.getParam('id_notes', ''),
            notes_title: this.props.navigation.getParam('notes_title', ''),
            name_category: this.props.navigation.getParam('name_category', ''),
            notes_note: this.props.navigation.getParam('notes_note', ''),
            name_category: this.props.navigation.getParam('name_category', ''),
        }
    }

    render() {
        console.table([this.state])
        return (
            <Wrapper
                goBack
                title='Note Detail'>
                <TextInput
                    placeholder='Add title...'
                    placeholderTextColor='#ccc'
                    style={[style.textInput]} />
                <View style={style.textInputDescription}>
                    <TextInput
                        multiline
                        numberOfLines={10}
                        minHeight={iOS ? (20 * 10) : null}
                        placeholder='Add description...'
                        placeholderTextColor='#ccc'
                        style={[style.textInput]} />
                </View>
            </Wrapper>
        )
    }
}

const style = EStyleSheet.create({
    textInput: {
        fontSize: '20rem',
        color: 'black',
        paddingBottom: '11.5rem',
        marginBottom: '19.5rem',
        borderBottomWidth: .8,
        borderBottomColor: '#ccc',
    },
    textInputDescription: {
        maxHeight: 20 * 15
    }
})
