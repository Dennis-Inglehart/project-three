import {Link} from "react-router-dom";

export default function Register()
{
    return(
        <form className="register">
            <Link to="/">Back</Link>
            <h1>Signup</h1>
        <input type="text" placeholder="Enter Username"></input>
        <input type="password" placeholder="Enter Password"></input>
        <button>Register</button>
    
        </form>
    );
}