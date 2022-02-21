import React, { useState, Fragment } from "react";
import ReadRow from "./ReadRow";
import EditRow from "./EditRow";
import UserContext from "../context/UserContext";
import contextApp from "../hooks/contextApp";

const TableWorker = () => {
  const { workers } = contextApp();

  const [contacts, setContacts] = useState(workers);

  // Escructura de la edicion de workers y su estado
  const [editFormData, setEditFormData] = useState({
    name: "",
    bank: "",
    accountType: "",
    accountNumber: "",
    rut: "",
    email: "",
    phone: "",
  });

  // Indice donde indica que fila sera editada, si el rut se repite, ambas filas se cambiaran.
  const [editContactRut, setEditContactRut] = useState(null);


  // Celdas donde se pone la informacion nueva, en este caso de edicion 
  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };
  // entrega la nueva informacion de la fila editada
  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      name: editFormData.name,
      bank: editFormData.bank,
      accountType: editFormData.accountType,
      accountNumber: editFormData.accountNumber,
      rut: editFormData.rut,
      email: editFormData.email,
      phone: editFormData.phone,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.rut === editContactRut);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactRut(null);
  };

  // accion de editar fila

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactRut(contact.rut);

    const formValues = {
      name: contact.name,
      bank: contact.bank,
      accountType: contact.accountType,
      accountNumber: contact.accountNumber,
      rut: contact.rut,
      email: contact.email,
      phone: contact.phone,
    };

    setEditFormData(formValues);
  };
  // accion de cancelar el click, dejando el estado de la fila en default
  const handleCancelClick = () => {
    setEditContactRut(null);
  };
  // accion de borrar una fila, usando el rut como indice de la fila a borrar
  const handleDeleteClick = (contactRut) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.rut === contactRut);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

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

  console.log(contacts)
  return (
    <UserContext.Provider value={workers}>
      <div className="app-container">
        <input
          type="text"
          value={rowState}
          placeholder="Ingresa Nombre o RUT"
          onChange={(newSearch) => setRowState(newSearch.target.value)}
          input
        />

        <form onSubmit={handleEditFormSubmit}>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Bank</th>
                <th>AccountType</th>
                <th>AccountNumber</th>
                <th>RUT</th>
                <th>Email</th>
                <th>phone</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {search(contacts).map((contact) => (
                <Fragment>
                  {editContactRut === contact.rut ? (
                    <EditRow
                      editFormData={editFormData}
                      handleEditFormChange={handleEditFormChange}
                      handleCancelClick={handleCancelClick}
                    />
                  ) : (
                    <ReadRow
                      contact={contact}
                      handleEditClick={handleEditClick}
                      handleDeleteClick={handleDeleteClick}
                    />
                  )}
                </Fragment>
              ))}
            </tbody>
          </table>
        </form>

      </div>
    </UserContext.Provider>
  );
};

export default TableWorker;
