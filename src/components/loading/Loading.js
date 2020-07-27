import React from 'react';
import styled from 'styled-components';
import logo from './../../assets/images/loading.svg';

function Loading ({height}) {
    return(
        <Style>
            <img src={logo} style={{ height: `${height ? height : '40px' }`, margin: '10px' }} className="loading" alt="loading"/>
        </Style>
    );
}

const Style = styled.div`
background: white;
width: 100%;
height: (100vh);

    @keyframes rotate360 {
        to { transform: rotate(360deg); }
    }
    .loading { animation: 2s rotate360 infinite linear; }
`;

export default Loading;