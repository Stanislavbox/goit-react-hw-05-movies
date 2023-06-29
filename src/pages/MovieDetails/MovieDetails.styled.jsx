import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieDetailsWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

export const MovieImage = styled.img`
  width: 200px;
  height: auto;
  margin-right: 20px;
`;

export const MovieInfo = styled.div`
  flex-grow: 1;
`;

export const Genres = styled.p`
  font-weight: bold;
  margin-bottom: 10px;
`;

export const LinksWrapper = styled.div`
  margin-top: 20px;
`;

export const LinksList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
`;

export const LinkItem = styled.li`
  margin-right: 10px;
`;

export const GoBackLink = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  margin: 12px;
  background-color: rgb(51, 51, 51);
  color: rgb(255, 255, 255);
  text-decoration: none;
  font-weight: bold;
  height: 24px;
  line-height: 24px;
  border-radius: 12px;
  cursor: pointer;

  &:hover {
    color: black;
    background-color: orange;
    &:focus {
      outline: none;
      box-shadow: 0 0 0 2px black;
    }
  }
`;
