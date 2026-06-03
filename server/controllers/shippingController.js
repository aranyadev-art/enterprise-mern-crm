const Shipping = require("../models/Shipping");


// CREATE
exports.createShipping = async (req, res) => {
  try {
    const shipping = await Shipping.create(req.body);

    res.status(201).json({
      success: true,
      data: shipping,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// GET ALL
exports.getShippings = async (req, res) => {
  try {
    const shippings = await Shipping.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      count: shippings.length,
      data: shippings,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};