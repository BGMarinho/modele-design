import React from 'react';
import type { ChildrenType } from '../../types/ChildrenType';
import * as S from './styles';

export default function Signature({ children }: ChildrenType) {
  return (
    <S.SignatureContainer>
      <S.Signature>{children}</S.Signature>
    </S.SignatureContainer>
  );
}
