import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Habits from './pages/Habits';
import Progress from './pages/Progress';
import Notifications from './pages/Notifications';
import Sync from './pages/Sync';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/habits" element={<Habits />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/sync" element={<Sync />} />
      </Routes>
    </Router>
  );
}

export default App;
