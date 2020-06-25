import Axios from "axios";
import Config from "react-native-config";

export default Axios.create({
    baseURL: Config.BASE_URL,
    responseType: 'json'
})