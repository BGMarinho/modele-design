import React from 'react';
import modele from '../../images/svg/modele.svg';
import Image from 'next/image'
import * as S from './styles';
import { LogoProps } from './interfaces';

export default function Logo({ width, height }: LogoProps) {
  return (
    <S.LogoContainer>
      <Image src={modele} alt="Modele | Interiores & Flores" width={width} height={height} />
    </S.LogoContainer>
  );
}
