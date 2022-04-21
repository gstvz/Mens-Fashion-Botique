import * as S from "./styles";
import { BotiqueLogo } from "../../assets/index";
import {
  FaRegUserCircle,
  FiSearch,
  RiHeart2Line,
  RiShoppingCartLine,
} from "../../shared/icons";

export const Header = () => {
  return (
    <S.Header>
      <S.Container>
        <S.Wrapper>
          <S.Logo src={BotiqueLogo} />
          <S.Nav>
            <S.NavList>
              <S.NavItem>TheProduct</S.NavItem>
              <S.NavItem>OurStory</S.NavItem>
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
