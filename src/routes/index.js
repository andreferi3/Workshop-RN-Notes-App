import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

// Screen
import Profile from '../screen/Profile';
import Settings from '../screen/Settings';
import SignIn from "../screen/SignIn";
import AuthLoading from "../screen/AuthLoading";

const User = createStackNavigator({
    Profile: {
        screen: Profile
    },
    Setting: {
        screen: Settings
    }
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