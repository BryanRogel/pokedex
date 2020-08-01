import React from 'react';
import styled from 'styled-components';
import ErrorImage from '../../assets/images/error404.png';

function Error404() {
    return(
        <Style>
            <div className="error">
                <h1>There's too many men...</h1>
                <img src={ErrorImage} alt="Error404" className="error-image" style={{ height: '300px', width: '300px' }}/>
                <h1 className="error-text">Error 404</h1>
            </div>
        </Style>
    )
};

const Style = styled.div`
display: flex;
justify-content: center;
align-items: center;
font-weight: bold;
text-transform: uppercase;
margin: 0px;
.error {
    width: 100%;
    text-align: center;
    .error-image {
    border-radius: 50%;
    }
    .error-text{
        font-size: 70px;
        margin: 0px;
    }
}
`;

export default Error404;