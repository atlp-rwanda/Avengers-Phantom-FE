export const AllRoles = (user) => {
  return (
    process.env.OPERATOR_ROLE ||
    process.env.ADMIN_ROLE ||
    process.env.ADMIN_ROLE === user
  );
};

export const Admin = (user) => {
  return process.env.ADMIN_ROLE === user;
};
