import React from "react";
import Account from "./Account";

const Accounts = (props) => {
  return (
    <React.Fragment>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>UserId</th>
            <th>Username</th>
            <th>Active</th>
          </tr>
        </thead>
        <tbody>
          {props.accounts.map((account) => <Account key={account.id} account={account} />)}
        </tbody>
      </table>
    </React.Fragment>
  )
}

export default Accounts;