import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BackButton = styled(Link)`
  font-size: 20px;
  display: inline-block;

  padding: 6px 14px;

  border-radius: 6px;
  background-color: rgba(87, 54, 163, 0.8);
  color: white;

  transition: scale 300ms;

  &:hover,
  :focus {
    scale: 1.04;
  }

  &:active {
    scale: 0.96;
  }
`;
