import React from 'react';
import * as S from './styles';
import { BannerProps } from './interfaces';

export default function Banner({ src, alt }: BannerProps) {
  return (
    <S.BannerContainer>
      <S.Banner src={src} alt={alt} />
    </S.BannerContainer>
  );
}

// Dumb component prepared for easy use, only passing its "src" and "alt" values.
