import { Outlet } from "react-router-dom";
import cls from "./MainLayout.module.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Header } from "../Header";

export const MainLayout = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className={cls.mainLayout}>
        <Header />

        <div className={cls.container}>
          <main className={cls.main}>
            <Outlet />
          </main>

          <footer className={cls.footer}>
            <div className={cls.footerContent}>
              <p>SmartShop | {currentYear}</p>
              <p className={cls.author}>Created by Alexandra Kurylo</p>
            </div>
          </footer>
        </div>
      </div>

      <ToastContainer position="bottom-right" autoClose={3000} theme="colored" />
    </>
  );
};
