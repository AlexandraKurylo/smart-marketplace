import type { FC, ReactNode } from "react";
import { createContext, useState } from "react";
import { AUTH_STORAGE, USER_DATA_STORAGE, REGISTERED_USERS_KEY } from "../../constants/global.constants";
import type { IUser, IAuthContext } from "../../types/global.types";

export const AuthContext = createContext<IAuthContext | undefined>(undefined);

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuth, setIsAuth] = useState<boolean>(() => {
    return JSON.parse(localStorage.getItem(AUTH_STORAGE) || "false");
  });

  const [user, setUser] = useState<IUser | null>(() => {
    const savedUser = localStorage.getItem(USER_DATA_STORAGE);
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const login = (userData: IUser) => {
    setIsAuth(true);
    setUser(userData);
    localStorage.setItem(AUTH_STORAGE, "true");
    localStorage.setItem(USER_DATA_STORAGE, JSON.stringify(userData));
  };

  const logout = () => {
    setIsAuth(false);
    setUser(null);
    localStorage.removeItem(AUTH_STORAGE);
    localStorage.removeItem(USER_DATA_STORAGE);
  };

  const register = (newUser: IUser) => {
    const users = JSON.parse(localStorage.getItem(REGISTERED_USERS_KEY) || "[]");
    const isExist = users.some((u: IUser) => u.email === newUser.email || u.phone === newUser.phone);

    if (isExist) {
      throw new Error("Користувач з такими даними вже існує");
    }

    users.push(newUser);
    localStorage.setItem(REGISTERED_USERS_KEY, JSON.stringify(users));
  };

  return <AuthContext.Provider value={{ isAuth, user, login, logout, register }}>{children}</AuthContext.Provider>;
};
