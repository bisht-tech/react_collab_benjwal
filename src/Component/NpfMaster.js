import React, { useState } from "react";
import NpfForm from "./NpfForm";
import NpfButton from "./NpfButton";
import NpfDataTable from "./NpfDataTable";
import "./NpfMaster.css"; // Import External CSS

export const NpfMaster = () => {

  const [formData, setFormData] = useState({
    npfName: "",
    npfType: "",
    financialYear: "",
    mailingAddress: "",
    address: "",
    contactNo: "",
    remarks: "",
    fileUpload: null,
  });

  const [errors, setErrors] = useState({});
  const [tableData, setTableData] = useState([]);
  const [currentRow, setCurrentRow] = useState(null);

  const validate = () => {
    let newErrors = {};

    if (!formData.mailingAddress.trim()) {
      newErrors.mailingAddress = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.mailingAddress)) {
      newErrors.mailingAddress = "Invalid email format";
    }

    if (!formData.contactNo.trim()) {
      newErrors.contactNo = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.contactNo)) {
      newErrors.contactNo = "Phone number must be exactly 10 digits";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setFormData((prevState) => ({ ...prevState, fileUpload: file }));
  };

  const handleSave = () => {
    if (validate()) {
      setTableData([...tableData, formData]);
      setFormData({
        npfName: "",
        npfType: "",
        financialYear: "",
        mailingAddress: "",
        address: "",
        contactNo: "",
        remarks: "",
        fileUpload: null,
      });
    }
  };

  const handleModify = () => {
    if (currentRow !== null) {
      const updatedTableData = [...tableData];
      updatedTableData[currentRow] = { ...formData };
      setTableData(updatedTableData);
      setCurrentRow(null);
      setFormData({
        npfName: "",
        npfType: "",
        financialYear: "",
        mailingAddress: "",
        address: "",
        contactNo: "",
        remarks: "",
        fileUpload: null,
      });
    }
  };

  const editHandler = (index) => {
    setCurrentRow(index);
    setFormData({ ...tableData[index] });
  };

  return (
    <div className="npf-master-container">
      <h1 className="npf-title bg-info text-white p-3">NPF Master</h1>
      <NpfForm formData={formData} handleInputChange={handleInputChange} handleFileUpload={handleFileUpload} errors={errors} />
      <NpfButton handleSave={handleSave} handleModify={handleModify} />
      <div className="npf-table-container">
        <NpfDataTable tableData={tableData} editHandler={editHandler} />
      </div>
    </div>
  );
};

export default NpfMaster;
