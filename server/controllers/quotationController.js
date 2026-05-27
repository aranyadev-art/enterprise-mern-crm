const Quotation = require("../models/Quotation");

// CREATE QUOTATION
exports.createQuotation = async (req, res) => {
  try {
    let { metalPrice, stonePrice, purity, currency, sendEmail } = req.body;

    // ✅ SAFE CONVERSION (MOST IMPORTANT FIX)
    metalPrice = Number(metalPrice) || 0;
    stonePrice = Number(stonePrice) || 0;
    purity = Number(purity) || 0;

    const baseTotal = metalPrice + stonePrice;

    // ✅ SAFE CALCULATION
    const finalTotal =
      purity > 0 ? baseTotal * (purity / 100) : baseTotal;

    const quotation = new Quotation({
      quotationId: "QT-" + Date.now(),
      metalPrice,
      stonePrice,
      purity,
      currency: currency || "INR",
      totalPrice: finalTotal,
      priceBreakdown: `
Metal: ${metalPrice}
Stone: ${stonePrice}
Base: ${baseTotal}
Purity: ${purity}%
Final: ${finalTotal}
      `,
      sendEmail: sendEmail || false,
      createdBy: req.user?.id || null,
    });

    await quotation.save();

    res.status(201).json({
      success: true,
      data: quotation,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// GET ALL QUOTATIONS
exports.getQuotations = async (req, res) => {
  try {
    const data = await Quotation.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      data,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};