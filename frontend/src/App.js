// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthPage from './pages/AuthPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        {/* other routes will go here */}
      </Routes>
    </Router>
  );
}

export default App;
