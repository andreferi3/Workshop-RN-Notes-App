import React, { Component } from "react";
import { FlatList, ActivityIndicator, View, TextInput } from 'react-native';

// Components
import NoteCard from "../components/NoteCard";
import Wrapper from "../components/Wrapper";

// Network & Utilites
import Axios from "axios";

// Styles
import GlobalStyles from '../styles/GlobalStyles';
import EStyleSheet from "react-native-extended-stylesheet";

let url = 'http://157.245.205.61';

export default class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: {},
            isLoading: false
        }
    }

    componentDidMount() {
        this.fetchData()
    }

    render() {
        // console.warn(this.state.data.data)
        return (
            <Wrapper title='Notes App'>
                {this.state.isLoading ? this.renderLoader() : this.renderMainComponent()}
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
                    data={this.state.data.data}
                    numColumns={2}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => (
                        <NoteCard
                            index={index}
                            dateCreated={item.notes_time}
                            noteTitle={item.notes_title}
                            categoryName={item.name_category}
                            noteDescription={item.notes_note} />
                    )}>
                </FlatList>
            </>
        )
    }

    async fetchData() {
        this.setState({ isLoading: true })
        await Axios.get(`${url}/notes`)
            .then(res => {
                this.setState({
                    data: res.data,
                    isLoading: false
                })
            })
            .catch(err => console.warn(err))
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