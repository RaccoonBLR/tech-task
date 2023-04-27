import styled from 'styled-components';
import avatarFrame from 'images/avatarFrame.png';

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

export const BackgroundImage = styled.img`
  pointer-events: none;
  margin-bottom: 88px;
`;

export const AvatarImage = styled.img`
  position: absolute;

  top: 185px;
  left: 155px;

  width: 70px;
  height: 70px;

  z-index: 100;

  border-radius: 50%;
  background: url(${avatarFrame});
`;

export const Thumb = styled.div`
  width: 100%;
  height: 8px;
  position: absolute;
  top: 214px;
  left: 0;

  z-index: 10;

  background-color: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;
export const FrameThumb = styled.div`
  position: absolute;
  top: 178px;
  left: 150px;

  width: 80px;
  height: 80px;
  background: url(${avatarFrame});
  background-position: -5px 0px;
  z-index: 1000;
`;
export const CardUpperText = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  text-align: center;

  margin-bottom: 16px;

  color: #ebd8ff;
`;

export const CardLowerText = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  text-align: center;

  margin-bottom: 26px;

  color: #ebd8ff;
`;

export const CardButton = styled.button`
  font-family: 'Montserrat', sans-serif;
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
