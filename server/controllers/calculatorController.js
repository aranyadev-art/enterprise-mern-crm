const fs = require("fs");
const Calculator = require("../models/Calculator");
const { parseEngine } = require("../utils/parserEngine");
const logActivity = require("../utils/activityLogger");

const uploadTXTFile = async (req, res) => {
  try {
    console.log("FILE OBJECT:", req.file);

    // Validate file
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No file uploaded",
      });
    }

    let fileContent;

    // Read file
    try {
      const buffer = fs.readFileSync(req.file.path);

      console.log("BUFFER LENGTH:", buffer.length);

      // IMPORTANT: no const here
      fileContent = buffer.toString("utf-8");

      console.log("CONTENT LENGTH:", fileContent.length);
      console.log(
        "FILE PREVIEW:\n",
        fileContent.substring(0, 300)
      );
    } catch (readError) {
      console.error("READ ERROR:", readError);

      return res.status(400).json({
        success: false,
        message: "Failed to read file",
        error: readError.message,
      });
    }

    if (!fileContent || !fileContent.trim()) {
      return res.status(400).json({
        success: false,
        message: "Empty file content",
      });
    }

    let result;

    try {
      result = parseEngine(fileContent);

      console.log(
        "PARSE RESULT:",
        JSON.stringify(result, null, 2)
      );
    } catch (parseError) {
      console.error("PARSE ERROR:", parseError);

      return res.status(400).json({
        success: false,
        message: "File parsing failed",
        error: parseError.message,
      });
    }

    const calculator = await Calculator.create({
      fileName: req.file.filename,
      filePath: req.file.path,
    });
    await logActivity({
  action: "Calculator File Uploaded",
  module: "Calculator",
  description: req.file.originalname,
  user: "Admin",
});

    return res.status(200).json({
      success: true,
      data: {
        calculator,
        rows: result?.rawRows || result?.rows || [],
        summary: result?.summary || {
          totalGems: 0,
          totalWeight: 0,
          shapes: [],
        },
        grouped: result?.grouped || {},
      },
    });
  } catch (error) {
    console.error("Calculator Upload Error:", error);

    return res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error",
      data: {
        rows: [],
        summary: {
          totalGems: 0,
          totalWeight: 0,
          shapes: [],
        },
        grouped: {},
      },
    });
  }
};

module.exports = {
  uploadTXTFile,
};