import { NavLink, Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <nav>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/movies">Movies</NavLink></li>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
};
