import styled from 'styled-components';
import { darken } from 'polished';

export const Aside = styled.aside`
  width: 320px;
  background: #fff;
  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.02);
  border-radius: 2px;
  padding: 30px 20px;

  strong {
    display: block;
    font-size: 20px;
    text-align: center;
    color: #333;
  }

  form {
    margin-top: 30px;

    div + div {
      margin-top: 30px;
    }

    div div {
      margin-top: 0;
    }

    button {
      width: 100%;
      border: 0;
      margin-top: 30px;
      background: #7d40e7;
      color: #fff;
      font-size: 16px;
      font-weight: bold;
      cursor: pointer;
      border-radius: 2px;
      padding: 15px 20px;
      transition: background 0.5s;
      &:hover {
        background: ${darken(0.03, '#7d40e7')};
      }
    }
  }
`;

export const InputBlock = styled.div`
  label {
    display: block;
    color: #acacac;
    font-size: 14px;
    font-weight: bold;
  }

  input {
    width: 100%;
    height: 32px;
    font-size: 14px;
    color: #666;
    border: 0;
    border-bottom: 1px solid #eee;
  }
`;

export const InputGroup = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr;
  margin-top: 20px;
`;
