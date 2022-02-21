import React from "react";

const EditRow = ({ editFormData, handleEditFormChange, handleCancelClick }) => {
  return (
    <tr>
      <td>
        <input
          type="name"
          required="required"
          placeholder="Enter a name..."
          name="name"
          value={editFormData.name}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="bank"
          required="required"
          placeholder="Enter an bank..."
          name="bank"
          value={editFormData.bank}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="accountType"
          required="required"
          placeholder="Enter a accountType..."
          name="accountType"
          value={editFormData.accountType}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="accountNumber"
          required="required"
          placeholder="Enter an accountNumber..."
          name="accountNumber"
          value={editFormData.accountNumber}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="rut"
          required="required"
          placeholder="Enter an rut..."
          name="rut"
          value={editFormData.rut}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="email"
          required="required"
          placeholder="Enter an email..."
          name="email"
          value={editFormData.email}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="phone"
          required="required"
          placeholder="Enter an phone..."
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
