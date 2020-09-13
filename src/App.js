import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Calendar from './components/calendar';
import EditTodoContainer from './components/edit-todo';
import Search from './components/search';
import Home from './pages/home/index';
import Layout from './ui/layout';

function App() {
    return (
        <>
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route path='/' exact component={Home} />
                        <Route path='/calendar' exact component={Calendar} />
                        <Route path='/search' exact component={Search} />
                    </Switch>
                </Layout>
            </BrowserRouter>

            <EditTodoContainer />
        </>
    )
}

export default App;
