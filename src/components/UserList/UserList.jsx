import { UserCard } from 'components/UserCard/UserCard';
import { useState, useEffect } from 'react';

import { putUser } from 'service/APIService';
import { List } from './UserList.styled';

export const UserList = ({ users, filter, setUsers }) => {
  const [onFollow, setOnFollow] = useState(
    JSON.parse(localStorage.getItem('onFollow')) ?? []
  );

  useEffect(() => {
    localStorage.setItem('onFollow', JSON.stringify(onFollow));
  }, [onFollow]);

  const updateUserData = async (id, isFollowing) => {
    const userIdx = users.findIndex(user => user.id === id);

    return await putUser(id, {
      followers: isFollowing
        ? users[userIdx].followers - 1
        : users[userIdx].followers + 1,
    });
  };

  const isFollowed = id => {
    return onFollow.some(userId => userId === id);
  };

  const handleFollow = async evt => {
    const { id } = evt.target;

    const isFollow = isFollowed(id);

    try {
      const updatedUser = await updateUserData(id, isFollow);

      setOnFollow(prevState =>
        isFollow
          ? prevState.filter(userId => userId !== id)
          : [...prevState, id]
      );
      setUsers(prevState =>
        prevState.map(user => (user.id === id ? updatedUser : user))
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  const visibleUsers = (() => {
    switch (filter) {
      case 'follow':
        return users.filter(user => !isFollowed(user.id) && user);

      case 'followings':
        return users.filter(user => isFollowed(user.id) && user);

      default:
        return users;
    }
  })();

  return (
    <List>
      {visibleUsers.map(user => (
        <li key={user.id}>
          <UserCard
            userData={user}
            onClick={handleFollow}
            onFollow={onFollow}
          />
        </li>
      ))}
    </List>
  );
};
