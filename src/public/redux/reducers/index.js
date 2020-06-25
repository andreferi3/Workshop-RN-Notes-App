import { combineReducers } from 'redux';

import notes from './notes.reducer';
import category from './category.reducer';

const rootReducer = combineReducers({
    notes,
    category
})

export default rootReducer;
