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
import Specialities from './components/Specialities';
import Services from './components/Services';
import Sectors from './components/Sectors';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
    return (
        <Router className="App__container">
            <Switch>
                <Route exact path="/">
                    <Nav />
                    <Slide />
                    <Presentation />
                    <Specialities />
                    <Services />
                    <Sectors />
                    <Contact />
                    <Footer />
                </Route>
            </Switch>
        </Router>
    );
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
