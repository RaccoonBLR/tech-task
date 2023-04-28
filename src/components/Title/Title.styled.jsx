import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  font-family: 'Helvetica Neue', sans-serif;
  margin-top: 92px;
  padding: 116px 74px 100px 94px;
  width: max-content;

  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0px 0px 20px white;
`;
export const Title = styled.h1`
  font-size: 38px;
  margin-bottom: 22px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 34px;
`;

export const Subtitle = styled.h2`
  font-size: 42px;
`;

export const TitleLink = styled(Link)`
  font-weight: 500;
  font-size: 30px;
  padding: 14px 24px;

  transition: scale 300ms;

  border-bottom: 3px solid #5736a3;
  border-right: 3px solid #5736a3;
  border-radius: 10px;

  background-color: rgb(255, 255, 255);

  &:hover,
  :focus {
    scale: 1.04;
  }
`;
