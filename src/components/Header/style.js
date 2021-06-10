import styled from 'styled-components'

const HeaderWrap = styled.main`
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0;
    padding: 12px;
    width: 100%;
`
const LogoWrap = styled.nav`
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`
const LogoIcon = styled.div`
    border: solid 2px #222;
    border-radius: 50%;
    height: 24px;
    margin-right: 10px;
    width: 24px;
`
const LogoText = styled.span`
    font-size: 1.2em;
`
const NavWrap = styled.nav`
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`
const NavItem = styled.span`
    font-size: 0.9em;
    padding: 8px 12px;
`

export { HeaderWrap, LogoWrap, NavWrap, NavItem, LogoIcon, LogoText }