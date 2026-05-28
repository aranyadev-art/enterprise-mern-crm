const Lead = require("../models/Lead");
const Client = require("../models/Client");
const Order = require("../models/Order");
const Account = require("../models/Account");

const getDashboardSummary = async (req, res) => {
  try {
    const totalLeads = await Lead.countDocuments();

    const totalClients = await Client.countDocuments();

    const totalOrders = await Order.countDocuments();

    const totalAccounts = await Account.countDocuments();

    const accounts = await Account.find();

    const totalDueBalance = accounts.reduce(
      (sum, acc) => sum + acc.dueBalance,
      0
    );

    const exceededAccounts =
      await Account.countDocuments({
        excessCheck: true,
      });

    res.status(200).json({
      success: true,
      data: {
        totalLeads,
        totalClients,
        totalOrders,
        totalAccounts,
        totalDueBalance,
        exceededAccounts,
      },
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Dashboard data fetch failed",
    });
  }
};

module.exports = {
  getDashboardSummary,
};