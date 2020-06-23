const initialState = {
    data: [],
    isError: true,
    isLoading: true,
    errorStatus: 404,
    errorMessage: ''
}

export default notes = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_NOTES_PENDING':
            return {
                ...state,
                isError: false
            }
        case 'GET_NOTES_REJECTED':
            return {
                ...state,
                isLoading: false,
                errorStatus: action.payload.response.status,
                errorMessage: action.payload.message
            }
        case 'GET_NOTES_FULFILLED':
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