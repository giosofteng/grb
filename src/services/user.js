export const setUserStorage = (user) => localStorage.setItem("user", user);

export const getUserStorage = () => localStorage.getItem("user");

export const removeUserStorage = () => localStorage.removeItem("user");
