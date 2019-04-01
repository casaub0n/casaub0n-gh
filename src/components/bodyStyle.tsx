import styled from 'styled-components'

export default styled.div`
width: 100%;
height: 100%;
display: grid;
grid-template-columns: 1fr;
grid-template-rows: 1fr 10fr;
grid-template-areas: 'header' 'main';
`

export const header = styled.div`grid-area: header`

export const main = styled.div`grid-area: main`
