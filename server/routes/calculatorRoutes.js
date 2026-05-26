const express = require("express");

const router = express.Router();

const multer = require("multer");

const {
  uploadTXTFile,
} = require(
  "../controllers/calculatorController"
);

const storage =
  multer.diskStorage({

    destination: function (
      req,
      file,
      cb
    ) {

      cb(
        null,
        "uploads/calculator"
      );

    },

    filename: function (
      req,
      file,
      cb
    ) {

      cb(
        null,
        Date.now() +
          "-" +
          file.originalname
      );

    },

  });

const upload = multer({
  storage,
});

router.post(
  "/",
  upload.single("file"),
  uploadTXTFile
);

module.exports = router;