import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import {
    blogReducer,
    errorReducer,
    flashMessageReducer,
    loginReducer,
} from './reducers/reducers'

const reducer = combineReducers({
    blogs: blogReducer,
    error: errorReducer,
    flashMessage: flashMessageReducer,
    user: loginReducer,
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store
