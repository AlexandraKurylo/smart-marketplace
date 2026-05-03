import type { Dispatch, SetStateAction } from "react";
import type { THEME_ENUM } from "./global.enums";

export interface IUser {
  id: string | number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
}

export interface IAuthContext {
  isAuth: boolean;
  user: IUser | null;
  login: (userData: IUser) => void;
  logout: () => void;
  register: (newUser: IUser) => void;
}

export interface IThemeContext {
  theme: THEME_ENUM;
  setTheme: Dispatch<SetStateAction<THEME_ENUM>>;
}
