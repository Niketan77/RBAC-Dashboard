import React, { useState } from "react";

const UserList = ({ users, roles, searchTerm, onEdit, onDelete }) => {
  const [sortConfig, setSortConfig] = useState({
    key: "name",
    direction: "ascending",
  });

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedUsers = [...filteredUsers].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === "ascending" ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === "ascending" ? 1 : -1;
    }
    return 0;
  });

  const requestSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const getClassNamesFor = (name) => {
    if (sortConfig.key !== name) {
      return;
    }
    return sortConfig.direction === "ascending" ? "sort-asc" : "sort-desc";
  };

  return (
    <div className="table-responsive">
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th
              onClick={() => requestSort("name")}
              className={getClassNamesFor("name")}
            >
              Name
            </th>
            <th
              onClick={() => requestSort("email")}
              className={getClassNamesFor("email")}
            >
              Email
            </th>
            <th
              onClick={() => requestSort("role")}
              className={getClassNamesFor("role")}
            >
              Role
            </th>
            <th
              onClick={() => requestSort("status")}
              className={getClassNamesFor("status")}
            >
              Status
            </th>
            <th>Permissions</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map((user) => {
            const userRole = roles.find((role) => role.name === user.role);
            const userPermissions = userRole
              ? userRole.permissions.join(", ")
              : "";
            return (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>{user.status}</td>
                <td>{userPermissions}</td>
                <td>
                  <button
                    className="btn btn-sm btn-info mr-2"
                    onClick={() => onEdit(user)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => onDelete(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
