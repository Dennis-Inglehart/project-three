import {Link} from "react-router-dom";


export default function Login()
{
  return(
  <form className="login">
    <Link to="/">Back</Link>
    <h1>Login</h1>
    <input type="text" placeholder="Enter Username"></input>
    <input type="password" placeholder="Enter Password"></input>
    <button>Login</button>

  </form>
  );
}