import styled from 'styled-components'

export const TopBarNav = styled.nav`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 2vw;
    border-bottom: 1px solid #e6e6e6;
    padding: 0vh 10vw;
`

export const TopBarItem = styled.a`
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
`