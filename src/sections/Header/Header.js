import styled from "styled-components";

const Header = () => (
  <StyledHeader>
    <Name>
      <Title>Flora Moon</Title>
      <Location>Portland, OR</Location>
    </Name>
    <Contacts>
      <Contact>
        <a href="tel:5736901154">(573) 690-1154</a>
      </Contact>
      <Contact>
        <a href="mailto:hello@flora.cool">hello@flora.cool</a>
      </Contact>
      <Contact>
        <a href="https://flora.cool">flora.cool</a>
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

const Name = styled.section``;

const Title = styled.h1`
  line-height: 1;
  font-size: 2.5rem;
  font-weight: 600;
  margin: 0;

  @media (min-width: 960px), print {
    font-size: 3rem;
    margin: 0;
  }
`;

const Location = styled.div`
  margin-bottom: 0.5rem;
  display: block;

  @media (min-width: 960px), print {
    margin: 0;
  }
`;

const Contacts = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  @media (min-width: 960px), print {
    bottom: 0.25rem;
    font-size: 0.875rem;
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
