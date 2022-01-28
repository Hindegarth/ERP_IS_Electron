import React from "react";
import DataTable from "react-data-table-component";
import DataWorkers from "../context/DataWorkers";
import contextWorkers from "../hooks/contextWorkers";

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
    title: "Email",
    selector: "email",
    sortable: true,
  },
];

const pageOptions = {
  rowPerPageText: "filas por Página",
  rangeSeparatorText: "de",
  selectAllRowItem: true,
  selectAllRowItemText: "Todos",
};


export default function tableWorkers() {
  const { workers } = contextWorkers();
  return (
    <div>
      <DataWorkers.Provider value={workers}>
        <DataTable
          columns={columnsTable}
          data={workers}
          title="Tablita"
          pagination
          paginationComponentOptions={pageOptions}
          fixedHeader
          fixedHeaderScrollHeight="600px"
          /*
        actions={{
            icon: "delete",
            tooltip: "Delete Worker",
            onClick: (event, rowData) => alert("borrar?" + rowData.name)
            }}
            */
        />
      </DataWorkers.Provider>
    </div>
  );
}
