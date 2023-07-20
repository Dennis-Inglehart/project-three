import {Link} from "react-router-dom";
import {useState} from 'react';


export default function Register()
{
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    try{
    async function registerFunction(ev){
    ev.preventDefault();
    await fetch('http://localhost:4000/register', {
        method: 'POST',
        body: JSON.stringify({userName, password}),
        headers: {'Content-Type':'application/json'},
    })
    }
}
catch(err)
{
    console.log(err);
};
    return(
        <form className="register" onSubmit={registerFunction}>
            <Link to="/">Back</Link>
            <h1>Signup</h1>
        <input type="text" placeholder="Enter Username" value={userName} onChange={ev => setUserName(ev.target.value)}></input>
        <input type="password" placeholder="Enter Password" value={password} onChange={ev =>setPassword(ev.target.value)}></input>
        <button>Register</button>
    
// import { Link } from "react-router-dom";

// export default function Register() {
//   return (
//     <main className="register-page">
//       <header className="app-header">
//         <div>
//           <Link to="/">Back</Link>
//         </div>
//         <div>Signup</div>
//         <div></div> {/* This empty div is used to center "Signup" text */}
//       </header>
//       <div className="register-container">
//         <form className="register-form">
//           <div className="input-container">
//             <input type="text" placeholder="Enter Username" />
//             <input type="password" placeholder="Enter Password" />
//           </div>
//           <button className="register-button">Register</button>
//  main
//         </form>
//       </div>
//     </main>
//   );
// }
