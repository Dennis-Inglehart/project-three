import {Link} from "react-router-dom";
import {useState} from 'react';

export default function Login()
{
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  async function loginFunction(ev){
    ev.preventDefault();
    try{
        await fetch('http://localhost:4000/login', {
            method: 'POST',
            body: JSON.stringify({userName, password}),
            headers: {'Content-Type':'application/json'},
        })
//this is where u will pass the response from the server with user and token up to the application    
    }
    catch(err)
    {
        console.log(err);
    };
    }

  return(
  <form className="register" onSubmit={loginFunction}>
    <Link to="/">Back</Link>
    <h1>Login</h1>
    <input type="text" placeholder="Enter Username" value={userName} onChange={ev => setUserName(ev.target.value)}></input>
    <input type="password" placeholder="Enter Password" value={password} onChange={ev => setPassword(ev.target.value)}></input>
    <button>Login</button>


  </form>
  );
}