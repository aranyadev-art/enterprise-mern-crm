const Calculator =
  require("../models/Calculator");

const uploadTXTFile = async (
  req,
  res
) => {

  try {

    if (!req.file) {

      return res.status(400).json({
        message: "No file uploaded",
      });

    }

    const calculator =
      await Calculator.create({

        fileName: req.file.filename,

        filePath: req.file.path,

      });

    res.status(201).json(
      calculator
    );

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};

module.exports = {
  uploadTXTFile,
};