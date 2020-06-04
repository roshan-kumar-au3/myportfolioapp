import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import About from './views/About/About';
import Project from './views/Project/Project';
import Resume from './views/Resume/Resume';
import Contact from './views/Contact/Contact';
import ErrorPage from './views/Error/Error';

const Routes = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={App} />
                    <Route path="/project" exact component={Project} />
                    <Route path="/resume" exact component={Resume} />
                    <Route path="/about" exact component={About} />
                    <Route path="/contact" exact component={Contact} />
                    <Route path="*" component={ErrorPage} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Routes;