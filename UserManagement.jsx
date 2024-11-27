import React, { useState } from "react";
import { toast } from "react-toastify";
import UserList from "./UserList";
import UserForm from "./UserForm";

const UserManagement = ({ users, roles, setUsers }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddUser = () => {
    setCurrentUser(null);
    setIsEditing(true);
  };

  const handleEditUser = (user) => {
    setCurrentUser(user);
    setIsEditing(true);
  };

  const handleDeleteUser = (id) => {
    try {
      setUsers(users.filter((user) => user.id !== id));
      toast.error("User deleted successfully");
    } catch (error) {
      console.error("Error deleting user:", error);
      toast.error("An error occurred while deleting the user");
    }
  };

  const handleSaveUser = (user) => {
    try {
      if (user.id) {
        setUsers(users.map((u) => (u.id === user.id ? user : u)));
        toast.success("User updated successfully");
      } else {
        user.id = users.length + 1;
        setUsers([...users, user]);
        toast.success("User added successfully");
      }
      setIsEditing(false);
    } catch (error) {
      console.error("Error saving user:", error);
      toast.error("An error occurred while saving the user");
    }
  };

  return (
    <div>
      <h2>User Management</h2>
      {isEditing ? (
        <UserForm
          roles={roles}
          user={currentUser}
          onSave={handleSaveUser}
          onCancel={() => setIsEditing(false)}
        />
      ) : (
        <>
          <div className="mb-3">
            <button className="btn btn-primary mr-2" onClick={handleAddUser}>
              Add User
            </button>
            <input
              type="text"
              className="form-control"
              placeholder="Search users..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ maxWidth: "300px", display: "inline-block" }}
            />
          </div>
          <UserList
            users={users}
            roles={roles}
            searchTerm={searchTerm}
            onEdit={handleEditUser}
            onDelete={handleDeleteUser}
          />
        </>
      )}
    </div>
  );
};

export default UserManagement;
