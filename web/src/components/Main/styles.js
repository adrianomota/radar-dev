import styled from 'styled-components';

import { darken } from 'polished';

export const MainCard = styled.main`
  flex: 1;
  margin-left: 30px;

  @media (max-width: 650px) {
    ul {
      grid-template-columns: 1fr;
    }
  }
`;

export const Dev = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  list-style: none;
`;
export const DevItem = styled.li`
  background: #fff;
  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.02);
  border-radius: 2px;
  padding: 20px;

  header {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  p {
    color: #666;
    font-size: 14px;
    line-height: 20px;
    margin: 10px;
  }

  a {
    color: #8e4dff;
    font-size: 14px;
    text-decoration: none;

    transition: color 0.3s;
    &:hover {
      color: ${darken(0.09, '#8e4dff')};
    }
  }
`;
export const Avatar = styled.img`
  width: 54px;
  height: 54px;
  border-radius: 50%;
`;
export const UserInfo = styled.div`
  margin-left: 10px;

  strong {
    display: block;
    font-size: 16px;
    color: #333;
  }

  span {
    font-size: 13px;
    color: #999;
    margin-top: 2px;
  }
`;
