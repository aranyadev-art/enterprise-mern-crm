import { useState } from "react";
import "../styles/calculator.css";
import axios from "axios";

function Calculator() {
  const [showForm, setShowForm] = useState(false);
  const [file, setFile] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!file) {
      alert("Please select a TXT file");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("file", file);

      const res = await axios.post(
        "http://localhost:5000/api/calculator",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const responseData = res.data?.data || res.data;

      setData({
        rows: responseData?.rows || [],
        summary: responseData?.summary || {
          totalGems: 0,
          totalWeight: 0,
          shapes: [],
        },
      });

      setShowForm(false);
    } catch (err) {
      console.error("UPLOAD ERROR:", err);
      alert(
        err?.response?.data?.message || "Upload failed. Check backend."
      );
    } finally {
      setLoading(false);
    }
  };

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
          {showForm ? "Back To Table" : "+ Upload TXT"}
        </button>
      </div>

      {showForm ? (
        <div className="calculator-form-card">
          <form onSubmit={handleUpload}>
            <div className="calculator-field">
              <label>Upload TXT File</label>

              <input
                type="file"
                accept=".txt"
                className="calculator-file-input"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>

            <button
              type="submit"
              className="calculator-save-btn"
              disabled={loading}
            >
              {loading ? "Uploading..." : "Save File"}
            </button>
          </form>
        </div>
      ) : (
        <div>
          {!data ? (
            <div className="calculator-empty-state">
              <div className="empty-icon">📄</div>
              <h3>No Data</h3>
              <p>Upload TXT file to view results</p>
            </div>
          ) : (
            <div>
              {/* SUMMARY */}
              <div className="summary-box">
                <h3>Summary</h3>
                <p>Total Gems: {data?.summary?.totalGems || 0}</p>
                <p>
                  Total Weight: {data?.summary?.totalWeight || 0} ct
                </p>
              </div>

              {/* TABLE */}
              <table className="calculator-table">
                <thead>
                  <tr>
                    <th>Qty</th>
                    <th>Shape</th>
                    <th>X</th>
                    <th>Y</th>
                    <th>Z</th>
                    <th>Weight</th>
                    <th>Size Bucket</th>
                  </tr>
                </thead>

                <tbody>
                  {(data?.rows || []).map((row, i) => (
                    <tr key={i}>
                      <td>{row.qty}</td>
                      <td>{row.shape}</td>
                      <td>{row.x}</td>
                      <td>{row.y}</td>
                      <td>{row.z}</td>
                      <td>{row.weight}</td>
                      <td>{row.sizeBucket}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Calculator;