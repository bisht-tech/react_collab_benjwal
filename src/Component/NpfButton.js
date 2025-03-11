import React from "react";

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
