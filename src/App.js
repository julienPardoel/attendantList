import React, { useState } from 'react';
import './App.css';
import data from './data';
import List from './components/List';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projets from './pages/Projets';
import Contacts from './pages/Contacts';


function App() {
  const [student, setStudent] = useState(data);
  return (
    <Router>
      <main>
        <NavBar/>
        <Switch>

          <Route path='/' exact component={Home}>

            <section className="container">

              <h2>Attendance List For {student.length} Students</h2>

              <List student={student}/>

              <button onClick={() => setStudent([])}>Clear list</button>

            </section>

          </Route>
            
          <Route path="/projets" component={Projets}/>

          

          <Route path="/contacts" component={Contacts}/>
          

        </Switch>
      </main>
    </Router>
  );
}

export default App;
