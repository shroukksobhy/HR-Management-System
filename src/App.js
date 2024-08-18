import React, { useContext } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/Custom/PrivateRoute ';
import { AuthProvider } from './components/Custom/AuthProvider';
import SignUp from './components/SignUp';
import { AuthContext } from './components/Custom/AuthProvider';
import Profile from './components/Profile';
function App() {
  // const isAuthenticated = false; // Replace with your authentication logic
  const userRole = localStorage.getItem('role'); // Assuming role is stored in localStorage after login
  console.log(userRole);

  const { user } = useContext(AuthContext);
  console.log(user)
  return (
    <div className="App">
      {/* <Router> */}
      <Header />
      <Routes />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/" element={<PrivateRoute />}>
          {/* <Route path="/dashboard"  element={<Dashboard />} /> */}
          {/* <PrivateRoute path="/dashboard" element={<Dashboard />} /> */}
          <Route
            path="/dashboard"
            element={userRole === 'manager' ? <Dashboard /> : <Navigate to="/employee" />}
          />
          <Route
            path="/profile"
            element={<Profile />}
          />
        </Route>

      </Routes>

      {/* </Router> */}
    </div >
  );
}

export default App;
