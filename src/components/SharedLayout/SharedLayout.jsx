import { Suspense } from 'react';

import { Outlet } from 'react-router-dom';

import { Header, Navigation, Link, Main } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <>
      <Header>
        <Navigation>
          <Link to="/">Home</Link>
          <Link to="/tweets">Tweets</Link>
        </Navigation>
      </Header>
      <Main>
        <Suspense>
          <Outlet />
        </Suspense>
      </Main>
    </>
  );
};
