import cardBg from 'images/cardBg.png';

import icons from 'images/icons.svg';

import {
  Card,
  Icon,
  BackgroundImage,
  Thumb,
  CardUpperText,
  CardLowerText,
  CardButton,
} from './UserCard.styled';

export const UserCard = ({ userData, onFollow, onClick }) => {
  const { tweets, followers, id } = userData;

  const isFollow = onFollow.some(followId => id === followId);

  const formattedFollowers = followers
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return (
    <Card>
      <Icon width="76" height="22">
        <use href={`${icons}#icon-logo`} />
      </Icon>

      <BackgroundImage src={cardBg} alt="background"></BackgroundImage>

      <Thumb></Thumb>

      <CardUpperText>{tweets} Tweets</CardUpperText>
      <CardLowerText>{formattedFollowers} Followers</CardLowerText>
      <CardButton type="button" id={id} onClick={onClick} isFollow={isFollow}>
        {isFollow ? 'Following' : 'Follow'}
      </CardButton>
    </Card>
  );
};
