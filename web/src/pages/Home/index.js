import React from 'react';

import { Container } from './styles';
import Aside from '../../components/Side';
import Main from '../../components/Main';

export default function Home() {
  return (
    <Container>
      <Aside />
      <Main />
    </Container>
  );
}
