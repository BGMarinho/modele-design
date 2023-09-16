import React from 'react';
import modele from '../../images/svg/modele.svg';
import * as S from './styles';
import { LogoProps } from './interfaces';

export default function Logo({ width, height }: LogoProps) {
  return (
    <S.LogoContainer>
      <S.Logo src={modele} alt="Logo" width={width} height={height} />
    </S.LogoContainer>
  );
}
