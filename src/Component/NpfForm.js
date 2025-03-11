import React from "react";

const NpfForm = ({ formData, handleInputChange, handleFileUpload, errors }) => {
  return (
    <div className="container text-center">
      <div className="row align-items-start">
        {/* Left Column */}
        <div className="col">
          <div className="col">
            <label>NPF Name</label>
            <input
              type="text"
              name="npfName"
              value={formData.npfName}
              onChange={handleInputChange}
            />
          </div>

          <div className="col">
            <label>Financial Year</label>
            <input
              type="text"
              name="financialYear"
              value={formData.financialYear}
              onChange={handleInputChange}
            />
          </div>

          <div className="col">
            <label>Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
            />
          </div>

          <div className="col">
            <label>File Upload</label>
            <input type="file" name="fileUpload" onChange={handleFileUpload} />
          </div>
        </div>

        {/* Right Column */}
        <div className="col">
          <div className="col">
            <label>NPF Type</label>
            <input
              type="text"
              name="npfType"
              value={formData.npfType}
              onChange={handleInputChange}
            />
          </div>

          <div className="col">
            <label>Mailing Address</label>
            <input
              type="text"
              name="mailingAddress"
              value={formData.mailingAddress}
              onChange={handleInputChange}
            />
            {errors.mailingAddress && (
              <p className="text-red-500 text-sm">{errors.mailingAddress}</p>
            )}
          </div>

          <div className="col">
            <label>Contact No</label>
            <input
              type="text"
              name="contactNo"
              value={formData.contactNo}
              onChange={handleInputChange}
            />
            {errors.contactNo && (
              <p className="text-red-500 text-sm">{errors.contactNo}</p>
            )}
          </div>

          <div className="col">
            <label>Remarks</label>
            <textarea
              name="remarks"
              value={formData.remarks}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NpfForm;
