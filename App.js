import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./styles.css";
import { ToastContainer } from "react-toastify";
import {
  users as initialUsers,
  roles as initialRoles,
  permissions,
} from "./data/data";
import UserManagement from "./components/UserManagement";
import RoleManagement from "./components/RoleManagement";

const App = () => {
  const [users, setUsers] = useState(initialUsers);
  const [roles, setRoles] = useState(initialRoles);
  const [selectedMenu, setSelectedMenu] = useState("users");

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          RBAC Dashboard
        </a>
        <div className="navbar-nav">
          <a
            className={`nav-item nav-link ${
              selectedMenu === "users" ? "active" : ""
            }`}
            href="#"
            onClick={() => setSelectedMenu("users")}
          >
            User Management
          </a>
          <a
            className={`nav-item nav-link ${
              selectedMenu === "roles" ? "active" : ""
            }`}
            href="#"
            onClick={() => setSelectedMenu("roles")}
          >
            Role Management
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mt-4">
        {selectedMenu === "users" ? (
          <UserManagement
            users={users}
            roles={roles}
            setUsers={setUsers}
            permissions={permissions}
          />
        ) : (
          <RoleManagement
            roles={roles}
            setRoles={setRoles}
            permissions={permissions}
          />
        )}
      </div>

      {/* Toast Container */}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default App;
