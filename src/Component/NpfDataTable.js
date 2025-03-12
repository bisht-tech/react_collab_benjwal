import React from "react";
import "./NpfDataTable.css"; // Import CSS file

const NpfDataTable = ({ tableData, editHandler }) => {
  return (
    <div className="table-container">
      <h3 className="mt-5">Submitted Data</h3>
      <table className="table table-bordered table-striped mt-3">
        <thead className="table-dark">
          <tr>
            <th>No.</th>
            <th>Address</th>
            <th>Contact</th>
            <th>Financial Year</th>
            <th>NPF Name</th>
            <th>Mailing Address</th>
            <th>NPF Type</th>
            <th>File Upload</th>
            <th>Remarks</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tableData.length > 0 ? (
            tableData.map((data, index) => (
              <tr key={index}>
                <td data-label="No.">{index + 1}</td>
                <td data-label="Address">{data.address}</td>
                <td data-label="Contact">{data.contactNo}</td>
                <td data-label="Financial Year">{data.financialYear}</td>
                <td data-label="NPF Name">{data.npfName}</td>
                <td data-label="Mailing Address">{data.mailingAddress}</td>
                <td data-label="NPF Type">{data.npfType}</td>
                <td data-label="File Upload">{data.fileUpload ? data.fileUpload.name : "No file"}</td>
                <td data-label="Remarks">{data.remarks}</td>
                <td data-label="Actions">
                  <button onClick={() => editHandler(index)} className="btn btn-warning">
                    Edit
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="10" className="text-center">No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default NpfDataTable;
