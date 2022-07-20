import React from 'react';

import { Card } from '../../components/Card';

export const Home = () => {
  return (
    <S.Wrapper>
      <Card
        title="Receitas"
        srcImg="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
        description="Receitas de bolo, tortas, doces e muito mais!"
      />
    </S.Wrapper>
  );
};
