import { useState } from "react";

import CADForm from "../components/cad/CADForm";
import CADTable from "../components/cad/CADTable";

import "../components/cad/cad.css";

function CAD() {

  const [showForm, setShowForm] = useState(false);

  const [cadData, setCadData] = useState({

    startTime: "",
    endTime: "",
    comment: "",
    cpxSent: false,
    status: "Pending",

  });

  const [cadList, setCadList] = useState([]);

  const handleChange = (e) => {

    const { name, value, type, checked } =
      e.target;

    setCadData({

      ...cadData,

      [name]:
        type === "checkbox"
          ? checked
          : value,

    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    const newCAD = {

      ...cadData,

      cadCode:
        "CAD-" +
        Math.floor(
          1000 + Math.random() * 9000
        ),

    };

    setCadList([
      ...cadList,
      newCAD,
    ]);

    setCadData({

      startTime: "",
      endTime: "",
      comment: "",
      cpxSent: false,
      status: "Pending",

    });

    setShowForm(false);

  };

  return (

    <div className="cad-page">

      <div className="cad-header">

        <div className="cad-title">

          <h1>
            CAD Management
          </h1>

          <p>
            Manage CAD Designs & Workflow
          </p>

        </div>

     <button
  onClick={() =>
    setShowForm(!showForm)
  }
  className="add-cad-btn"
>

  {showForm
    ? "Back To Table"
    : "+ Add CAD"}

</button>

      </div>
{showForm ? (

  <CADForm

    cadData={cadData}

    handleChange={handleChange}

    handleSubmit={handleSubmit}

    setShowForm={setShowForm}

  />

) : (

  <CADTable cadList={cadList} />

)}

    </div>

  );

}

export default CAD;