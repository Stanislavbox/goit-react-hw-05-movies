import styled from 'styled-components';

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
`;

export const CastItem = styled.li`
  width: 200px;
  margin-bottom: 20px;
  text-align: center;
`;

export const ActorImage = styled.img`
  width: 150px;
  height: 225px;
  object-fit: cover;
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const ActorInfo = styled.div`
  font-size: 14px;
  line-height: 1.4;
`;
