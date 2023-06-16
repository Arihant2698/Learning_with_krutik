import React, { useState } from "react";
import { Main, Child } from "./MainCss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function MainHtml() {
  const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userName);
    console.log(password);
    try {
        
        const res = await axios.post("https://express-t4.onrender.com/api/login", {
          username: userName,
          password: password,
        });
        if (res.status === 200) {
            setMessage("Succesfully Login")
            console.log(res);
            navigate("/users");
        }
        
    } catch (error) {
        setMessage("Oops Incorrect Credentials")
    } 
  };
    

  return (
    <Main>
      <Child>
        <form onSubmit={handleSubmit}>
          <input
            style={{ display: "block", width: "20rem" }}
            placeholder="Enter Username"
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            style={{ display: "block", width: "20rem" }}
            placeholder="Enter Password"
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button style={{ display: "block", width: "20rem" }} type="submit">
            submit
          </button>
        </form>
          </Child>
          <h2>{message}</h2>
    </Main>
  );
}
