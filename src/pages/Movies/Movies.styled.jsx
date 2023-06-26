import styled from 'styled-components';

export const MoviesWrapper = styled.div`
  display: flex;
`;

export const SearchForm = styled.form`
  margin-right: 50px;
`;

export const NotFoundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NotFoundMessage = styled.p`
  color: red;
  font-weight: bold;
`;

export const SearchLabel = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const SearchInput = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
`;

export const MovieList = styled.ul`
  list-style: none;
  width: 100%;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
  & a{
    display: block;
    text-decoration: none;
    color: grey;
    text-align: center
    
  }
`;

export const MovieItem = styled.li`
  background-color: #fff;
  padding: 10px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  &:hover{
    background-color: orange;
    & a{
      color: black;
    }
  }
`;