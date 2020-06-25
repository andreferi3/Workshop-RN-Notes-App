import API from '../../utils/API';
import Config from 'react-native-config';

const { GET_CATEGORIES, GET_CATEGORY_BY_ID, POST_CATEGORY, UPDATE_CATEGORY, DELETE_CATEGORY } = Config

/**
 * @variation GET
 */
export const getCategories = () => {
    return {
        type: 'GET_CATEGORIES',
        payload: API.get(GET_CATEGORIES)
    }
}

/**
 * !Caution don't forget to add id
 * @variation GET
 * @param { number } id 
 */
export const getSingleCategory = (id) => {
    return {
        type: 'GET_SINGLE_CATEGORY',
        payload: API.get(`${GET_CATEGORY_BY_ID}${id}`)
    }
}

/**
 * !Important, fill data with object @param
 * @variation POST
 * @param { name, image } data 
 */
export const postCategory = (data) => {
    return {
        type: 'POST_CATEGORY',
        payload: API.post(`${POST_CATEGORY}`, data)
    }
}

/**
 * !Caution don't forget to add id
 * @variation PATCH/UPDATE
 * @param {name} data 
 * @param {number} id 
 */
export const updateSingleCategory = (data, id) => {
    return {
        type: 'UPDATE_CATEGORY',
        payload: API.patch(`${UPDATE_CATEGORY}${id}`, data)
    }
}

/**
 * !Caution don't forget to add id
 * @variation DELETE
 * @param {number} id 
 */
export const deleteSingleCategory = (id) => {
    return {
        type: 'DELETE_SINGLE_CATEGORY',
        payload: API.delete(`${DELETE_CATEGORY}${id}`)
    }
} 