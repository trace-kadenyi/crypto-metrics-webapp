import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './Components/Navigation/Navigation';
import HomeLink from './Components/Homepage/HomeLink';

const App = () => (
  <Router>
    <Navigation />
    <Routes>
      <Route exact path="/" element={<HomeLink />} />
    </Routes>
  </Router>
);

export default App;
