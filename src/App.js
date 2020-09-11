import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/home/index';
import Layout from './ui/layout';

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route path='/' exact component={Home} />
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default App;
