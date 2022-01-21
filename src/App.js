import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import * as XLSX from "xlsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function listWorkers(fileName) {
  //const [items, setItems] = useState([]);
  const readExcel = (file) => {
    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);
      fileReader.onload = (e) => {
        const bufferArray = e.target.result;
        const wb = XLSX.read(bufferArray, { type: "buffer" });
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        const data = XLSX.utils.sheet_to_json(ws);
        resolve(data);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
    promise.then((d) => {
      //setItems(d);
    });
  };
  console.log(readExcel);
  return readExcel;
}

function App() {
  const fileName = "../DB/Pagos_ERP.xlsm";
  let aux = listWorkers(fileName);
  //console.log(aux);
  let listWorkers2 = undefined //listWorkers(fileName)
    ? {} // listWorkers(fileName)
    : {
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
      };
  return (
    <Container>
      <h1>Hello world</h1>
      <Button onClick={() => console.log("listWorkers:", listWorkers2)}>
        Lista de trabajadores desde excel
      </Button>
    </Container>
  );
}
export default App;
