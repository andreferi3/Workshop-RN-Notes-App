import React, { Component, Fragment } from 'react'
import { Text, View, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import { getCategories } from '../public/redux/actions/category';
import { connect } from 'react-redux';

// * Components
import Wrapper from '../components/Wrapper'
import Modal from 'react-native-modal';

// * Helper & Utilites
import { iOS } from '../public/helpers/GlobalHelper'

// * Styles
import AntDesign from 'react-native-vector-icons/AntDesign';
import EStyleSheet from 'react-native-extended-stylesheet';
import GlobalStyles from '../public/styles/GlobalStyles';
import { updateNote } from '../public/redux/actions/notes';
import NavigationServices from '../routes/NavigationServices';

class NoteDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id_notes: this.props.navigation.getParam('id_notes', null),
            notes_note: this.props.navigation.getParam('notes_note', 'Lorem ipsum'),
            notes_title: this.props.navigation.getParam('notes_title', 'Title'),
            categorySelected: {
                id: this.props.navigation.getParam('category_id', null),
                name: this.props.navigation.getParam('name_category', 'Set Category')
            },
            pickerVisible: false,
            modalLoading: false
        }
    }

    componentDidMount() {
        this.fetchAllCategories()
    }

    render() {
        const { id_notes, notes_note, notes_title, pickerVisible, modalLoading } = this.state
        return (
            <Wrapper
                goBack
                title='Note Detail'
                rightIconPress={() => this.addOrUpdateNotes(this.state)}>
                <TextInput
                    value={id_notes ? notes_title : undefined}
                    onChangeText={this.handleChangeText('notes_title')}
                    placeholder='Add Title...'
                    placeholderTextColor='#ccc'
                    style={style.textInput} />
                <View style={style.textInputDescription}>
                    <TextInput
                        multiline
                        minHeight={iOS ? 20 * 10 : null}
                        numberOfLines={10}
                        value={id_notes ? notes_note : undefined}
                        onChangeText={this.handleChangeText('notes_note')}
                        placeholder='Add Description...'
                        placeholderTextColor='#ccc'
                        style={style.textInput} />
                </View>
                <View style={GlobalStyles.flexFill}>
                    <Text style={[GlobalStyles.fontLarge, GlobalStyles.fw600, GlobalStyles.mt2]}>Category</Text>
                    {this.renderCategoryPicker()}
                </View>

                <View>
                    <Modal
                        isVisible={pickerVisible}>
                        <View style={style.modalPickerCategory}>
                            {
                                !this.props.notes.isLoading &&
                                this.props.category.data.map((item, index) => (
                                    <Fragment key={index}>
                                        {index > 0 && (
                                            <View style={style.divider} />
                                        )}
                                        <TouchableOpacity
                                            onPress={() => this.setCategory(item)}
                                            style={style.pickerItem}>
                                            <Text>{item.name}</Text>
                                        </TouchableOpacity>
                                    </Fragment>
                                ))
                            }
                        </View>
                    </Modal>
                </View>

                <View>
                    <Modal
                        isVisible={modalLoading}>
                        {this.renderModalAddOrUpdateContent()}
                    </Modal>
                </View>
            </Wrapper>
        )
    }

    renderModalAddOrUpdateContent() {
        if (this.props.notes.isLoading) {
            return (
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <ActivityIndicator size='large' style={{ backgroundColor: 'white', padding: 20, borderRadius: 20 }} />
                </View>
            )
        }

        if (this.props.notes.isSuccess) {
            return (
                <View style={{backgroundColor: 'white'}}>
                    <Text style={[GlobalStyles.fontLarge]}>Success</Text>

                    <TouchableOpacity onPress={() => NavigationServices.back()}>
                        <Text>Go Back</Text>
                    </TouchableOpacity>
                </View>
            )
        }
    }

    renderCategoryPicker() {
        const { categorySelected } = this.state
        if (this.props.category.isLoading) {
            return (
                <ActivityIndicator size='small' style={[GlobalStyles.mt3, { alignSelf: 'flex-start' }]} />
            )
        } else {
            return (
                <View style={[GlobalStyles.flexRowCenter]}>
                    <TouchableOpacity
                        onPress={this.setShowPickerVisible}
                        style={[style.selectCategory, GlobalStyles.flexRowCenter]}>
                        <Text style={[GlobalStyles.mr4, GlobalStyles.fontMedium]}>{categorySelected.name}</Text>
                        <AntDesign name='caretdown' />
                    </TouchableOpacity>
                </View>
            )
        }
    }

    async addOrUpdateNotes(state) {
        this.setState({ modalLoading: true })
        const { notes_title, notes_note, categorySelected, id_notes } = state
        const data = {
            title: notes_title,
            note: notes_note,
            category_id: categorySelected.id
        }
        await this.props.updateNote(data, id_notes)
    }

    setCategory(item) {
        this.setState({
            categorySelected: { id: item.id, name: item.name },
            pickerVisible: false
        })
    }

    fetchAllCategories() {
        this.props.getCategories()
    }

    handleChangeText = key => val => {
        console.warn(`Key : ${key} \n Value : ${val}`)
        this.setState({
            [key]: val
        })
    }

    setShowPickerVisible = () => {
        this.setState({ pickerVisible: !this.state.pickerVisible })
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
    },
    selectCategory: {
        flex: .5,
        borderBottomWidth: .3,
        paddingBottom: '7rem',
        backgroundColor: 'white',
        marginTop: '19.5rem',
        justifyContent: 'space-between'
    },
    modalPickerCategory: {
        backgroundColor: 'white'
    },
    pickerItem: {
        paddingLeft: '9.5rem',
        paddingVertical: '11.5rem'
    },
    divider: {
        borderTopColor: '#ccc',
        borderTopWidth: .3
    }
})

const mapStateToProps = state => {
    return {
        category: state.category,
        notes: state.notes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getCategories: () => dispatch(getCategories()),
        updateNote: (data, id) => dispatch(updateNote(data, id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteDetail)
