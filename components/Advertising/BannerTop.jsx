import { Fragment } from 'react'
import styled from 'styled-components'

const BannerBody = styled.div`
  height: ${ props => props.height }px;
  background-color: salmon;
  box-sizing: border-box;
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`

const BannerTop = ({ isOpen, content, height }) => {
    if(isOpen)
        return(
            <BannerBody height={ height }>
                { content }
            </BannerBody>
        )
    else
        return(<Fragment/>)
}

export default BannerTop