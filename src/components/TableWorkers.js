import React from "react";
import DataTable from "react-data-table-component";

const workers = [
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
  }
];

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
  return (
    <div>
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
    </div>
  );
}
