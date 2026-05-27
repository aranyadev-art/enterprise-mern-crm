import "./quotation.css";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const QuotationTable = ({ quotations }) => {

  // DOWNLOAD PDF
  const downloadPDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Quotation Report", 14, 20);

    const tableColumn = [
      "Quotation ID",
      "Metal",
      "Stone",
      "Total",
      "Currency",
    ];

    const tableRows = quotations.map((q) => [
      q.quotationId,
      q.metalPrice,
      q.stonePrice,
      q.totalPrice,
      q.currency,
    ]);

    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      startY: 30,
    });

    doc.save("quotations.pdf");
  };

  return (
    <div className="quotation-table">

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <h2>All Quotations</h2>

        <button
          onClick={downloadPDF}
          style={{
            padding: "10px 16px",
            backgroundColor: "#16a34a",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "600",
          }}
        >
          Download PDF
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Metal</th>
            <th>Stone</th>
            <th>Total</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {quotations.map((q) => (
            <tr key={q._id}>
              <td>{q.quotationId}</td>
              <td>{q.metalPrice}</td>
              <td>{q.stonePrice}</td>
              <td>{q.totalPrice}</td>
              <td>{q.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default QuotationTable;