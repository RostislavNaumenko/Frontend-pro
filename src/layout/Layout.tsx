import { NavLink, Outlet } from "react-router-dom";
import styles from "./layout.module.css";

const Layout = () => {
  return (
    <div className={styles.pageWrapper}>
      <header className={styles.header}>
        <NavLink
          className={({ isActive }) => (isActive ? styles.linkActive : "")}
          to={"/"}
        >
          Lessons
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? styles.linkActive : "")}
          to={"fetch-dog"}
        >
          Dog API
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? styles.linkActive : "")}
          to={"counter"}
        >
          Counter
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? styles.linkActive : "")}
          to={"feedback"}
        >
          Feedback
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? styles.linkActive : "")}
          to={"my-form"}
        >
          MyForm
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? styles.linkActive : "")}
          to={"robot-form"}
        >
          RobotForm
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? styles.linkActive : "")}
          to={"shop"}
        >
          Shop
        </NavLink>
      </header>
      <main className={styles.main}>
        {/* за место компонента outlet импортированного из библиотеки react-router-dom будут приходить компоненты из routing, чьи пути мы пропишем в index.tsx */}
        <Outlet />
        {/* здесь мог бы быть (и будет)  ваш компонент */}
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Layout;
