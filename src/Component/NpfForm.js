import React from "react";
import "./NpfForm.css"; // Import CSS file
import NpfButton from "./NpfButton";

const NpfForm = ({ formData, handleInputChange, handleFileUpload, errors, handleSave, handleModify  }) => {
  return (
    <div className="container text-center">
      <div className="row">
        {/* Left Column */}
        <div className="col">
          <input
            type="text"
            name="npfName"
            value={formData.npfName}
            onChange={handleInputChange}
            placeholder="NPF Name"
          />

          <input
            type="text"
            name="financialYear"
            value={formData.financialYear}
            onChange={handleInputChange}
            placeholder="Financial Year"
          />

          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            placeholder="Address"
          />

          <input
            type="file"
            name="fileUpload"
            onChange={handleFileUpload}
          />
        </div>

        {/* Right Column */}
        <div className="col">
          <input
            type="text"
            name="npfType"
            value={formData.npfType}
            onChange={handleInputChange}
            placeholder="NPF Type"
          />

          <input
            type="text"
            name="mailingAddress"
            value={formData.mailingAddress}
            onChange={handleInputChange}
            placeholder="Mailing Address"
          />
          {errors.mailingAddress && (
            <p className="text-red-500">{errors.mailingAddress}</p>
          )}

          <input
            type="text"
            name="contactNo"
            value={formData.contactNo}
            onChange={handleInputChange}
            placeholder="Contact No"
          />
          {errors.contactNo && (
            <p className="text-red-500">{errors.contactNo}</p>
          )}

          <textarea
            name="remarks"
            value={formData.remarks}
            onChange={handleInputChange}
            placeholder="Remarks"
          />
        </div>
      </div>
      <div className="npf-button-container">
        <NpfButton handleSave={handleSave} handleModify={handleModify}/>
      </div>
    </div>
  );
};

export default NpfForm;
