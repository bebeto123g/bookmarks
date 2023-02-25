import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { phonesReducer } from './phonesReducer'
import { phonesPageReducer } from './phonesPageReducer'
import { createStore, applyMiddleware } from 'redux'
import { createBrowserHistory } from 'history'
import { composeWithDevTools } from 'redux-devtools-extension'
import { routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'

export const rootReducer = (history) =>
    combineReducers({
        router: connectRouter(history),
        phonesReducer,
        phonesPageReducer,
    })

export const history = createBrowserHistory()

const middlewares = [thunk, routerMiddleware(history)]

export const store = createStore(
    rootReducer(history),
    composeWithDevTools(applyMiddleware(...middlewares))
)
