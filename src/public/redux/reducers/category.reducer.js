const initialState = {
    isError: false,
    isLoading: false,
    data: []
}

export default category = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_CATEGORIES_PENDING':
            return {
                ...state,
                isLoading: true
            }

        case 'GET_CATEGORIES_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case 'GET_CATEGORIES_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload.data
            }
        default:
            return {
                ...state
            }
    }
}