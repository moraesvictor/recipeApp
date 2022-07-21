import React from 'react';
import * as S from './Home.styles';
import {ICONS} from '../../images/index';

import { Header } from '../../components/Header';

const img = "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";

const mockedCardInfo = [
  {title: "receita", srcImg: img, description: "descrição super supimpa da receita"},
  {title: "receita", srcImg: img, description: "descrição super supimpa da receita"},
  {title: "receita", srcImg: img, description: "descrição super supimpa da receita"},
  {title: "receita", srcImg: img, description: "descrição super supimpa da receita"},
  {title: "receita", srcImg: img, description: "descrição super supimpa da receita"}
]


export const Home = () => {
  return (
    <S.Wrapper>
      <Header svg={ICONS['search-icon']} inputPlaceHolder="Pesquise aqui"/>
      <S.CardWrapper>
      {mockedCardInfo.map(cardInfo => {
        return (
          <S.Card 
          key={cardInfo.title}
          title={cardInfo.title} 
          srcImg={cardInfo.srcImg} 
          description={cardInfo.description}/>
          );
        })}
      </S.CardWrapper>
    </S.Wrapper>
  );
};
