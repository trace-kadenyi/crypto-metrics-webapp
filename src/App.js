import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './Components/Navigation/Navigation';
import MainList from './Components/Homepage/MainList';
import Details from './Components/Homepage/Details';

const App = () => (
  <Router>
    <Navigation />
    <Routes>
      <Route exact path="/" element={<MainList />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
  </Router>
);

export default App;
