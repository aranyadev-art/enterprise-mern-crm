function CADForm({

  cadData,
  handleChange,
  handleSubmit,
  setShowForm,

}) {

  return (

    <div className="cad-form">

      <form
        onSubmit={handleSubmit}
        className="cad-form-grid"
      >

        <div className="cad-form-group">

          <label>
            Start Time
          </label>

          <input
            type="datetime-local"
            name="startTime"
            value={cadData.startTime}
            onChange={handleChange}
            required
          />

        </div>

        <div className="cad-form-group">

          <label>
            End Time
          </label>

          <input
            type="datetime-local"
            name="endTime"
            value={cadData.endTime}
            onChange={handleChange}
            required
          />

        </div>

        <div className="cad-form-group full-width">

          <label>
            Upload Design
          </label>

          <input
            type="file"
          />

        </div>

        <div className="cad-form-group full-width">

          <label>
            Comment
          </label>

          <textarea
            name="comment"
            value={cadData.comment}
            onChange={handleChange}
            rows="4"
          />

        </div>

        <div className="cad-form-group">

          <label>
            Status
          </label>

          <select
            name="status"
            value={cadData.status}
            onChange={handleChange}
          >

            <option>
              Pending
            </option>

            <option>
              In Progress
            </option>

            <option>
              Completed
            </option>

          </select>

        </div>

        <div className="checkbox-group">

          <input
            type="checkbox"
            name="cpxSent"
            checked={cadData.cpxSent}
            onChange={handleChange}
          />

          <label>
            CPX Sent
          </label>

        </div>

        <div className="form-buttons full-width">

          <button
            type="submit"
            className="save-btn"
          >
            Save CAD
          </button>

          <button
            type="button"
            onClick={() => setShowForm(false)}
            className="cancel-btn"
          >
            Cancel
          </button>

        </div>

      </form>

    </div>

  );

}

export default CADForm;