import * as S from "./styles";
import { Man } from "@assets";

export const Section = () => {
  return (
    <S.Section>
      <S.TextContainer>
        <S.Title>
          Men's Fashion
          <S.TitleSpan>Botique</S.TitleSpan>
        </S.Title>
        <S.Info>
          New Summer Collection
        </S.Info>
      </S.TextContainer>
      <S.PhotoContainer>
        <S.Photo src={Man} />
      </S.PhotoContainer>
    </S.Section>
  )
}
