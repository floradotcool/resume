import styled from "styled-components";

const Project = ({ title, link, href, children }) => (
  <div>
    <Title>{title}</Title>
    <Link href={href}>{link}</Link>
    <Text>{children}</Text>
  </div>
);

const Title = styled.h3`
  font-family: "Nunito", sans-serif;
  font-weight: 600;
  margin: 0;

  @media (min-width: 960px), print {
    line-height: 1.5rem;
    font-size: 1rem;
  }
`;

const Link = styled.a`
  display: block;

  @media (min-width: 960px), print {
    font-size: 0.75rem;
  }
`;

const Text = styled.p`
  margin: 0.5rem 0 0;

  &:last-child {
    margin-bottom: 0;
  }

  @media (min-width: 960px), print {
    font-size: 0.75rem;
    margin-top: 0.25rem;
  }
`;

export default Project;
