import React, { useState } from "react";
import "./Login.css";
import logo from "../../assets/logo.png";
import { login, signup } from "../../firebase";
const Login = () => {
  const [signState, setSignState] = useState("Sign In");
  const handleclick = () => {
    if (signState === "Sign In") {
      setSignState("sign Up");
    } else {
      setSignState("Sign In");
    }
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user_auth = async (e) => {
    e.preventDefault();
    if (signState === "Sign In") {
      await login(email, password);
    } else {
      console.log("signUP");
      await signup(name, email, password);
    }
  };
  return (
    <div className="login">
      <img src={logo} alt="" className="login-logo" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          {signState === "sign Up" && (
            <input
              value={name}
              type="text"
              placeholder="Your name"
              onChange={(e) => setName(e.target.value)}
            />
          )}
          <input
            value={email}
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            value={password}
            type="Password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={user_auth} type="submit">
            {signState}
          </button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState === "Sign In" ? (
            <p>
              New to Netflix? <span onClick={handleclick}>Sign Up Now</span>
            </p>
          ) : (
            <p>
              Already have account?
              <span onClick={handleclick}>Sign In Now</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
