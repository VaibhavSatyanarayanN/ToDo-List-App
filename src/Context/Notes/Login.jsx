import React, { useState, useContext } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import noteContext from "./NoteContext";

export default function Login() {
  const [present, setPresent] = useState("");
  const [present1, setPresent1] = useState("");
  const Navigate = useNavigate();

  const [isAuth, setIsAuth] = useState(false);
  const b = useContext(noteContext);

  const authCheck = () => {
    if (b.college === present && b.course == present1) {
      setIsAuth(true);
      Navigate("/profile");
    } else {
      setIsAuth(false);
    }
  };
  return (
    <>
      <input
        type="text"
        placeholder="Username"
        value={present}
        onChange={(e) => setPresent(e.target.value)}
      />
      <input
        type="text"
        placeholder="Password"
        value={present1}
        onChange={(e) => setPresent1(e.target.value)}
      />
      <button onClick={authCheck}>Login</button>
    </>
  );
}
