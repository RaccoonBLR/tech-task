import cardBg from 'images/cardBg.png';

import icons from 'images/icons.svg';

import {
  Card,
  Icon,
  BackgroundImage,
  AvatarImage,
  Thumb,
  CardUpperText,
  CardLowerText,
  CardButton,
} from './UserCard.styled';

export const UserCard = ({ userData, onFollow, onClick }) => {
  const { user, tweets, followers, avatar, id } = userData;

  const isFollow = onFollow.some(followId => id === followId);

  return (
    <Card>
      <Icon width="76" height="22">
        <use href={`${icons}#icon-logo`} />
      </Icon>

      <BackgroundImage src={cardBg} alt="background"></BackgroundImage>
      <AvatarImage src={avatar} alt={`${user} avatar`}></AvatarImage>
      <Thumb></Thumb>

      <CardUpperText>{tweets} Tweets</CardUpperText>
      <CardLowerText>{followers} Followers</CardLowerText>
      <CardButton type="button" id={id} onClick={onClick} isFollow={isFollow}>
        {isFollow ? 'Following' : 'Follow'}
      </CardButton>
    </Card>
  );
};
