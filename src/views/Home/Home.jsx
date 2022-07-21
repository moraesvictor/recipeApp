import React from 'react';
import * as S from './Home.styles';
import {ICONS} from '../../images/index';

import { Card } from '../../components/Card';
import { Header } from '../../components/Header';


export const Home = () => {
  return (
    <S.Wrapper>
      <Header svg={ICONS['search-icon']} inputPlaceHolder="Pesquise aqui"/>
      <Card
        title="Receitas"
        srcImg="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
        description="Receitas de bolo, tortas, doces e muito mais!"
      />
    </S.Wrapper>
  );
};
