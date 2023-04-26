import { Container, Title, Wrapper, Subtitle, TitleLink } from './Title.styled';

export const MainTitle = () => {
  return (
    <Container>
      <Title>Welcome to home page</Title>
      <Wrapper>
        <Subtitle>Start exploring TWTR APP</Subtitle>
        <TitleLink to="/tweets">Tweets</TitleLink>
      </Wrapper>
    </Container>
  );
};
