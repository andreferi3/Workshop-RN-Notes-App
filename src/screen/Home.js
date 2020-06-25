import React, { Component } from "react";
import { FlatList, ActivityIndicator, View, TextInput, Text, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

// Components
import NoteCard from "../components/NoteCard";
import Wrapper from "../components/Wrapper";

// Network & Utilites
import { getCategoryColor } from '../public/helpers/GlobalHelper';

// * Actions
import { getNotes } from '../public/redux/actions/notes';

// Styles
import GlobalStyles from '../public/styles/GlobalStyles';
import EStyleSheet from "react-native-extended-stylesheet";
import { connect } from "react-redux";


class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showDropdown: false
        }
    }

    componentDidMount() {
        this.fetchData()
    }

    render() {
        console.table(this.props.notes.data)
        return (
            <Wrapper
                title='Notes App'
                rightIconPress={this.setShowDropdown}>
                {this.props.notes.isLoading ? this.renderLoader() : this.renderMainComponent()}
                {this.renderDropdown()}
            </Wrapper>
        )
    }

    renderDropdown() {
        const { showDropdown } = this.state
        if (showDropdown) {
            return (
                <TouchableOpacity onPress={this.setShowDropdown} style={style.dropdownWrapper}>
                    <View style={style.dropdownContent}>
                        <TouchableOpacity style={[style.dropdownItem]}>
                            <Text style={[GlobalStyles.fw500]}>Newest to Oldest</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.dropdownItem}>
                            <Text style={[GlobalStyles.fw500]}>Oldest to Newest</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            )
        } else return null
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
                            backgroundColor={getCategoryColor(item.category_id)}
                            categoryName={item.name_category}
                            dateCreated={item.notes_time}
                            noteDescription={item.notes_note}
                            noteTitle={item.notes_title}
                            onCardPress={() => this.goToNoteDetail(item)} />
                    )}>
                </FlatList>
            </>
        )
    }

    setShowDropdown = () => {
        this.setState({ showDropdown: !this.state.showDropdown })
    }

    goToNoteDetail(item) {
        this.props.navigation.navigate('NoteDetail', {
            id_notes: item.id_notes,
            notes_title: item.notes_title,
            name_category: item.name_category,
            notes_note: item.notes_note,
            name_category: item.name_category
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
        position: 'relative',
        paddingHorizontal: '19.5rem',
        paddingVertical: '10.5rem',
        borderRadius: '50rem',
        color: '#1a171c',
        fontSize: '16rem'
    },
    dropdownWrapper: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.3)'
    },
    dropdownContent: {
        position: 'absolute',
        top: 0,
        right: '9.5rem',
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
    dropdownItem: {
        paddingHorizontal: '19.5rem',
        paddingVertical: '12rem'
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