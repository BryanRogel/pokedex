import React from 'react';
import styled from 'styled-components';

function About(){
    return(
        <Style>
            <section>
                <h1>About</h1>
                <p>Personal project created in react js using pokeapi for data.</p>
            </section>
        </Style>
    );
}

const Style = styled.div`
display: flex;
justify-content: center;
text-align: center;
h1 {
    text-transform: uppercase;
}
`;

export default About;