import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import AboutPage from '../components/page/AboutPage';
import HomePage from '../components/page/HomePage';
import NotFound from '../components/ui/NotFound';

const AppRouter = () => {
    return (
        <Router>

            <Switch>
                <Route exact path="/about" component={AboutPage} />

                <Route exact path="/" component={HomePage} />

                <Route component={NotFound} />

            </Switch>
        </Router>
    )
}

export default AppRouter;
