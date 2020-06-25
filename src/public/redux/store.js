import { createStore, applyMiddleware } from "redux";
import promiseMiddleWare from 'redux-promise-middleware'
import { createLogger } from "redux-logger";

import root from "./reducers";

const logger = createLogger({})

const store = createStore(
    root,
    applyMiddleware(
        logger,
        promiseMiddleWare
    )
)

export default store