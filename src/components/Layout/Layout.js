import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header, Navigation, NavItem, Main } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <Header>
        <Navigation>
          <ul>
            <NavItem>
              <NavLink to="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/movies">Movies</NavLink>
            </NavItem>
          </ul>
        </Navigation>
      </Header>
      <Main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Main>
    </>
  );
};
