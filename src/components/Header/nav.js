import React from 'react'
import { Link } from 'gatsby'
import { NavWrap, NavItem } from './style.js'

export default function HeaderNav() {
    return (
        <NavWrap>
            <Link to="/projects"><NavItem>Projects</NavItem></Link>
            <Link to="/"><NavItem>Home</NavItem></Link>
        </NavWrap>
    )
}
