import React from 'react'
import GlobalStyle from '../GlobalStyle'
import Header from '../Header'
import LayoutWrap from './style'
import Responsive from '../Responsive'

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
