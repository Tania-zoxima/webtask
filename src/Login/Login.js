import React from 'react';
import logo from '../jk.png'
import './Login.css'

function Login() {
    return (

        <div className="container" >
            <img src={logo} className="image"  />
            <div className="inner">
            <input type="text" placeholder="Enter Username" className="text1" />
            <input type="text" placeholder="Enter password" className="text2"/>
            <button className="btn">SUBMIT</button>
            </div>
        </div>



    );
}


export default Login;