import { useState } from "react";

const Reception = () => {
  const [formData, setFormData] = useState({
    cnic: "",
    name: "",
    phone: "",
    address: "",
    purpose: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (e) => {
    setFormData({ ...formData, purpose: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Form Data:", formData);
    alert("Token generated and sent via SMS!");
  };

  return (
    <div className="max-w-xl mx-auto mt-8 p-4 border rounded-lg shadow-md">
      <h1 className="text-xl font-bold mb-4">Reception Desk</h1>
      <div className="mb-4">
        <input
          type="text"
          name="cnic"
          placeholder="Enter CNIC"
          value={formData.cnic}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          name="name"
          placeholder="Enter Full Name"
          value={formData.name}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          name="phone"
          placeholder="Enter Phone Number"
          value={formData.phone}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          name="address"
          placeholder="Enter Address"
          value={formData.address}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <select
          name="purpose"
          value={formData.purpose}
          onChange={handleSelectChange}
          className="w-full p-2 border rounded"
        >
          <option value="" disabled>
            Select Purpose of Visit
          </option>
          <option value="Financial Aid">Financial Aid</option>
          <option value="Medical Assistance">Medical Assistance</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <button
        onClick={handleSubmit}
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
      >
        Generate Token
      </button>
    </div>
  );
};

export default Reception;
