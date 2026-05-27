const Account = require("../models/Account");


// CREATE ACCOUNT
const createAccount = async (req, res) => {
  try {
    const { clientName, dueBalance, creditLimit, shippingApproval } = req.body;

    const excessCheck = Number(dueBalance) > Number(creditLimit);

    const newAccount = new Account({
      clientName,
      dueBalance,
      creditLimit,
      excessCheck,
      shippingApproval,
    });

    await newAccount.save();

    res.status(201).json({
      success: true,
      message: "Account created successfully",
      data: newAccount,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// GET ALL ACCOUNTS
const getAccounts = async (req, res) => {
  try {
    const accounts = await Account.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: accounts,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// UPDATE ACCOUNT
const updateAccount = async (req, res) => {
  try {
    const { clientName, dueBalance, creditLimit, shippingApproval } = req.body;

    const excessCheck = Number(dueBalance) > Number(creditLimit);

    const updatedAccount = await Account.findByIdAndUpdate(
      req.params.id,
      {
        clientName,
        dueBalance,
        creditLimit,
        excessCheck,
        shippingApproval,
      },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Account updated successfully",
      data: updatedAccount,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// DELETE ACCOUNT
const deleteAccount = async (req, res) => {
  try {
    await Account.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Account deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


module.exports = {
  createAccount,
  getAccounts,
  updateAccount,
  deleteAccount,
};