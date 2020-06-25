const initialState = {
    isError: false,
    isLoading: false,
    isSuccess: false,
    data: []
}

export default notes = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_NOTES_PENDING':
            return {
                ...state,
                isLoading: true
            }

        case 'GET_NOTES_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case 'GET_NOTES_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload.data.data
            }
        case 'GET_SINGLE_NOTE_PENDING':
            return {
                ...state,
                isLoading: true
            }

        case 'GET_SINGLE_NOTE_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case 'GET_SINGLE_NOTE_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload.data
            }

        /**
         * @variation UPDATE/PATCH
         */
        case 'UPDATE_NOTE_PENDING':
            return {
                ...state,
                isLoading: true
            }

        case 'UPDATE_NOTE_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case 'UPDATE_NOTE_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isError: false,
                isSuccess: true,
                data: state.data.map(data =>
                    (data.id_notes === action.payload.data.result.id_notes) ? action.payload.data.result : data)
            }
        default:
            return {
                ...state
            }
    }
}