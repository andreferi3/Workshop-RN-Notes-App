import { NavigationActions } from 'react-navigation';
import { DrawerActions } from 'react-navigation-drawer';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
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
};