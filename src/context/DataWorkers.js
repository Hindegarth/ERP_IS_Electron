import { createContext } from "react";

const DataWorkers = createContext({
  workers: [
    {
      name: "Bruno Ignacio Silva Paredes",
      bank: "Banco Estado",
      accountType: "CuentaRut",
      account: "18708xxx",
      email: "bs@mail.com",
    },
    {
      name: "Victoria Tejer",
      bank: "Banco Estado",
      accountType: "CuentaRut",
      account: "18427xxx",
      email: "vt@mail.com",
    },
  ],
});

export default DataWorkers;