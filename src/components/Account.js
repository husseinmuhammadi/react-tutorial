import React from "react";

const Account = ({account}) => {
  return (
    <tr>
      <td>{account.id}</td>
      <td>{account.username}</td>
      <td>{account.enable}</td>
    </tr>
  );
};

export default Account;