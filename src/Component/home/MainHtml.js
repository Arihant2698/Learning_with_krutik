import React, { useState } from "react";
import { Main, Child } from "./StyleCss";

export default function MainHtml() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
      const res = axios.post{
      
  }  
  };
  return (
    <Main>
      <Child>
      <form onSubmit={(e) => handleSubmit}>
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
    </Main>
  );
}
