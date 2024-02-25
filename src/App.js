import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import "./styles.css";
import { initializeApp } from "firebase/app";
import axios from "axios";

const firebaseConfig = {
  apiKey: "AIzaSyAxIb9ukRFMH0T-axysXvAgJ-NLMMx-f7g",
  authDomain: "pos-ea5c9.firebaseapp.com",
  databaseURL:
    "https://pos-ea5c9-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "pos-ea5c9",
  storageBucket: "pos-ea5c9.appspot.com",
  messagingSenderId: "655303904063",
  appId: "1:655303904063:web:69bb51e829f4f2c1d6a18a",
  measurementId: "G-H9PEM4WQFN",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        console.log(auth);

        axios
          .get(
            "https://pos-ea5c9-default-rtdb.asia-southeast1.firebasedatabase.app/.json",
          )
          .then((res) => {
            console.log(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((e) => alert(e.message));
  };

  return (
    <div className="App">
      <div className="container">
        <div className="logos"></div>
      </div>
      <div className="login-container">
        <div className="form">
          <form onSubmit={login}>
            <h1>Login</h1>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="login-btn">
              Login
            </button>

            <div>
              <p>
                Don't have an account? <a href="/register">Register</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
