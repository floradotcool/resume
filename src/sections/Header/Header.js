import preact from 'preact';
import styled from 'styled-components';

const Header = () => (
  <StyledHeader>
    <Title>Nick Pierson</Title>
    <Contacts>
      <Contact>me@nick.exposed</Contact>
      <Contact>
        <a href="https://nick.exposed">nick.exposed</a>
      </Contact>
    </Contacts>
  </StyledHeader>
);

const StyledHeader = styled.header`
  border-bottom: 1px solid #333;
  padding: 0 0 1.5rem;

  @media (min-width: 960px), print {
    align-items: flex-end;
    display: flex;
    justify-content: space-between;
    padding-bottom: 1rem;
  }
`;

const Title = styled.h1`
  line-height: 1;
  font-family: 'Nunito', sans-serif;
  font-size: 2.5rem;
  font-weight: 600;
  margin: 0 0 0.5rem;

  @media (min-width: 960px), print {
    font-size: 3rem;
    margin: 0;
    width: calc(66.666% - (1rem * 0.333));
  }
`;

const Contacts = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  @media (min-width: 960px), print {
    bottom: 0.25rem;
    font-size: 0.75rem;
    position: relative;
    text-align: right;
  }
`;

const Contact = styled.li`
  margin-bottom: 0.25rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export default Header;
