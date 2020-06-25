import React, { Component } from "react";
import { FlatList, ActivityIndicator, View, TextInput } from 'react-native';

// * redux
import { connect } from "react-redux";
import { getNotes, getNoteById } from "../public/redux/actions/notes";

// * Helper & Utilites
import { getCategoryColor } from '../public/helpers/GlobalHelper';

// * Components
import NoteCard from "../components/NoteCard";
import Wrapper from "../components/Wrapper";

// * Styles
import GlobalStyles from '../public/styles/GlobalStyles';
import EStyleSheet from "react-native-extended-stylesheet";
import NavigationServices from "../routes/NavigationServices";

class Home extends Component {
    constructor(props) {
        super(props)
        this.textInputSearch = ''
    }

    componentDidMount() {
        // this.props.navigation.addListener('willFocus', () => )
        this.fetchData()
    }

    render() {
        return (
            <Wrapper title='Notes App'>
                {this.props.notes.isLoading ? this.renderLoader() : this.renderMainComponent()}
            </Wrapper>
        )
    }

    renderLoader() {
        return (
            <View style={[GlobalStyles.flexFill, GlobalStyles.justifyContentCenter, GlobalStyles.alignCenter]}>
                <ActivityIndicator size='large' color='skyblue' />
            </View>
        )
    }

    renderMainComponent() {
        return (
            <>
                <TextInput
                    style={[style.searchInput, GlobalStyles.mb4]}
                    placeholder='Search Anything'
                    placeholderTextColor='#cccccc'
                    onChangeText={(val) => console.warn(val)} />
                <FlatList
                    data={!this.props.notes.isLoading && this.props.notes.data}
                    numColumns={2}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => (
                        <NoteCard
                            index={index}
                            dateCreated={item.notes_time}
                            noteTitle={item.notes_title}
                            categoryName={item.name_category}
                            noteDescription={item.notes_note}
                            backgroundColor={getCategoryColor(item.category_id)}
                            onPress={() => this.goToNoteDetail(item)} />
                    )}>
                </FlatList>
            </>
        )
    }

    goToNoteDetail(item) {
        NavigationServices.navigate('NoteDetail', {
            category_id: item.category_id,
            id_notes: item.id_notes,
            name_category: item.name_category,
            notes_note: item.notes_note,
            notes_title: item.notes_title,
        })
    }

    async fetchData() {
        this.props.getNotes()
    }
}

const style = EStyleSheet.create({
    searchInput: {
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        paddingHorizontal: '19.5rem',
        paddingVertical: '10.5rem',
        borderRadius: '50rem',
        color: '#1a171c',
        fontSize: '16rem'
    }
})

const mapStateToProps = state => {
    return {
        notes: state.notes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getNotes: () => dispatch(getNotes())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)