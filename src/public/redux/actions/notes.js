// * Utilites
import API from '../../utils/API';
import Config from 'react-native-config';

// * Variable
import { GET_NOTES_CONSTANT, GET_SINGLE_NOTE_CONSTANT, POST_NOTES_CONSTANT, UPDATE_NOTE_CONSTANT, DELETE_SINGLE_NOTE_CONSTANT } from '../../constants/GlobalConstant';
const { GET_NOTES, GET_NOTE_BY_ID, POST_NOTES, UPDATE_NOTE, DELETE_NOTE } = Config


/**
 * @variation GET
 */
export const getNotes = () => {
    return {
        type: GET_NOTES_CONSTANT,
        payload: API.get(GET_NOTES)
    }
}

/**
 * !Caution don't forget to add id
 * @variation GET
 * @param { number } id 
 */
export const getNoteById = (id) => {
    return {
        type: GET_SINGLE_NOTE_CONSTANT,
        payload: API.get(`${GET_NOTE_BY_ID}${id}`)
    }
}

/**
 * @variation POST
 * @param { title, note, category_id } data
 */
export const postNotes = (data) => {
    return {
        type: POST_NOTES_CONSTANT,
        payload: API.post(POST_NOTES, data)
    }
}

/**
 * !Caution Don't forget to add id
 * @variation PATCH/UPDATE
 * @param { title, note, category_id } data
 */
export const updateNote = (data, id) => {
    return {
        type: UPDATE_NOTE_CONSTANT,
        payload: API.patch(`${UPDATE_NOTE}${id}`, data)
    }
}

/**
 * !Caution Don't forget to add id
 * @variation DELETE
 * @param { number } id
 */
export const deleteSingleNote = (id) => {
    return {
        type: DELETE_SINGLE_NOTE_CONSTANT,
        payload: API.delete(`${DELETE_NOTE}${id}`)
    }
}