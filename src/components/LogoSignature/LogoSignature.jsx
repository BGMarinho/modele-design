import * as S from './styles';
import Logo from '@/src/base-components/Logo';
import Signature from '@/src/base-components/Signature/Signature';

export default function LogoSignature() {
  return (
    <S.LogoSignatureContainer>
      <Logo width={200} height={150} />
      <Signature>Modèle</Signature>
    </S.LogoSignatureContainer>
  );
}
