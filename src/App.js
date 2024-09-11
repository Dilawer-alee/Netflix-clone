import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // React Router v6 ke liye

import Home from './Pages/Home';
import SignIn from './Pages/Registration/SignIn';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
