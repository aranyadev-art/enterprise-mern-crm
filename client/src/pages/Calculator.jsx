import { useState } from "react";
import "../styles/calculator.css";

function Calculator() {

  const [showForm, setShowForm] =
    useState(false);

  return (

  <div className="calculator-page">

  <div className="calculator-header">

    <div>
      <h1>Calculator Module</h1>
      <p>Upload TXT Files</p>
    </div>

    <button
      onClick={() => setShowForm(!showForm)}
      className="calculator-toggle-btn"
    >
      {showForm
        ? "Back To Table"
        : "+ Upload TXT"}
    </button>

  </div>

  {showForm ? (

    <div className="calculator-form-card">

      <form>

        <div className="calculator-field">

          <label>
            Upload TXT File
          </label>

          <input
            type="file"
            accept=".txt"
            className="calculator-file-input"
          />

        </div>

        <button
          type="submit"
          className="calculator-save-btn"
        >
          Save File
        </button>

      </form>

    </div>

  ) : (

    <div className="calculator-empty-state">

      <div className="empty-icon">
        📄
      </div>

      <h3>No TXT Files Uploaded</h3>

      <p>
        Upload your first TXT file to get started.
      </p>

    </div>

  )}

</div>

  );

}

export default Calculator;