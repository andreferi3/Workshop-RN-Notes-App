import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

// Styles
import EStyleSheet from 'react-native-extended-stylesheet';
import GlobalStyles from '../public/styles/GlobalStyles';

// Utilites
import moment from 'moment';

const NoteCard = ({
    index,
    dateCreated,
    noteDescription,
    categoryName,
    noteTitle,
    backgroundColor,
    onPress
}) => {
    return (
        <>
            <TouchableOpacity 
                onPress={onPress}
                style={[
                    {backgroundColor: backgroundColor},
                    style.noteWrapper, 
                    GlobalStyles.mb2]}>
                <Text style={[style.noteDateCreated, GlobalStyles.mb2]}>{moment(dateCreated).format('D MMMM')}</Text>
                <Text numberOfLines={1} style={style.noteTitle}>{noteTitle}</Text>
                <Text style={style.noteCategory}>{categoryName}</Text>
                <Text numberOfLines={3} style={[style.noteDescription, GlobalStyles.mt2]}>{noteDescription}</Text>
            </TouchableOpacity>
            {(index % 2 === 0) ? <View style={[GlobalStyles.mh2]} /> : null}
        </>
    )
}

const style = EStyleSheet.create({
    noteWrapper: {
        padding: '11.5rem',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        flex: 1,
        height: '180rem',
        borderRadius: '15rem'
    },
    noteDateCreated: {
        textAlign: 'right',
        color: 'white',
        fontWeight: '600',
    },
    noteTitle: {
        fontSize: '20rem',
        fontWeight: '600',
        color: 'white'
    },
    noteCategory: {
        color: 'white'
    },
    noteDescription: {
        color: 'white'
    }
})

export default NoteCard