import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 1000px) {
    flex-direction: column;

    main {
      margin-left: 0;
      margin-top: 30px;
    }

    aside {
      width: 100%;
    }
  }
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 30px;
`;
