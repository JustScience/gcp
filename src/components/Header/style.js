import styled from 'styled-components'

const HeaderWrap = styled.main`
    background-color: beige;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0;
    padding: 12px;
    width: 100%;
`
const LogoWrap = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`
const LogoText = styled.span``
const NavWrap = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`
const NavItem = styled.span`
    margin-left: 24px;
`

export { HeaderWrap, LogoWrap, NavWrap, NavItem, LogoText }