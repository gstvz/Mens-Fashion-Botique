import * as S from "./styles";
import { BotiqueLogo } from "@assets";
import {
  FaRegUserCircle,
  FiSearch,
  RiHeart2Line,
  RiShoppingCartLine,
} from "@icons";

export const Header = () => {
  return (
    <S.Header>
      <S.Container>
        <S.Wrapper>
          <S.Logo src={BotiqueLogo} />
          <S.Nav>
            <S.NavList>
              <S.NavItem>The Product</S.NavItem>
              <S.NavItem>Our Story</S.NavItem>
              <S.NavItem>Values</S.NavItem>
              <S.NavItem>USD</S.NavItem>
              <S.NavItem>contact us</S.NavItem>
            </S.NavList>
          </S.Nav>
        </S.Wrapper>
        <S.ActionsNav>
          <S.ActionsList>
            <S.ActionItem>
              <FiSearch />
            </S.ActionItem>
            <S.ActionItem>
              <RiShoppingCartLine />
            </S.ActionItem>
            <S.ActionItem>
              <RiHeart2Line />
            </S.ActionItem>
            <S.ActionItem>
              <FaRegUserCircle />
            </S.ActionItem>
          </S.ActionsList>
        </S.ActionsNav>
      </S.Container>
    </S.Header>
  );
};
