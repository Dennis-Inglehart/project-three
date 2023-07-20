import {Link} from "react-router-dom";
import {useState} from 'react';


export default function Register()
{
    return(
        <form className="register">
          <Link to="/">Back</Link>
          <h1>Login</h1>
          <input type="text" placeholder="Enter Username"></input>
          <input type="password" placeholder="Enter Password"></input>
          <button>Login</button>
      
        </form>
        );
}