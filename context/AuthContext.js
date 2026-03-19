import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

const MOCK_USERS = [
  { id: 1, name: "Nguyen Van A", email: "a@gmail.com", password: "123456" },
  { id: 2, name: "Rakibul Hasan", email: "rakib@gmail.com", password: "123456" },
];

export function AuthProvider({ children }) {
  const [user, setUser]   = useState(null);
  const [users, setUsers] = useState(MOCK_USERS);
  const [error, setError] = useState("");

  const login = (email, password) => {
    setError("");
    const found = users.find(
      u => u.email.toLowerCase() === email.toLowerCase() && u.password === password
    );
    if (found) { setUser(found); return true; }
    setError("Email hoặc mật khẩu không đúng!");
    return false;
  };

  const register = (name, email, password) => {
    setError("");
    if (!name.trim() || !email.trim() || !password.trim()) {
      setError("Vui lòng điền đầy đủ thông tin!"); return false;
    }
    if (password.length < 6) {
      setError("Mật khẩu phải có ít nhất 6 ký tự!"); return false;
    }
    if (users.find(u => u.email.toLowerCase() === email.toLowerCase())) {
      setError("Email đã được sử dụng!"); return false;
    }
    const newUser = { id: users.length + 1, name, email, password };
    setUsers(prev => [...prev, newUser]);
    setUser(newUser);
    return true;
  };

  const logout = () => { setUser(null); setError(""); };
  const clearError = () => setError("");

  return (
    <AuthContext.Provider value={{ user, login, register, logout, error, clearError }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);