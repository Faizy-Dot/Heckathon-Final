import React, { useState } from "react";

const StaffForm = () => {
  const [token, setToken] = useState("");
  const [beneficiaryInfo, setBeneficiaryInfo] = useState(null);
  const [status, setStatus] = useState("In Progress");
  const [remarks, setRemarks] = useState("");

  const fetchBeneficiaryInfo = () => {
    // Mock fetching data based on the token
    setBeneficiaryInfo({
      name: "John Doe",
      age: 45,
      assistanceType: "Financial Aid",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ token, status, remarks });
    alert("Assistance details updated successfully!");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f9fafb",
        padding: "1rem",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "600px",
          backgroundColor: "#ffffff",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
          padding: "1.5rem",
        }}
      >
        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: "600",
            marginBottom: "1rem",
            color: "#374151",
          }}
        >
          Department Staff Form
        </h2>
        <form onSubmit={handleSubmit} style={{ display: "grid", gap: "1rem" }}>
          <div>
            <label
              style={{
                display: "block",
                fontSize: "0.875rem",
                fontWeight: "500",
                marginBottom: "0.5rem",
                color: "#6b7280",
              }}
            >
              Scan Token
            </label>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <input
                type="text"
                value={token}
                onChange={(e) => setToken(e.target.value)}
                placeholder="Enter token"
                required
                style={{
                  flex: "1",
                  padding: "0.5rem",
                  border: "1px solid #d1d5db",
                  borderRadius: "4px",
                }}
              />
              <button
                type="button"
                onClick={fetchBeneficiaryInfo}
                style={{
                  padding: "0.5rem 1rem",
                  backgroundColor: "#3b82f6",
                  color: "#ffffff",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Retrieve Info
              </button>
            </div>
          </div>

          {beneficiaryInfo && (
            <div
              style={{
                padding: "1rem",
                backgroundColor: "#f3f4f6",
                border: "1px solid #d1d5db",
                borderRadius: "4px",
              }}
            >
              <p style={{ fontSize: "0.875rem", color: "#374151" }}>
                <strong>Name:</strong> {beneficiaryInfo.name}
              </p>
              <p style={{ fontSize: "0.875rem", color: "#374151" }}>
                <strong>Age:</strong> {beneficiaryInfo.age}
              </p>
              <p style={{ fontSize: "0.875rem", color: "#374151" }}>
                <strong>Assistance Type:</strong> {beneficiaryInfo.assistanceType}
              </p>
            </div>
          )}

          <div>
            <label
              style={{
                display: "block",
                fontSize: "0.875rem",
                fontWeight: "500",
                marginBottom: "0.5rem",
                color: "#6b7280",
              }}
            >
              Update Status
            </label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              style={{
                width: "100%",
                padding: "0.5rem",
                border: "1px solid #d1d5db",
                borderRadius: "4px",
              }}
            >
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>

          <div>
            <label
              style={{
                display: "block",
                fontSize: "0.875rem",
                fontWeight: "500",
                marginBottom: "0.5rem",
                color: "#6b7280",
              }}
            >
              Remarks
            </label>
            <textarea
              value={remarks}
              onChange={(e) => setRemarks(e.target.value)}
              placeholder="Enter remarks or actions taken"
              rows={4}
              style={{
                width: "100%",
                padding: "0.5rem",
                border: "1px solid #d1d5db",
                borderRadius: "4px",
              }}
            ></textarea>
          </div>

          <div style={{ textAlign: "right" }}>
            <button
              type="submit"
              style={{
                padding: "0.5rem 1rem",
                backgroundColor: "#3b82f6",
                color: "#ffffff",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Update Assistance
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StaffForm;

