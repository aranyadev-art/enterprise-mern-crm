import { useState, useEffect } from "react";

import SalesJobForm from "../components/salesjobs/SalesJobForm";

import SalesJobTable from "../components/salesjobs/SalesJobTable";

function SalesJobs() {

  const [showForm, setShowForm] = useState(false);

  const [editJob, setEditJob] = useState(null);
   
    const [jobs, setJobs] = useState(() => {

  const savedJobs =
    localStorage.getItem("salesJobs");

  if (savedJobs) {

    return JSON.parse(savedJobs);
  }

  return [

    {
      id: 1,
      client: "John",
      designer: "Rahul",
      quantity: 5,
      priority: "High",
      status: "Pending",
      tracking: "SJ-2026-0001",
    },

    {
      id: 2,
      client: "Smith",
      designer: "Aman",
      quantity: 2,
      priority: "Medium",
      status: "Completed",
      tracking: "SJ-2026-0002",
    },

  ];

});
useEffect(() => {

  localStorage.setItem(
    "salesJobs",
    JSON.stringify(jobs)
  );

}, [jobs]);

  // DELETE

  const handleDelete = (id) => {

    const confirmDelete = window.confirm(
      "Are you sure want to delete?"
    );

    if (!confirmDelete) return;

    const updatedJobs =
      jobs.filter((job) => job.id !== id);

    setJobs(updatedJobs);
  };

  // EDIT

  const handleEdit = (job) => {

    setEditJob(job);

    setShowForm(true);
  };

  // SAVE JOB

  const handleSaveJob = (jobData) => {

    // EDIT UPDATE

    if (editJob) {

      const updatedJobs = jobs.map((job) =>

        job.id === editJob.id
          ? {
              ...job,
              ...jobData,
            }
          : job
      );

      setJobs(updatedJobs);

      setEditJob(null);

    } else {

      // CREATE

      const newJob = {

        id: jobs.length + 1,

        tracking: `SJ-2026-000${jobs.length + 1}`,

        ...jobData,
      };

      setJobs([...jobs, newJob]);
    }

    setShowForm(false);
  };

  return (

    <div style={{ padding: "20px" }}>

      {/* Header */}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
        >

        <button
          onClick={() => {
            setShowForm(!showForm);
            setEditJob(null);
          }}
          style={{
            padding: "10px 20px",
            background: "#1e293b",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >

          {showForm
            ? "Close Form"
            : "Create Sales Job"}

        </button>

      </div>

      {/* FORM */}

      {showForm ? (

        <SalesJobForm
          onSave={handleSaveJob}
          editJob={editJob}
        />

      ) : (

        <SalesJobTable
          jobs={jobs}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />

      )}

    </div>

  );
}

export default SalesJobs;