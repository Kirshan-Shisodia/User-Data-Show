import React from 'react';
import ShowAllUser from './FatchUser/ShowAllUser';
import UserDetails from './FatchUser/UserDetails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div>
    <Router>
      <Routes>
            <Route exact path="/" element={<ShowAllUser />} />
            <Route exact path="/userdetails" element={<UserDetails />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
