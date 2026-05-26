const CAD = require("../models/CAD");

const createCAD = async (req, res) => {

  try {

    const {

      startTime,
      endTime,
      comment,

    } = req.body;

    // AUTO GENERATE CAD CODE

    const randomNumber = Math.floor(
      1000 + Math.random() * 9000
    );

    const cadCode = `CAD-${randomNumber}`;

    // CREATE CAD ENTRY

    const cad = await CAD.create({

      cadCode,
      startTime,
      endTime,
      comment,

    });

    res.status(201).json(cad);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};

module.exports = {
  createCAD,
};