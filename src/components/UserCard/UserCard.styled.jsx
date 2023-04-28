import styled from 'styled-components';
import cardBg from 'images/cardBg.png';

export const Card = styled.article`
  position: relative;
  text-transform: uppercase;

  width: 380px;
  height: 460px;

  padding: 28px 36px 36px;

  border-radius: 20px;
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);

  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
`;

export const CardBackground = styled.div`
  margin-bottom: 88px;
  width: 308px;
  height: 168px;

  background-image: url('${cardBg}');
  background-size: cover;
`;

export const AvatarFrame = styled.div`
  position: absolute;
  width: 80px;
  height: 80px;

  top: 178px;
  left: 150px;

  &::before {
    content: '';
    position: absolute;

    width: 380px;
    height: 8px;

    top: 40px;
    left: -150px;

    background-color: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
  }

  &::after {
    content: '';
    position: absolute;

    width: 80px;
    height: 80px;

    top: 0;
    left: 0;

    border-radius: 50%;
    box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
      inset 0px -2.19582px 4.39163px #ae7be3,
      inset 0px 4.39163px 3.29372px #fbf8ff;
  }
`;

export const AvatarImage = styled.img`
  position: relative;
  border-radius: 50%;
  border: 8px solid #ebd8ff;
  background-color: #ebd8ff;
`;

export const CardUpperText = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  text-align: center;

  margin-bottom: 16px;

  color: #ebd8ff;
`;

export const CardLowerText = styled(CardUpperText)`
  margin-bottom: 26px;
`;

export const CardButton = styled.button`
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  text-transform: inherit;

  display: block;
  width: 196px;

  padding: 14px 0;
  margin: 0 auto;

  transition: scale 300ms;
  border-radius: 10.3108px;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  color: #373737;

  background: ${({ isFollow }) => (isFollow ? '#5CD3A8' : '#EBD8FF')};
  &:hover,
  :focus {
    scale: 1.04;
  }

  &:active {
    scale: 0.96;
  }
};
`;
