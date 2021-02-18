import React, { useState } from 'react';
import './App.css';
import data from './data';
import List from './components/List';
import Navbar from './components/NavBar';

function App() {
  const [student, setStudent] = useState(data);
  // const changeAttendance = () => {
  //   setStudent({!attendance});
  // }
  return (
    
    <main>
      <Navbar/>
      <section className="container">
        <h2>Attendance List For {student.length} Students</h2>
        <List student={student}/>
        <button onClick = {()=>setStudent([])}>Clear list</button>
      </section>
    </main>
  );
}

export default App;
