import styled from 'styled-components';
import { lotrblack } from '../../constants/styles'

export const Container = styled.div`
  width: 100%;
  z-index: 100;
  height: 60px;
  background-color: #fff;
  box-shadow: ${`0 10px 20px 0 rgba(0, 0, 0, 0.1)`};
  display: flex;
  align-items: center;
  box-sizing: border-box;

  ul {
    font-size: 18px;
    list-style: none;
    display: flex;
    margin: 0px;
    padding: 0px;

    li {
      margin-left: 20px;
      a {
        color: ${lotrblack};
        text-decoration: none;
      }
    }
  }
`;
