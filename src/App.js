import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IssuesPage from './components/IssuesPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IssuesPage />} />
        <Route
          path="/repos/:owner/:repo"
          element={<IssuesPage />}
        />
      </Routes>
    </Router>
  );
};

export default App;