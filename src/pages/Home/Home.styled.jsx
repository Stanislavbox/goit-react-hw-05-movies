import styled from 'styled-components';

export const SectionTopMovies = styled.section`
  margin-bottom: 20px;
`;

export const ListTopMovies = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  & a{
    display: inline-block;
    width: 100%;
    text-decoration: none;
    color: grey;
    &:hover{
      color: black;
    }

  }
`;

export const TopMovieItem = styled.li`
  margin-bottom: 10px;
  background-color: #fff;
  border-radius: 4px;
  width: 25%;
  &:hover{
    background-color: orange;
    cursor: pointer;
  }
`;

// export const SectionTopMovies = styled.section`
//   padding: 20px;
//   width: 1440px;
//   margin: 0 auto;
//   background-color: #fff;
// `;

// export const Title = styled.h1`
//   margin-bottom: 20px;
//   font-size: 40px;
//   font-weight: 700;
//   color: black;
// `;

// export const ListTopMovies = styled.ul`
//   display: flex;
//   flex-direction: column;
//   gap: 8px;
//   li {
//     font-size: 18px;
//     font-weight: 600;
//   }
// `;
