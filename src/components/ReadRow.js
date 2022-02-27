import React from "react";

const ReadRow = ({contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.name}</td>
      <td>{contact.bank}</td>
      <td>{contact.accountType}</td>
      <td>{contact.accountNumber}</td>
      <td>{contact.rut}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Edit  
        </button>
        <button type="button" onClick={() => handleDeleteClick(contact.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadRow;
