import styled from 'styled-components';
import { background1 } from '../../../constants/styles';

export const Page = styled.div``;
export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  margin: 30px 60px;
`;

export const LeftSection = styled.div`
  grid-area: 'left';
  /* height: 500px; */
`;
export const MiddleSection = styled.div`
  grid-area: 'middle';
  /* height: 100%; */
`;
export const RightSection = styled.div`
  grid-area: 'right';
  background-color: ${background1};
  /* height: 500px; */
  /* border-radius: 6px; */
  margin-left: 40px;
`;
