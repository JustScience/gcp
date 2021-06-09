import React from 'react'
import LayoutWrap from './style'

export default function Layout({ children }) {
    return (
        <LayoutWrap>
            { children }
        </LayoutWrap>
    )
}
