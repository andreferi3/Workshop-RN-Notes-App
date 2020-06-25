import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

// Screen
import Home from '../screen/Home';
import NoteDetail from '../screen/NoteDetail';
import SignIn from "../screen/SignIn";
import AuthLoading from "../screen/AuthLoading";

const User = createStackNavigator({
    Home,
    NoteDetail
}, {
    headerMode: 'none'
})

const Auth = createStackNavigator({
    SignIn: {
        screen: SignIn
    }
})

const AppContainer = createAppContainer(
    createSwitchNavigator({
        AuthLoading: AuthLoading,
        User,
        Auth
    }, {
        initialRouteName: 'AuthLoading'
    })
)

export default AppContainer