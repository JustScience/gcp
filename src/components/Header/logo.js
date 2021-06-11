import React from 'react'
import { Link } from 'gatsby'
import { LogoWrap, LogoIcon, LogoText } from './style.js'

export default function HeaderLogo() {
    return (
        <Link to="/">
            <LogoWrap>
                <LogoIcon>GC</LogoIcon>
                <LogoText>Galenti Consulting</LogoText>
            </LogoWrap>
        </Link>
    )
}
