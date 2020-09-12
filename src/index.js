import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import { todoReducer } from './redux/reducers/todo'
import './style/index.scss'
import "react-datepicker/dist/react-datepicker.css"
import { filterReducer } from './redux/reducers/filter'

const rootReducer = combineReducers({
    todos: todoReducer,
    filters: filterReducer
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