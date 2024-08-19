import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CourseList from './components/CourseList';
import CourseDetails from './components/CourseDetails';
import InstanceList from './components/InstanceList';
import InstanceDetails from './components/InstanceDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Course Management</h1>
        <Routes>
          <Route path="/" element={<CourseList />} />
          <Route path="/courses/:id" element={<CourseDetails />} />
          <Route path="/instances/:year/:semester" element={<InstanceList />} />
          <Route path="/instances/:year/:semester/:courseId" element={<InstanceDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
