import styled from 'styled-components'

const HeroWrap = styled.section`
    align-items: center;
    display: flex;
    height: 480px;
    justify-content: center;
    margin: 0;
    padding: 24px;
    width: 100%;
`
const HeroBigText = styled.span`
    color: #ebebeb;
    font-size: 9em;
    font-weight: 700;
    text-align: center;
    text-shadow: 0 3px 12px rgba(30,0,90,0.15);
`
const HeroHeading = styled.h1`
    color: darkslateblue;
    font-weight: 500;
    margin-bottom: 6px;
    text-align: center;
`
const HeroCopyText = styled.p`
    color: slateblue;
    font-weight: 300;
    text-align: center;
`

export { HeroWrap, HeroBigText, HeroHeading, HeroCopyText }