import { LoadMoreBtn } from './LoadMore.styled';

export const LoadMore = ({ setPage }) => {
  return (
    <LoadMoreBtn onClick={() => setPage(prevPage => (prevPage += 1))}>
      Load more
    </LoadMoreBtn>
  );
};
