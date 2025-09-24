import React from "react";
import "./UserList.css";

function UserList({ users, onEdit, onDelete }) {
  return (
    <div className="user-list">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.firstName || u.name?.split(" ")[0]}</td>
              <td>{u.lastName || u.name?.split(" ")[1]}</td>
              <td>{u.email}</td>
              <td>{u.department || "N/A"}</td>
              <td>
                <button className="edit-btn" onClick={() => onEdit(u)}>Edit</button>
                <button className="delete-btn" onClick={() => onDelete(u.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
