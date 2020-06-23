import { createLogger } from "redux-logger";
import promiseMiddleWare from 'redux-promise-middleware';
import { createStore, applyMiddleware } from "redux";

import rootReducer from './reducers';

const logger = createLogger({});

const store = createStore(
    rootReducer,
    applyMiddleware(
        logger,
        promiseMiddleWare
    )
)

export default store