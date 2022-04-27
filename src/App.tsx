import React from 'react';
import {NavLink} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import {SuperComponents} from "./components/SuperComponents";
import {LoginPage} from "./components/LoginPage";
import {ErrorPage} from "./components/ErrorPage";
import {ProfilePage} from "./components/ProfilePage";

export const PATH = {
    LOGIN: '/login',
    ERROR: '/error',
    TEST: '/test',
    PROFILE: '/profile',
    // add paths
}

function App() {
    return (
        <div className="App">
            <div>
                <Header/>
            </div>

            <Routes>
                <Route path={'/'} element={<SuperComponents/>}/>
                <Route path={PATH.LOGIN} element={<LoginPage/>}/>
                <Route path={PATH.ERROR} element={<ErrorPage/>}/>
                <Route path={PATH.PROFILE} element={<ProfilePage/>}/>

                {/*<Route path={"/registration"} element={<h3>регистрация</h3>}/>*/}
                {/*<Route path={"/profile"} element={<h3>профайл</h3>}/>*/}
                {/*<Route path={"/error"} element={<h3>404</h3>}/>*/}
                {/*<Route path={"/verifypassword"} element={<h3>восстановление пароля</h3>}/>*/}
                {/*<Route path={"/createpassword"} element={<h3>ввод нового пароля</h3>}/>*/}
                {/*<Route path="/test" element={<SuperComponents/>}/>*/}
            </Routes>
        </div>
    );
}

export default App;


export const Header = () => {

    return (
        <div style={{display: "flex", justifyContent: "space-around", width: "60%", margin: "0 auto"}}>
            <NavLink to={"login"}> login </NavLink>
            {/*<NavLink to={"registration"}> registration </NavLink>*/}
            <NavLink to={"profile"}> profile </NavLink>
            <NavLink to={"error"}> error </NavLink>
            {/*<NavLink to={"verifypassword"}> verify password </NavLink>*/}
            {/*<NavLink to={"createpassword"}> new password </NavLink>*/}
            <NavLink to={"test"}> test </NavLink>
        </div>
    )
}