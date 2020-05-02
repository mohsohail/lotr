import styled from 'styled-components';
import { background1 } from '../../../constants/styles';

export const Page = styled.div``;
export const ContainerTwoColumn = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  margin: 30px 60px;
`;

export const ContainerThreeColumn = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  margin: 30px 60px;
`;

export const LeftSection = styled.div`
  /* height: 500px; */
`;
export const MiddleSection = styled.div`
  /* height: 100%; */
`;
export const RightSection = styled.div`
  background-color: ${background1};
  /* height: 500px; */
  /* border-radius: 6px; */
  margin-left: 40px;
`;

export const Table = styled.table`
  border: 1px solid;
`;
