import styled from "styled-components";

export const Header = styled.header`
  align-items: center;
  display: flex;
  height: 10rem;
`;

export const Container = styled.div`
  align-items: center;
  display: flex;
  gap: 200px;
  margin: 0 auto;
  width: 85%;
`;

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
`;

export const Logo = styled.img`
  cursor: pointer;
  margin-right: 14rem;
`;

export const Nav = styled.nav``;

export const NavList = styled.ul`
  display: flex;
  gap: 50px;
`;

export const NavItem = styled.li`
  border-bottom: 3px solid transparent;
  color: #ffffff;
  cursor: pointer;
  font-size: 1.6rem;

  &:hover {
    border-bottom: 3px solid #c46145;
  }
`;

export const ActionsNav = styled.nav`
`;

export const ActionsList = styled.ul`
  display: flex;
  gap: 80px;
  justify-content: center;
`;

export const ActionItem = styled.li`
  color: #ffffff;
  cursor: pointer;
  font-size: 2rem;
`;
