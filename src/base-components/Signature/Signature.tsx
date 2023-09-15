import React from 'react';
import * as S from './styles';

export default function Signature({ children }) {
  return (
    <S.SignatureContainer>
      <S.Signature>{children}</S.Signature>
    </S.SignatureContainer>
  );
}
