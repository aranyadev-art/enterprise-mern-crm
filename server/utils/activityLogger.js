const Activity = require("../models/Activity");

const logActivity = async (data) => {
  try {
    console.log("ACTIVITY DATA:", data);

    await Activity.create(data);

    console.log("ACTIVITY SAVED");
  } catch (error) {
    console.error(
      "Activity Logger Error:",
      error
    );
  }
};

module.exports = logActivity;