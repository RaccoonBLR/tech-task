import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import mainBg from 'images/mainBg.jpg';

export const Header = styled.header`
  padding: 18px 0 18px 50px;

  border-bottom: 1px solid lightgray;
`;

export const Navigation = styled.nav``;

export const Link = styled(NavLink)`
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 24px;

  display: inline-block;
  padding: 12px 22px;

  transition: scale 300ms;

  &:not(:last-of-type) {
    margin-right: 26px;
  }
  &:hover,
  :focus {
    scale: 1.05;
  }
  &.active {
    color: #5736a3;
    border-bottom: 3px solid #5736a3;
    border-radius: 6px;
  }
`;

export const Main = styled.main`
  padding: 30px 0;

  min-height: calc(100vh - 91px);

  background-image: url('${mainBg}');
  background-position: center;
`;
