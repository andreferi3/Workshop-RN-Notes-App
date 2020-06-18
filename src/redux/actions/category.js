import axios from 'axios';

const url = '';

export const getNotes = () => {
    return {
        type: 'GET_NOTES',
        payload: axios.get(url)
    }
}