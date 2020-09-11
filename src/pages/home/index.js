import React from 'react'
import TodoList from '../../components/todo-list';
import AddTodo from '../../components/add-todo'
import SubTitle from '../../ui/subtitle'
import { container, title, todoList  } from './home.module.scss'
import { useSelector } from 'react-redux';
import { getGroupedByDateTodos, getLatestTodos } from '../../redux/selectors/index';

const Home = () => {

    // const todos = useSelector(state => getLatestTodos(state.todos))
    const todos = useSelector(state => getGroupedByDateTodos(state.todos))

    console.log(todos)

    return (
        <div className={container}>

            <AddTodo />

            {/* <div className={todoList}>
                <SubTitle className={title}>Latest Todos</SubTitle>
                <TodoList todos={todos} />
            </div> */}
        </div>
    )
}

export default Home
