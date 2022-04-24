import React from 'react';
import { NavLink } from 'react-router-dom';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import {SuperComponents} from "./components/SuperComponents";

function App() {
  return (
    <div className="App">
        <div>
            <Header />
        </div>
      <Routes>
          <Route path="/" element={<Navigate to={"/test"}/>}/>
          <Route path="/login" element={"логинизация"}/>
          <Route path="/registration" element={"регистрация"}/>
          <Route path="/profile" element={"профайл"}/>
          <Route path="/error" element={"404"}/>
          <Route path="/verifypassword" element={"восстановление пароля"}/>
          <Route path="/createpassword" element={"ввод нового пароля"}/>
          <Route path="/test" element={<SuperComponents/>}/>
      </Routes>
    </div>
  );
}

export default App;


export const Header = () => {

    return (
        <div style={{display: "flex", justifyContent: "space-around", width: "60%", margin: "0 auto"}}>
            <NavLink to={'/login'}> login </NavLink>
            <NavLink to={'/registration'} > registration </NavLink>
            <NavLink to={'/profile'} > profile </NavLink>
            <NavLink to={'/error'} > error </NavLink>
            <NavLink to={'/verifypassword'} > verify password </NavLink>
            <NavLink to={'/createpassword'} > new password </NavLink>
            <NavLink to={'/test'} > test </NavLink>
        </div>
    )
}