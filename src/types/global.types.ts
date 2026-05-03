import type { Dispatch, SetStateAction } from "react";
import type { THEME_ENUM } from "./global.enums";

export interface IAuthContext {
  isAuth: boolean;
  setIsAuth: Dispatch<SetStateAction<boolean>>;
}

export interface IThemeContext {
  theme: THEME_ENUM;
  setTheme: Dispatch<SetStateAction<THEME_ENUM>>;
}
