import { NavLink, Outlet } from 'react-router-dom';
import styles from './Navigation.module.css';

export default function Navigation() {
  return (
    <>
      <header className={styles.header}>
        <nav>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
          >
            Home
          </NavLink>

          <NavLink
            to="movies"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
          >
            Movies
          </NavLink>
        </nav>
      </header>

      <Outlet />
    </>
  );
}
