import React, { useState, useEffect } from "react";
import "./UserForm.css";

function UserForm({ onSubmit, selectedUser }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: "",
  });

  useEffect(() => {
    if (selectedUser) {
      setFormData(selectedUser);
    }
  }, [selectedUser]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ firstName: "", lastName: "", email: "", department: "" });
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <input name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
      <input name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
      <input name="email" placeholder="Email" type="email" value={formData.email} onChange={handleChange} required />
      <input name="department" placeholder="Department" value={formData.department} onChange={handleChange} required />
      <button type="submit">{selectedUser ? "Update" : "Add"} User</button>
    </form>
  );
}

export default UserForm;
