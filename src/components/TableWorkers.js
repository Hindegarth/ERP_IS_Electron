import React, {useState} from "react";
import DataTable from "react-data-table-component";
import UserContext from "../context/UserContext";
import contextApp from "../hooks/contextApp";

require("es6-promise").polyfill();  
require("isomorphic-fetch");

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
    selector: "bank",
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
];

const pageOptions = {
  rowPerPageText: "filas por Página",
  rangeSeparatorText: "de",
  selectAllRowItem: true,
  selectAllRowItemText: "Todos",
};


export default function TableWorkers() {
  
  const { workers } = contextApp();

  const [q,setQ] = useState("");
  
  function search(rows) {
    return rows.filter((row) => row.name.toLowerCase().indexOf(q) > -1);
  }


  return (
    <div>
      <UserContext.Provider value={workers}>
        <input type = "text" value ={q} onChange={(e) => setQ(e.target.value)} input/>
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
