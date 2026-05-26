const Lead = require("../models/Lead");
const Client = require("../models/Client");

// CREATE LEAD
const createLead = async (req, res) => {

  try {

    const lead = await Lead.create(req.body);

    res.status(201).json(lead);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });
  }
};




// GET LEADS
const getLeads = async (req, res) => {

  try {

    const leads = await Lead.find().sort({ createdAt: -1 });

    res.status(200).json(leads);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });
  }
};




// UPDATE LEAD
const updateLead = async (req, res) => {

  try {

    const updatedLead = await Lead.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json(updatedLead);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });
  }
};




// DELETE LEAD
const deleteLead = async (req, res) => {

  try {

    await Lead.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Lead deleted successfully",
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });
  }
};
const convertLeadToClient = async (req, res) => {

  try {

    const lead = await Lead.findById(req.params.id);

    if (!lead) {
      return res.status(404).json({
        message: "Lead not found",
      });
    }

    
    // CREATE CLIENT
    const client = await Client.create({
      clientName: lead.leadName,
      companyName: lead.companyName,
      email: lead.email,
      phone: lead.phone,
      assignedTo: lead.assignedTo,
      notes: lead.notes,
    });


    // UPDATE LEAD STATUS
    lead.status = "Converted";

    await lead.save();


    res.status(200).json({
      message: "Lead converted successfully",
      client,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });
  }
};




module.exports = {
  createLead,
  getLeads,
  updateLead,
  deleteLead,
  convertLeadToClient,
};