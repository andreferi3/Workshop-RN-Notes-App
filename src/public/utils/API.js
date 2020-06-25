import Axios from "axios";
<<<<<<< HEAD
import Config from 'react-native-config';

const { BASE_URL } = Config

export default Axios.create({
    baseURL: BASE_URL,
=======
import Config from "react-native-config";

export default Axios.create({
    baseURL: Config.BASE_URL,
>>>>>>> 53751367976fc2df72c40dc47de9407f62e0d9d3
    responseType: 'json'
})