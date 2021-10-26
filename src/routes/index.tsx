import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../components/header';
import Home from '../pages/home';
import SearchedPage from '../pages/searchedPage';

const Routes: React.FC<{}> = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/city/:query" component={SearchedPage} />
            </Switch>
        </Router>
    );
};

export default Routes;
