import React from 'react';
import { SignatureProps } from './interfaces';
import * as S from './styles';

export default function Signature({ children }: SignatureProps) {
  return (
    <S.SignatureContainer>
      <S.Signature>{children}</S.Signature>
    </S.SignatureContainer>
  );
}
