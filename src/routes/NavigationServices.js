import { NavigationActions } from 'react-navigation';
<<<<<<< HEAD
import { DrawerActions } from 'react-navigation-drawer';
=======
>>>>>>> 53751367976fc2df72c40dc47de9407f62e0d9d3

let _navigator;

function setTopLevelNavigator(navigatorRef) {
<<<<<<< HEAD
  _navigator = navigatorRef;
}

function navigate(routeName, params) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  );
}

function back() {
  _navigator.dispatch(
    NavigationActions.back()
  )
}

function toggleDrawer() {
  _navigator.dispatch(
    DrawerActions.toggleDrawer()
  )
}

export default {
  navigate,
  back,
  setTopLevelNavigator,
  toggleDrawer
=======
    _navigator = navigatorRef;
}

function navigate(routeName, params) {
    _navigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params,
        })
    );
}

function back() {
    _navigator.dispatch(
        NavigationActions.back()
    )
}

function setParams(params) {
    _navigator.dispatch(
        NavigationActions.setParams({
            params
        })
    )
}

export default {
    back,
    navigate,
    setTopLevelNavigator,
    setParams
>>>>>>> 53751367976fc2df72c40dc47de9407f62e0d9d3
};