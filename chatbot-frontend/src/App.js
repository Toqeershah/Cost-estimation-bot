
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './auth/Login';
import SignUp from './auth/SignUp';
import Chat from './components/Chat';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Login />} />
          <Route path='/chat' element={ <Chat />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
