import { useState, useEffect } from 'react';
import { getUsers } from 'service/APIService';

import { UserList } from 'components/UserList/UserList';
import { BackBtn } from 'components/BackBtn/BackBtn';
import { Filter } from 'components/Filter/Filter';
import { LoadMore } from 'components/LoadMore/LoadMore';
import { Container } from 'components/Filter/Filter.styled';

function Tweets() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    getUsers(page).then(data => setUsers([...users, ...data]));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <>
      <Container>
        <BackBtn />
        <Filter setFilter={setFilter} />
      </Container>
      <UserList users={users} setUsers={setUsers} filter={filter} />
      {Boolean(users.length) && <LoadMore setPage={setPage} />}
    </>
  );
}

export default Tweets;
