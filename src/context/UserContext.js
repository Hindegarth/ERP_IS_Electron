import { createContext } from "react";

const UserContext = createContext({
  workers: [
    {
      name: "Bruno Ignacio Silva Paredes",
      bank: "Banco Estado",
      accountType: "CuentaRut",
      accountNumber: "18708xxx",
      rut: "18708xxx-0", 
      email: "bs@mail.com",
      phone: "",
    },
    {
      name: "Victoria Tejer",
      bank: "Banco Estado",
      accountType: "CuentaRut",
      accountNumber: "18427xxx",
      rut: "18427xxx-0", 
      email: "vt@mail.com",
      phone: "",
    },
  ]
  ,
  message: "hola",
});

export default UserContext;
