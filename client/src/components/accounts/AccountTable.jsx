import React from "react";

const AccountTable = ({
  accounts,
  handleEdit,
  handleDelete,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-x-auto">

      <table className="w-full">

        <thead className="bg-gray-100">
          <tr>
            <th className="p-4 text-left">Client</th>
            <th className="p-4 text-left">Due Balance</th>
            <th className="p-4 text-left">Credit Limit</th>
            <th className="p-4 text-left">Excess</th>
            <th className="p-4 text-left">Shipping</th>
            <th className="p-4 text-left">Actions</th>
          </tr>
        </thead>

        <tbody>
          {accounts.map((account) => (
            <tr
              key={account._id}
              className={`border-t ${
                account.excessCheck
                  ? "bg-red-50"
                  : ""
              }`}
            >

              <td className="p-4">
                {account.clientName}
              </td>

              <td className="p-4">
                ₹ {account.dueBalance}
              </td>

              <td className="p-4">
                ₹ {account.creditLimit}
              </td>

              <td className="p-4">
                {account.excessCheck ? (
                  <span className="text-red-600 font-bold">
                    Exceeded
                  </span>
                ) : (
                  <span className="text-green-600">
                    Normal
                  </span>
                )}
              </td>

              <td className="p-4">
                {account.shippingApproval}
              </td>

              <td className="p-4 flex gap-2">

                <button
                  onClick={() => handleEdit(account)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                >
                  Edit
                </button>

                <button
                  className="bg-yellow-500 text-white px-4 py-2 rounded-lg"
                >
                  Reminder
                </button>

                <button
                  onClick={() =>
                    handleDelete(account._id)
                  }
                  className="bg-red-600 text-white px-4 py-2 rounded-lg"
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