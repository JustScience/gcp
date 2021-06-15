import styled from 'styled-components'
import color from '../Theme/Color'
import media from '../Responsive/media'

const ResumeWrap = styled.section`
    /* display: grid;
    gap: 24px;
    grid-auto-rows: 2fr;
    grid-template-columns: 1fr;
    justify-items: stretch;

    ${media.tablet`
        gap: 12px;
        grid-template-columns: 2fr 2fr;
    `};
    ${media.laptopSM`
        gap: 8px;
        grid-template-columns: 3fr 3fr 3fr;
    `}; */
`

const ResumeItem = styled.div`
    background-color: ${color.grey.offWhite};
    border-radius: 4px;
    grid-area: 1;
    height: 100%;
    margin: 12px;
    /* justify-self: stretch; */
    padding: 24px;
    transition: all 333ms ease-in;

    &:hover {
        background-color: #efefef;
        border-radius: 6px;
        box-shadow: 0 4px 12px -9px ${color.shadow.base};
    }
`

export { ResumeWrap, ResumeItem }