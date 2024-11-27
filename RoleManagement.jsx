import React, { useState } from "react";
import { toast } from "react-toastify";
import RoleList from "./RoleList";
import RoleForm from "./RoleForm";

const RoleManagement = ({ roles, setRoles, permissions }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [currentRole, setCurrentRole] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddRole = () => {
    setCurrentRole(null);
    setIsEditing(true);
  };

  const handleEditRole = (role) => {
    setCurrentRole(role);
    setIsEditing(true);
  };

  const handleDeleteRole = (id) => {
    try {
      setRoles(roles.filter((role) => role.id !== id));
      toast.error("Role deleted successfully");
    } catch (error) {
      console.error("Error deleting role:", error);
      toast.error("An error occurred while deleting the role");
    }
  };

  const handleSaveRole = (role) => {
    try {
      if (role.id) {
        setRoles(roles.map((r) => (r.id === role.id ? role : r)));
        toast.success("Role updated successfully");
      } else {
        role.id = roles.length + 1;
        setRoles([...roles, role]);
        toast.success("Role added successfully");
      }
      setIsEditing(false);
    } catch (error) {
      console.error("Error saving role:", error);
      toast.error("An error occurred while saving the role");
    }
  };

  return (
    <div>
      <h2>Role Management</h2>
      {isEditing ? (
        <RoleForm
          permissions={permissions}
          role={currentRole}
          onSave={handleSaveRole}
          onCancel={() => setIsEditing(false)}
        />
      ) : (
        <>
          <div className="mb-3">
            <button className="btn btn-primary mr-2" onClick={handleAddRole}>
              Add Role
            </button>
            <input
              type="text"
              className="form-control"
              placeholder="Search roles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ maxWidth: "300px", display: "inline-block" }}
            />
          </div>
          <RoleList
            roles={roles}
            searchTerm={searchTerm}
            onEdit={handleEditRole}
            onDelete={handleDeleteRole}
          />
        </>
      )}
    </div>
  );
};

export default RoleManagement;
