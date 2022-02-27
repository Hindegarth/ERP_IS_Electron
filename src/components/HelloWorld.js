import React from "react";
import UserContext from "../context/UserContext";
import contextApp from "../hooks/contextApp";

export default function HelloWorld() {
  const { message } = contextApp();
  console.log(message);
  return (
    <UserContext.Provider value={message}>
      <div>
        <p> hola: {message} </p>
      </div>
    </UserContext.Provider>
  );
}
