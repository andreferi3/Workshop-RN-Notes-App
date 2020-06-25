import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";

// Auth Screen
import SignIn from "../screen/SignIn";
import AuthLoading from "../screen/AuthLoading";

// Screen
import Home from '../screen/Home';
import NoteDetail from '../screen/NoteDetail';


const Main = createStackNavigator({
    Home,
    NoteDetail
}, {
    headerMode: 'none',
    initialRouteName: 'Home'
})

const Auth = createStackNavigator({
    SignIn: {
        screen: SignIn
    }
})

const DrawerNavigator = createDrawerNavigator({
    Home: {
        screen: Main,
        navigationOptions: {
            drawerLabel: () => null
        }
    }
},
{
    initialRouteName: 'Home'
})

const AppContainer = createAppContainer(
    createSwitchNavigator({
        AuthLoading: AuthLoading,
        Auth,
        DrawerNavigator,
    }, {
        initialRouteName: 'AuthLoading'
    })
)

export default AppContainer