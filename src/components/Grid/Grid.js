import preact from 'preact';
import styled from 'styled-components';

export const Grid = styled.div`
  @media (min-width: 960px), print {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
`;

export const GridItem = styled.div`
  @media (min-width: 960px), print {
    width: calc(33.333% - (1rem * 0.666));
  }
`;
