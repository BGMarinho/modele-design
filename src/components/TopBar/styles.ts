import styled from 'styled-components';

export const TopBarContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e6e6e6;
  padding: 0vh 10vw;
`;

export const TopBarNavWrapper = styled.nav`
  display: inherit;
  gap: 2vw;
`;

export const TopBarNavItem = styled.a`
  text-decoration: none;
  text-transform: capitalize;
  font-size: 1rem;
  line-height: 30px;
  color: #000000;
  opacity: 0.6;
  &:hover {
    transition: opacity 0.3s;
    opacity: 1;
  }
`;
