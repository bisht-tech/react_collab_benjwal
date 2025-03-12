import React from "react";
import "./NpfButton.css"; // Import CSS file

const NpfButtons = ({ handleSave, handleModify }) => {
  return (
    <div className="row">
      <div className="col">
        <button onClick={handleSave} className="btn btn-success">
          Save
        </button>
      </div>
      <div className="col">
        <button onClick={handleModify} className="btn btn-primary">
          Modify
        </button>
      </div>
    </div>
  );
};

export default NpfButtons;
