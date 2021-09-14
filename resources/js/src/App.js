import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from 'react-router-dom';

import Nav from './components/Nav';
import Slide from './components/Slide';
import Presentation from './components/Presentation';

const App = () => {
    return (
        <Router className="App__container">
            <Switch>
                <Route exact path="/">
                    <Nav />
                    <Slide />
                    <Presentation />
                </Route>
            </Switch>
        </Router>
    );
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
