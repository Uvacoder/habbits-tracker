import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Calendar from './pages/calendar';
import Tags from './pages/tags';
import Search from './pages/search';
import Layout from './ui/layout';

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/calendar' exact component={Calendar} />
                    <Route path='/tags' exact component={Tags} />
                    <Route path='/search' exact component={Search} />
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default App;
