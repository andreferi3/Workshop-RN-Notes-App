// * Variable
import { GET_CATEGORIES_CONSTANT, GET_SINGLE_CATEGORY_CONSTANT, POST_CATEGORY_CONSTANT, UPDATE_CATEGORY_CONSTANT, DELETE_SINGLE_CATEGORY_CONSTANT } from '../../constants/GlobalConstant';

const initialState = {
    data: [],
    isError: true,
    isLoading: true
}

export default category = (state = initialState, action) => {
    switch(action.type) {
        case GET_CATEGORIES_CONSTANT:
            return {
                ...state,
                isError: false,
                isLoading: false,
                data: action.payload.data.data
            }
        default:
            return state;
    }
}