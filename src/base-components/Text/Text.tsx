import * as S from './styles';

export default function Text({ children }) {
  return (
    <S.TextContainer>
      <S.Text>{children}</S.Text>
    </S.TextContainer>
  );
}
