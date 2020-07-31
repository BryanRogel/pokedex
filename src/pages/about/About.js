import React from 'react';
import styled from 'styled-components';

function About(){
    return(
        <Style>
            <div class="about">
                <h1>About</h1>
                <p>A personal project created in React JS using the pokeapi for data.</p>
            </div>
            <div class="about">
                <h1>Disclamer</h1>
                <p>This is not a licensed by Nintendo® or The Pokémon Company®, I am not affiliated with or sponsored by Nintendo® or The Pokémon Company®.</p>
                <p>The images of the pokémon and other related indicia, as well as the Pokémon themselves, are copyright of Nintendo® and The Pokémon Company®.</p>
            </div>
        </Style>
    );
}

const Style = styled.div`
display: block;
justify-content: center;
text-align: center;
h1 {
    text-transform: uppercase;
}
.about {
    margin: 20px;
}
`;

export default About;