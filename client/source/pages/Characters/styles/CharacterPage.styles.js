import styled from 'styled-components';

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
  margin-left: 40px;
`;

export const Table = styled.table`
  border: 1px solid;
`;

export const QuoteListContainer = styled.div`
  height: 1200px;
  overflow: auto;
`;

export const QuoteListItem = styled.div`
  font-size: 16px;
  padding: 10px 10px;
  cursor: pointer;

  &:hover {
    background: ${(props) => (props.highlight ? '#f5f5f5' : 'initial')};
    font-weight: ${(props) => (props.highlight ? 'bold' : 'normal')};
  }
`;
