import React from "react";
import "../../styles/accounts.css";

const AccountTable = ({
  accounts,
  handleEdit,
  handleDelete,
}) => {
  return (
    <div className="account-table-wrapper">

      <table className="account-table">

        <thead>
          <tr>
            <th>Client</th>
            <th>Due Balance</th>
            <th>Credit Limit</th>
            <th>Excess</th>
            <th>Shipping</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>

          {accounts.map((account) => (
            <tr
              key={account._id}
              className={
                account.excessCheck
                  ? "exceeded-row"
                  : ""
              }
            >

              <td>{account.clientName}</td>

              <td>
                ₹ {account.dueBalance}
              </td>

              <td>
                ₹ {account.creditLimit}
              </td>

              <td>
                {account.excessCheck ? (
                  <span className="exceeded-text">
                    Exceeded
                  </span>
                ) : (
                  <span className="normal-text">
                    Normal
                  </span>
                )}
              </td>

              <td>
                {account.shippingApproval}
              </td>

              <td>

                <button
                  onClick={() =>
                    handleEdit(account)
                  }
                  className="edit-btn"
                >
                  Edit
                </button>

                <button
                  className="reminder-btn"
                >
                  Reminder
                </button>

                <button
                  onClick={() =>
                    handleDelete(account._id)
                  }
                  className="delete-btn"
                >
                  Delete
                </button>

              </td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
};

export default AccountTable;