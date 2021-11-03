import styled from "styled-components";

const Section = ({ children, title }) => (
  <StyledSection>
    <Header>
      <Title>{title}</Title>
    </Header>
    <Body>{children}</Body>
  </StyledSection>
);

const StyledSection = styled.div`
  border-bottom: 1px solid #333;
  padding: 1.5rem 0;

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }

  @media (min-width: 960px), print {
    display: flex;
    justify-content: space-between;
    padding: 1rem 0;
  }
`;

const Header = styled.div`
  @media (min-width: 960px), print {
    width: 9rem;
  }
`;

const Title = styled.h2`
  font-family: "Nunito", sans-serif;
  font-size: 1.75rem;
  font-weight: 600;
  margin: 0 0 0.5rem;

  @media (min-width: 960px), print {
    line-height: 1.5rem;
    font-size: 1.5rem;
    margin-bottom: 0;
  }
`;

const Body = styled.div`
  @media (min-width: 960px), print {
    width: calc(100% - 9rem);
  }
`;

export default Section;
