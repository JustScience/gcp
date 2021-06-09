import React from 'react'
import { Link } from 'gatsby'
import { LogoWrap, LogoText } from './style.js'

export default function HeaderLogo() {
    return (
        <LogoWrap>
            <Link to="/">
                <LogoText>Galenti Consulting</LogoText>
            </Link>
        </LogoWrap>
    )
}
