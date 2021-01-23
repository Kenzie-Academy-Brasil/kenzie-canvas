import React from 'react'
import { StyledIframe, IframeTitle } from '../../style/styled-components'

const IframeRender = (props) => {
    return (
        <p>
            <IframeTitle>
                <h3>{props.title}</h3>
            </IframeTitle>
            <StyledIframe src={props.src} allowfullscreen="allowfullscreen" webkitallowfullscreen="webkitallowfullscreen" mozallowfullscreen="mozallowfullscreen"
            />
        </p>
    )
}

export default IframeRender
