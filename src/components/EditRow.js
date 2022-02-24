import React from "react";

const EditRow = ({ editFormData, handleEditFormChange, handleCancelClick }) => {
  return (
    <tr>
      <td>
        <input
          type="name"
          required="required"
          placeholder="Ingresa un Nombre..."
          name="name"
          value={editFormData.name}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="bank"
          required="required"
          placeholder="Ingresa un Banco..."
          name="bank"
          value={editFormData.bank}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="accountType"
          required="required"
          placeholder="Ingresa el Tipo de cuenta..."
          name="accountType"
          value={editFormData.accountType}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="accountNumber"
          required="required"
          placeholder="Ingresa un Numero de cuenta..."
          name="accountNumber"
          value={editFormData.accountNumber}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="rut"
          required="required"
          placeholder="Ingresa un Rut..."
          name="rut"
          value={editFormData.rut}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="email"
          required="required"
          placeholder="Ingresa un Email..."
          name="email"
          value={editFormData.email}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="phone"
          placeholder="Ingresa un Numero Telefónico..."
          name="phone"
          value={editFormData.phone}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditRow ;
