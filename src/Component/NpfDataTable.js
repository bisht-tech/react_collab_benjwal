import React from "react";

const NpfDataTable = ({ tableData, editHandler }) => {
  console.log("table data printing",tableData);
  return (
    <div>
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
            <th>edit button</th>
          </tr>
        </thead>
        <tbody>
          {tableData.length > 0 ? (
            tableData.map((data, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{data.address}</td>
                <td>{data.contactNo}</td>
                <td>{data.financialYear}</td>
                <td>{data.npfName}</td>
                <td>{data.mailingAddress}</td>
                <td>{data.npfType}</td>
                <td>{data.fileUpload ? data.fileUpload.name : "NO fie found"}</td>
                <td>{data.remarks}</td>
                <td>
                  <button onClick={() => editHandler(index)}>
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
