import React, { useState, Fragment } from "react";
import DataTable from "react-data-table-component";
import UserContext from "../context/UserContext";
import contextApp from "../hooks/contextApp";

require("es6-promise").polyfill();
require("isomorphic-fetch");

const pageOptions = {
  rowPerPageText: "filas por Página",
  rangeSeparatorText: "de",
  selectAllRowItem: true,
  selectAllRowItemText: "Todos",
};

export default function TableWorkers() {

  // Filas de workers
  const { workers } = contextApp();
  
  // columnas 
  const columnsTable = [
    {
      title: "Nombres",
      selector: "name",
      sortable: true,
    },
    {
      title: "Banco",
      selector: "bank",
      sortable: true,
    },
    {
      title: "Tipo de cuenta",
      selector: "accountType",
      sortable: true,
    },
    {
      title: "Cuenta",
      selector: "account",
      sortable: true,
    },
    {
      title: "Numero de Cuenta",
      selector: "accountNumber",
      sortable: true,
    },
    {
      title: "Rut",
      selector: "rut",
      sortable: true,
    },

    {
      title: "Email",
      selector: "email",
      sortable: true,
    },
    {
      title: "Phone",
      selector: "phone",
      sortable: true,
    },
    {
      title: "Actions",
      cell: (row) => (
        <button onClick={() => handleButtonClick(row)}>
          Edit
        </button>
      ),
      ignoreRowClick: false,
      allowOverflow: false,
      button: true,
    },
  ];


  function handleButtonClick(row) {
    console.log("clicked");
    console.log(row.name);
  }

  // Estado de la fila
  const [rowState, setRowState] = useState("");
  // Buscando entre todas las filas
  function search(rows) {
    return rows.filter(
      (row) =>
        row.name.toLowerCase().indexOf(rowState) > -1 ||
        row.rut.toLowerCase().indexOf(rowState) > -1
    );
  }

  return (
    <div>
      <UserContext.Provider value={workers}>
        <input
          type="text"
          value={rowState}
          placeholder="Ingresa Nombre o RUT"
          onChange={(newSearch) => setRowState(newSearch.target.value)}
          input
        />

        <DataTable
          columns={columnsTable}
          data={search(workers)}
          title="Tablita"
          pagination
          paginationComponentOptions={pageOptions}
          fixedHeader
          fixedHeaderScrollHeight="600px"
        />

      </UserContext.Provider>
    </div>
  );
}
