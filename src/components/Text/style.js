import styled from 'styled-components'
import color from './../Theme/Color'

const PageTitle = styled.h1`
    color:  ${color.grey.offWhite};
    font-size: 2.4em;
    font-weight: 600;
    padding: 24px;
    text-shadow: 0 1px 3px ${color.shadow.base};
`
const SectionTitle = styled.h2`
    color:  ${color.grey.offWhite};
    font-size: 1.8em;
    font-weight: 500;
    padding: 24px;
    text-shadow: 0 1px 3px ${color.shadow.base};
`

export { PageTitle, SectionTitle }