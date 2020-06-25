import EStyleSheet from 'react-native-extended-stylesheet';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const GlobalStyles = EStyleSheet.create({
    // utilities
    bgWhite: {
        backgroundColor: 'white'
    },
    flexFill: {
        flex: 1
    },
    container: {
        paddingVertical: '19.5rem',
        paddingHorizontal: '11.5rem'
    },
    textCenter: {
        textAlign: 'center'
    },
    flexRowCenter: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    justifyContentBetween: {
        justifyContent: 'space-between',
    },
    justifyContentCenter: {
        justifyContent: 'center'
    },
    alignCenter: {
        alignItems: 'center'
    },
    mt1: {
        marginTop: '7rem'
    },
    mt2: {
        marginTop: '14rem'
    },
    mb1: {
        marginBottom: '7rem'
    },
    mb2: {
        marginBottom: '14rem'
    },
    mb3: {
        marginBottom: '21rem'
    },
    mb4: {
        marginBottom: '28rem'
    },
    mb5: {
        marginBottom: '35rem'
    },
    mh1: {
        marginHorizontal: '4rem'
    },
    mh2: {
        marginHorizontal: '7.5rem'
    },
    mh3: {
        marginHorizontal: '11.5rem'
    },
    mh4: {
        marginHorizontal: '19.5rem'
    },
    mh5: {
        marginHorizontal: '23rem'
    },
    ph1: {
        paddingHorizontal: '4rem'
    },
    ph2: {
        paddingHorizontal: '7.5rem'
    },
    ph3: {
        paddingHorizontal: '11.5rem'
    },
    ph4: {
        paddingHorizontal: '19.5rem'
    },
    ph5: {
        paddingHorizontal: '23rem'
    },
    statusBarHeight: {
        paddingTop: getStatusBarHeight(true)
    },
    hr: {

    },

    // Typography
    fontSmall: {
        fontSize: '10rem'
    },
    fontMedium: {
        fontSize: '15rem'
    },
    fontLarge: {
        fontSize: '24rem'
    },

    size20: {
        fontSize: '20rem'
    },

    fw100: {
        fontWeight: '100'
    },
    fw200: {
        fontWeight: '200'
    },
    fw300: {
        fontWeight: '300'
    },
    fw400: {
        fontWeight: '400'
    },
    fw500: {
        fontWeight: '500'
    },
    fw600: {
        fontWeight: '600'
    },
    fw700: {
        fontWeight: '700'
    },

})

export default GlobalStyles