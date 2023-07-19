import { Link } from "react-router-dom";

export default function Register() {
  return (
    <main className="register-page">
      <header className="app-header">
        <div>
          <Link to="/">Back</Link>
        </div>
        <div>Signup</div>
        <div></div> {/* This empty div is used to center "Signup" text */}
      </header>
      <div className="register-container">
        <form className="register-form">
          <div className="input-container">
            <input type="text" placeholder="Enter Username" />
            <input type="password" placeholder="Enter Password" />
          </div>
          <button className="register-button">Register</button>
        </form>
      </div>
    </main>
  );
}
