import { Routes, Route, Navigate } from 'react-router-dom';

import { SharedLayout } from './SharedLayout/SharedLayout';
import Home from 'pages/Home';
import Tweets from 'pages/Tweets';

// const HomePage = lazy(() => import('../pages/Home'));
// const TweetsPage = lazy(() => import('../pages/Tweets'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/tweets" element={<Tweets />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
