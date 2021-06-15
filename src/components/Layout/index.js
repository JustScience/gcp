import React from 'react'
import GlobalStyle from '../Theme/Global'
import Header from '../Header'
import Responsive from '../Responsive'
import LayoutWrap from './style'

export default function Layout({ children }) {
    return (
        <>
            <GlobalStyle />
            <LayoutWrap>
                <Header />
                { children }
            </LayoutWrap>
            <Responsive /> 
        </>
    )
}
