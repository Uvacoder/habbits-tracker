import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import { todoReducer } from './redux/reducers/todo'
import './style/index.scss'
import "react-datepicker/dist/react-datepicker.css"
import { visibilityFilter } from './redux/reducers/filter'

const rootReducer = combineReducers({
    todos: todoReducer,
    visibility: visibilityFilter
})

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
    document.getElementById('root')
)