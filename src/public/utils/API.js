import Axios from "axios";
import Config from 'react-native-config';

const { BASE_URL } = Config

export default Axios.create({
    baseURL: BASE_URL,
    responseType: 'json'
})