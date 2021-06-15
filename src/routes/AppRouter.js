import React from 'react';
import {
    HashRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import AboutPage from '../components/page/AboutPage';
import BlogPage from '../components/page/BlogPage';
import FrameworkPage from '../components/page/FrameworkPage';
import HomePage from '../components/page/HomePage';
import LanguagePage from '../components/page/LanguagePage';
import SearchPage from '../components/page/SearchPage';
import NotFound from '../components/ui/NotFound';

const AppRouter = () => {
    return (
        <Router>

            <Switch>
                <Route exact path="/language" component={LanguagePage} />
                <Route exact path="/framework" component={FrameworkPage} />
                <Route exact path="/blog" component={BlogPage} />
                <Route exact path="/about" component={AboutPage} />
                <Route exact path="/search/:v" component={SearchPage} />

                <Route exact path="/" component={HomePage} />

                <Route component={NotFound} />

            </Switch>
        </Router>
    )
}

export default AppRouter;
