import React from "react"
import { useContext } from "react";
import UserContext from "../context/UserContext";
import contextApp from "../hooks/contextApp"

export default function HelloWorld() {
  const message = useContext(UserContext);
  console.log(message);
  return (
    <div>
      <p> hola: {message} </p>
    </div>
  )
}