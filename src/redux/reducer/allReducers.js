import commentReducer from './commentReducer'
import contactReducer from './contactReducer'
import {combineReducers} from 'redux' 

const allReducers = combineReducers({
    comment: commentReducer,
    contact: contactReducer
})

export default allReducers;