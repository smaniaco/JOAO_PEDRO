import React from 'react';
import styled from 'styled-components'


const Iframe = styled.iframe`
    width:40vw;
    border:5px border black;
`


function VideoBox(props) {
    return (
        <Iframe width={"560"} height="315" src={props.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Iframe>

    )
}

export default VideoBox;