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
const HeroText = styled.span`
    color: #e3e3e3;
    font-size: 9em;
    font-weight: 700;
    text-shadow: 0 3px 12px rgba(0,0,0,0.15);
`

export { HeroWrap, HeroText }