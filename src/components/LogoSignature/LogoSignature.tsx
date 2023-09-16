import React from 'react';
import Logo from '../../base-components/Logo';
import Signature from '../../base-components/Signature';
import * as S from './styles';

export default function LogoSignature() {
  return (
    <S.LogoSignatureContainer>
      <Logo width={200} height={150} />
      <Signature>Modèle</Signature>
    </S.LogoSignatureContainer>
  );
}
