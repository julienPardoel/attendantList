import React, { useState } from  'react';
import List from '../components/List';
import data from '../data';

const Home = () => {
    const [student, setStudent] = useState(data);
    return (
        <div>
            <h1>Home</h1>
            <h2>Attendance List For {student.length} Students</h2>
            <List student={student}/>
            <button onClick={() => setStudent([])}>Clear list</button>
        </div>
    )
}

export default Home
