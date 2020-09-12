import React from 'react'
import TodoList from '../../components/todo-list';
import AddTodo from '../../components/add-todo'
import SubTitle from '../../ui/subtitle'
import { container, title, todoList  } from './home.module.scss'
import { useSelector } from 'react-redux';
import getLatestTodos from '../../redux/selectors/latestTodos';

const Home = () => {

    const todos = useSelector(state => getLatestTodos(state.todos))

    return (
        <div className={container}>

            <AddTodo />

            <div className={todoList}>
                <SubTitle className={title}>Latest Todos</SubTitle>
                <TodoList todos={todos} />
            </div>
        </div>
    )
}

export default Home
