import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { LuUser, LuShoppingCart, LuHeart } from "react-icons/lu";
import cls from "./Header.module.css";
import { ThemeToggler } from "../../features/ThemeToggler";

export const Header = () => {
  const navigate = useNavigate();
  const { isAuth, user, logout } = useAuth();

  return (
    <header className={cls.header}>
      <div className={cls.container}>
        <Link to="/" className={cls.logo}>
          Smart<span>Shop</span>
        </Link>

        <div className={cls.actions}>
          <ThemeToggler />
          <div className={cls.actionItem} onClick={() => !isAuth && navigate("/login")}>
            <LuUser size={26} className={cls.icon} />
            <span className={cls.actionLabel}>
              {isAuth ? (
                <>
                  {user?.firstName}
                  <button onClick={logout} className={cls.exitBtn}>
                    (Exit)
                  </button>
                </>
              ) : (
                "Sign In"
              )}
            </span>
          </div>
          <Link to="/wishlist" className={cls.actionItem}>
            <LuHeart size={26} className={cls.icon} />
            <span className={cls.actionLabel}>Wishlist</span>
          </Link>
          <Link to="/cart" className={cls.actionItem}>
            <div className={cls.cartWrapper}>
              <LuShoppingCart size={26} className={cls.icon} />
              <span className={cls.badge}>0</span>
            </div>
            <span className={cls.actionLabel}>Cart</span>
          </Link>
        </div>
      </div>
    </header>
  );
};
