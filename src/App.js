import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projets from './pages/Projets';
import Contacts from './pages/Contacts';
import { Transition } from 'react-transition-group';
import { gsap } from 'gsap';


const routes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/", name: "Projets", Component: Projets },
  { path: "/", name: "Contacts", Component: Contacts },
];

function App() {

  return (
    <Router>
      <main>
        <NavBar />
        <section className="container">
          <Transition>
            <Switch>
              {
                routes.map(({ path, Component }) => (
                  <routes key={path} exact path={path}>
                    {({ match }) => (

                      <>
                        <Component />
                      </>

                    )}
                  </routes>
                ))
              }
            </Switch>
          </Transition>
          <Route path='/' exact component={Home} />
          <Route path="/projets" component={Projets} />
          <Route path="/contacts" component={Contacts} />

        </section>

      </main>
    </Router>
  );
}

export default App;
