import styled from 'styled-components';

export const SectionTopMovies = styled.section`
  margin-bottom: 20px;
`;

export const ListTopMovies = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  & a {
    display: inline-block;
    width: 100%;
    text-decoration: none;
    color: grey;
    &:hover {
      color: black;
    }
  }
`;

export const TopMovieItem = styled.li`
  margin-bottom: 10px;
  background-color: #fff;
  border-radius: 4px;
  width: 25%;
  &:hover {
    background-color: orange;
    cursor: pointer;
  }
`;
