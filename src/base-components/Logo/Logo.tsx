import modele from '../../images/svg/modele.svg';
import * as S from './styles';

export default function Logo({ width, height }) {
  return (
    <S.LogoContainer>
      <S.Logo src={modele} alt="Logo" width={width} height={height} />
    </S.LogoContainer>
  );
}
