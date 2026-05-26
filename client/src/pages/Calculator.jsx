import { useState } from "react";

function Calculator() {

  const [showForm, setShowForm] =
    useState(false);

  return (

    <div className="p-6">

      <div className="flex justify-between items-center mb-6">

        <div>

          <h1 className="text-3xl font-bold">
            Calculator Module
          </h1>

          <p className="text-gray-500 mt-1">
            Upload TXT Files
          </p>

        </div>

        <button
          onClick={() =>
            setShowForm(!showForm)
          }
          className="bg-blue-600 text-white px-5 py-2 rounded-lg"
        >

          {showForm
            ? "Back To Table"
            : "+ Upload TXT"}

        </button>

      </div>

      {showForm ? (

        <div className="bg-white p-6 rounded-xl shadow">

          <form>

            <div className="mb-4">

              <label className="block mb-2 font-semibold">

                Upload TXT File

              </label>

              <input
                type="file"
                accept=".txt"
                className="border p-3 rounded w-full"
              />

            </div>

            <button
              type="submit"
              className="bg-green-600 text-white px-5 py-2 rounded-lg"
            >
              Save File
            </button>

          </form>

        </div>

      ) : (

        <div className="bg-white rounded-xl shadow p-10 text-center text-gray-500">

          No TXT Files Uploaded

        </div>

      )}

    </div>

  );

}

export default Calculator;