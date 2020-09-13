import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import 'antd/dist/antd.css';
import './style/index.scss'
import "react-datepicker/dist/react-datepicker.css"
import { todoReducer } from './redux/reducers/todo'
import { filterReducer } from './redux/reducers/filter'
import { modalReducer } from './redux/reducers/modal'

const rootReducer = combineReducers({
    todos: todoReducer,
    filters: filterReducer,
    modal: modalReducer
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