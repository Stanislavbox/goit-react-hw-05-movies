import styled from 'styled-components';

export const Header = styled.header`
  margin: 20px auto;
  border-radius: 20px;
  color: #fff;
  & ul {
    list-style: none;
  }
  & a {
    color: grey;
  }
  & .active {
    color: orange;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: left;
  align-items: center;
  background-color: black;
`;

export const NavItem = styled.li`
  color: #fff;
  text-decoration: none;
  margin-right: 20px;
  font-weight: bold;

  &:active {
    color: orange;
  }

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    text-decoration: underline;
  }
`;

export const Main = styled.main`
  padding: 20px;
  border-radius: 12px;
  background-color: darkgray;
`;
