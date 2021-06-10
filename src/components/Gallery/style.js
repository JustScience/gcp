import styled from 'styled-components'
import color from '../Theme/Color'

const GalleryWrap = styled.section`
    column-gap: 8px;
    display: grid;
    grid-auto-rows: 2fr;
    grid-template-columns: 2fr 2fr;
    row-gap: 8px;
`

const GalleryCard = styled.div`
    background-color: ${color.grey.offWhite};
    grid-area: 1;
    height: 100%;
    justify-self: stretch;
    padding: 24px;
`

export { GalleryWrap, GalleryCard }