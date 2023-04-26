import styled from 'styled-components';

export const LoadMoreBtn = styled.button`
  font-size: 20px;

  display: block;

  padding: 10px 28px;
  margin: 0 auto;

  border-radius: 6px;
  color: white;
  background-color: rgba(87, 54, 163, 0.8);
  transition: scale 300ms;

  &:hover,
  :focus {
    scale: 1.04;
  }

  &:active {
    scale: 0.96;
  }
`;
