import * as S from './styles';

export default function Banner({ src, alt }) {
  return (
    <S.BannerContainer>
      <S.Banner src={src} alt={alt} />
    </S.BannerContainer>
  );
}

// Dumb component prepared for easy use, only passing its "src" and "alt" values.
