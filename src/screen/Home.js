import React, { Component } from "react";
import { FlatList, ActivityIndicator, View, TextInput } from 'react-native';

// Components
import NoteCard from "../components/NoteCard";
import Wrapper from "../components/Wrapper";

// Network & Utilites
import Axios from "axios";
import { getCategoryColor } from '../public/helpers/GlobalHelper';
import Config from 'react-native-config';

// * Actions
import { getNotes } from '../public/redux/actions/notes';

// Styles
import GlobalStyles from '../public/styles/GlobalStyles';
import EStyleSheet from "react-native-extended-stylesheet";
import { connect } from "react-redux";
import API from "../public/utils/API";

const { BASE_URL, GET_NOTES } = Config

class Home extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
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
                    data={this.props.notes.data}
                    numColumns={2}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => (
                        <NoteCard
                            index={index}
                            dateCreated={item.notes_time}
                            noteTitle={item.notes_title}
                            categoryName={item.name_category}
                            noteDescription={item.notes_note}
                            backgroundColor={getCategoryColor(item.category_id)} />
                    )}>
                </FlatList>
            </>
        )
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