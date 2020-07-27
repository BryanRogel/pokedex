import React from 'react';
import styled from 'styled-components';

import Modal from '../modal/Modal.js';
import PokemonItem from '../pokemonItem/PokemonItem';

const PokemonDetail = ({ visible, hideModal, pokemonData }) => {

  document.onkeydown = function(e) {
    e = e || window.event;
    let isEscape = false;
    if ("key" in e) {
        isEscape = (e.key === "Escape" || e.key === "Esc");
    } else {
        isEscape = (e.keyCode === 27);
    }
    if (isEscape) {
      hideModal();
    }
};

  visible ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto'
  return (
    <Style>
      <Modal visible={visible} typeName={pokemonData && pokemonData.types[0].type.name}>
        <div className='grid-container'>
          <div className="buttonGrid">
            <div className="button" onClick={() => hideModal()}>Close</div>
          </div>
          <div className="contendGrid">
            <PokemonItem className="button" pokemonData={pokemonData} />
          </div>
        </div>
      </Modal>
    </Style>
  );
};

const Style = styled.div`
.buttonGrid{ grid-area: button; }
.contendGrid { 
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: content;
}

.grid-container {
  display: grid;
  grid-template-areas:
    'button '
    'content';
}
.button {
  cursor: pointer;
  height: 32px;
  width: 120px;
  border-radius: 12px;
  float: right;
  margin-top: 20px;
  padding-top: 4px;
  letter-spacing: 2px;
  font-family: 'Open Sans', sans-serif;
  font-weight: bold;
  color: #000;
  &:hover{
    color: #fff;
  }
}
`;

export default PokemonDetail;
