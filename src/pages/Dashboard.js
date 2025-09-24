import React, { useEffect, useState } from "react";
import { getUsers, addUser, updateUser, deleteUser } from "../api/userService";
import UserList from "../components/UserList/UserList";
import UserForm from "../components/UserForm/UserForm";
import Pagination from "../components/Pagination/Pagination";
import SearchFilter from "../components/SearchFilter/SearchFilter";
import "./Dashboard.css"

function Dashboard() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const data = await getUsers();
    setUsers(data);
  };


  const handleAddOrUpdate = async (user) => {
  if (selectedUser) {
    const updatedUser = await updateUser(selectedUser.id, user);
    setUsers((prev) =>
      prev.map((u) => (u.id === selectedUser.id ? updatedUser : u))
    );
    setSelectedUser(null);
  } else {
    const newUser = await addUser(user);
    // Add new user to state immediately
    setUsers((prev) => [...prev, { ...newUser, id: prev.length + 1 }]);
  }
};


  const handleDelete = async (id) => {
  await deleteUser(id); // API call (simulated)
  setUsers((prev) => prev.filter((user) => user.id !== id)); //  remove from state
};


  // Search Filter
  const filteredUsers = users.filter((u) =>
    (u.name || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
    (u.email || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
    (u.department || "").toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination
  const indexOfLast = currentPage * usersPerPage;
  const indexOfFirst = indexOfLast - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirst, indexOfLast);

  return (
    <div className="dashboard">
      <div  className="dashboard-header">
        <h1>User Management Dashboard</h1>
      </div>
      
      <UserForm onSubmit={handleAddOrUpdate} selectedUser={selectedUser} />
      <SearchFilter searchTerm={searchTerm} onSearch={setSearchTerm} />
      <UserList users={currentUsers} onEdit={setSelectedUser} onDelete={handleDelete} />
      <Pagination
        totalUsers={filteredUsers.length}
        usersPerPage={usersPerPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}

export default Dashboard;
