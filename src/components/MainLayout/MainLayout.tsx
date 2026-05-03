import { Outlet } from "react-router-dom";
import cls from "./MainLayout.module.css";
import { Header } from "../Header";
import { ToastContainer } from "react-toastify";

export const MainLayout = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className={cls.mainLayout}>
        <Header />
        <div className={cls.mainWrapper}>
          <main className={cls.main}>
            <Outlet></Outlet>
          </main>
          <footer className={cls.footer}>
            Recipe Catalog | {currentYear} <br />
            by Alexandra Kurylo
          </footer>
        </div>
      </div>

      <ToastContainer />
    </>
  );
};
