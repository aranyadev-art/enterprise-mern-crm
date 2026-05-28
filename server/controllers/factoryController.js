const Factory = require("../models/Factory");

// Create Factory Record
const createFactory = async (req, res) => {
  try {
    const factory = await Factory.create(req.body);

    res.status(201).json({
      success: true,
      data: factory,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
const getFactories = async (req, res) => {
  try {
    const factories = await Factory.find();

    res.status(200).json({
      success: true,
      count: factories.length,
      data: factories,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
const updateFactory = async (req, res) => {
  try {
    if (req.body.completed === true) {
      req.body.completedDate = new Date();
    }

    const factory = await Factory.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    res.status(200).json({
      success: true,
      data: factory,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createFactory,
  getFactories,
  updateFactory,
};
