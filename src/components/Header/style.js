import { Link as GatsbyLink } from 'gatsby'
import styled from 'styled-components'
import color from './../Theme/Color'

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
const NavItem = styled(GatsbyLink)`
    border: solid 1px transparent;
    border-radius: 12px;
    color: ${color.primary.base};
    font-size: 0.9em;
    margin-left: 4px;
    padding: 8px 12px;
    transition: all 333ms ease-in;

    &:hover {
        background-color: ${color.grey.offWhite};
        /* border-color: ${color.primary.light}; */
        box-shadow: 0 4px 9px -6px ${color.shadow.base};
        color: ${color.primary.light};
    }
`

export { HeaderWrap, LogoWrap, NavWrap, NavItem, LogoIcon, LogoText }