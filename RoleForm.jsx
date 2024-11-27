import React, { useState } from "react";

const RoleForm = ({ permissions, role, onSave, onCancel }) => {
  const [formData, setFormData] = useState(
    role || { name: "", permissions: [] }
  );
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Role name is required";
    if (formData.permissions.length === 0)
      newErrors.permissions = "At least one permission is required";
    return newErrors;
  };

  const handleNameChange = (e) => {
    setFormData({ ...formData, name: e.target.value });
    setErrors({ ...errors, name: "" });
  };

  const handlePermissionChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prevState) => {
      const updatedPermissions = checked
        ? [...prevState.permissions, value]
        : prevState.permissions.filter((perm) => perm !== value);
      return { ...prevState, permissions: updatedPermissions };
    });
    setErrors({ ...errors, permissions: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      onSave(formData);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Role Name:</label>
        <input
          className={`form-control ${errors.name ? "is-invalid" : ""}`}
          name="name"
          value={formData.name}
          onChange={handleNameChange}
        />
        {errors.name && <div className="invalid-feedback">{errors.name}</div>}
      </div>
      <div className={`form-group ${errors.permissions ? "is-invalid" : ""}`}>
        <label>Permissions:</label>
        {permissions.map((perm) => (
          <div className="form-check" key={perm}>
            <input
              className="form-check-input"
              type="checkbox"
              value={perm}
              checked={formData.permissions.includes(perm)}
              onChange={handlePermissionChange}
            />
            <label className="form-check-label">{perm}</label>
          </div>
        ))}
        {errors.permissions && (
          <div className="text-danger">{errors.permissions}</div>
        )}
      </div>
      <button type="submit" className="btn btn-success mr-2">
        Save
      </button>
      <button type="button" className="btn btn-secondary" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
};

export default RoleForm;
