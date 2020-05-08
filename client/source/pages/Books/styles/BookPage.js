import styled from 'styled-components';
import { background1 } from '../../../constants/styles';

export const Page = styled.div``;
export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  margin: 30px 60px;
`;

export const LeftSection = styled.div`
  /* height: 500px; */
  border-right: 1px solid rgba(0, 0, 0, 0.1);
`;
export const MiddleSection = styled.div`
  /* height: 100%; */
  border-right: 1px solid rgba(0, 0, 0, 0.1);
`;
export const RightSection = styled.div`
  background-color: ${background1};
  /* height: 500px; */
  /* border-radius: 6px; */
  margin-left: 40px;
`;

export const BookListSearchInput = styled.input`
  font-size: 16px;
  width: 250px;
  padding: 10px 25px;
  border: 1px solid #ddd;
  border-radius: 25px;
  background: #f8f8f8;
  outline: none;

  &:focus {
    background-color: #fff;
  }
`;

export const BookListItem = styled.div`
  font-size: 16px;
  padding: 10px 10px;
  cursor: pointer;

  &:hover {
    background: ${(props) => (props.highlight ? '#f5f5f5' : 'initial')};
    font-weight: ${(props) => (props.highlight ? 'bold' : 'normal')};
  }
`;

export const BookDetailsWrapper = styled.div`
  margin: 0px 20px;
`;

export const BookSelected = styled.div``;

export const BookTitle = styled.div`
  text-align: center;
  font-size: 24px;
  font-weight: bold;
`;

export const BookDescription = styled.div`
  font-size: 16px;
  margin-top: 20px;
`;

export const CharacterListItem = styled.div`
  font-size: 16px;
  padding: 10px 10px;
  cursor: pointer;

  &:hover {
    background: ${(props) => (props.highlight ? '#f5f5f5' : 'initial')};
    font-weight: ${(props) => (props.highlight ? 'bold' : 'normal')};
  }
`;

export const SeeMore = styled.div`
  font-size: 18px;
  padding: 10px;
  background: #ddd;
  text-align: center;
  cursor: pointer;
  a {
    color: #343434;
    text-decoration: none;
  }
`;

export const CharacterListHeader = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding: 10px;
  background: #ddd;
  text-align: center;
`;
