import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/home';
import LoginPage from './components/auth/login';
import Manage from './components/managment'
import RegisterPage from './components/auth/register/RegisterPage';
import DefaultLayout from './components/containers/default';

function App() {
  return (
    <>
    <Routes>
        <Route path="/" element={<DefaultLayout/>}>
          <Route index element={<HomePage />} />
          <Route path="manage" element={<Manage></Manage>}/>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          {/* <Route path="*" element={<NoMatch />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
