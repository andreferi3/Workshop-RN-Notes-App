import { combineReducers } from "redux";

import notes from './notes.reducer';
import category from './category.reducer';

const root = combineReducers({
    notes,
    category
})

export default root