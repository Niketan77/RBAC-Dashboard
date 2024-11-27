export const users = [
  {
    id: 1,
    name: "Niketan Choudhari",
    email: "niketan@gmail.com",
    role: "Admin",
    status: "Active",
  },
  {
    id: 2,
    name: "Kunal Shah",
    email: "kunal123@outlook.com",
    role: "Editor",
    status: "Active",
  },
  // Add more sample users as needed
];

export const roles = [
  {
    id: 1,
    name: "Admin",
    permissions: ["create", "read", "update", "delete"],
  },
  {
    id: 2,
    name: "Editor",
    permissions: ["read", "update"],
  },
  // Add more sample roles as needed
];

export const permissions = [
  "create",
  "read",
  "update",
  "delete",
  "publish",
  "approve",
];
