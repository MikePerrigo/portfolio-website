import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from './landingpage';
import Contact from './contact';
import About from './aboutme';
import Resume from './resume';
import Projects from './projects';

const Main = () => (
    <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/aboutme" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/resume" component={Resume} />
        <Route path="/projects" component={Projects} />
    </Switch>
)

export default Main