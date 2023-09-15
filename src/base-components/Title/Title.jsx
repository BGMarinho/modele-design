import * as S from './styles';

export default function Title({ children }) {
  return (
    <S.TitleContainer>
      <S.Title>{children}</S.Title>
    </S.TitleContainer>
  );
}
