import preact from 'preact';
import styled from 'styled-components';

const Job = ({company, title, time, children}) => {
  return (
    <StyledJob>
      <Title>{title}</Title>
      <Meta>
        {company && <Company>{company}</Company>}
        <Time>{time}</Time>
      </Meta>
      {children.length > 0 && <Points>{children}</Points>}
    </StyledJob>
  );
};

const StyledJob = styled.div`
  margin-bottom: 2rem;

  &:last-child {
    margin-bottom: 0;
  }

  @media (min-width: 960px), print {
    margin-bottom: 1rem;
    position: relative;
  }
`;

const Title = styled.h3`
  font-family: 'Nunito', sans-serif;
  font-weight: 600;
  margin: 0 0 0.5rem;

  @media (min-width: 960px), print {
    line-height: 1.5rem;
    font-size: 1rem;
    margin-bottom: 0;
  }
`;

const Meta = styled.div`
  font-style: italic;
`;

const Company = styled.div`
  margin-bottom: 0.5rem;

  @media (min-width: 960px), print {
    line-height: 1;
    font-size: 0.875rem;
    margin-bottom: 0;
  }
`;

const Time = styled.div`
  @media (min-width: 960px), print {
    font-size: 0.875rem;
    line-height: 1.5rem;
    position: absolute;
    top: 0;
    right: 0;
    width: calc(33.333% - (1rem * 0.666));
  }
`;

const Points = styled.div`
  list-style-position: inside;
  padding: 0;
  margin: 0.5rem 0 0;

  @media (min-width: 960px), print {
    font-size: 0.75rem;

    & li {
      margin-bottom: 0.25rem;
    }
  }
`;

export default Job;
