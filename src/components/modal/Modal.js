import * as React from "react";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";

const Modal = ({ visible, children, typeName }) => {
  
  return (
    <TransitionContainer>
      <CSSTransition
        in={visible}
        timeout={400}
        unmountOnExit
        classNames="modal"
      >
        {state => (
          <ModalContainer>
            <ModalView className={`modal-view ${typeName}-type`}>{children}</ModalView>
          </ModalContainer>
        )}
      </CSSTransition>
    </TransitionContainer>
  );
};

export default Modal;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  backdrop-filter: blur(1px);
  display: flex;
  z-index: 6;
  align-items: center;
  justify-content: center;
`;

const ModalView = styled.div`
  width: 1000px;
  height: 540px;
  padding: 0 2rem;
  transition: all 300ms ease-out;
  border-radius: 40px;
  border: solid 3px #000;
  overflow-y: auto;
    ::-webkit-scrollbar {
  width: 10px;
}

@media (max-width: 550px) {
  border-radius: 0px;
  height: 100%;
} 
`;

const TransitionContainer = styled.div`
  .modal-enter {
    opacity: 0.01;

    .modal-view {
      transform: scale(0.9) translateY(20%);
    }
  }
  .modal-enter-active {
    opacity: 1;
    transition: all 300ms ease-out;

    .modal-view {
      transform: scale(1) translateY(0%);
    }
  }
  .modal-exit {
    opacity: 1;

    .modal-view {
      transform: scale(1) translateY(0%);
    }
  }
  .modal-exit-active {
    opacity: 0.01;
    transition: all 300ms ease-out;

    .modal-view {
      transform: scale(0.9) translateY(20%);
    }
  }
  `;

// const ModalContainer = styled.div`
//   height: 100%;
//   position: fixed;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   backdrop-filter: blur(2px);
//   display: flex;
//   z-index: 6;
//   align-items: center;
//   justify-content: center;
// `;

// const ModalView = styled.div`
//   background-color: black; /* Color default */
//   width: 60%;
//   height: 60%;
//   overflow: auto;
//   transition: all 300ms ease-out;
// `;

// const TransitionContainer = styled.div`
//   .modal-enter {
//     opacity: 0.01;

//     .modal-view {
//       transform: scale(50.0) translateY(0%);
//     }
//   }
//   .modal-enter-active {
//     opacity: 1;
//     transition: all 300ms ease-out;

//     .modal-view {
//       transform: scale(1) translateY(0%);
//     }
//   }
//   .modal-exit {
//     opacity: 1;

//     .modal-view {
//       transform: scale(1) translateY(20%);
//     }
//   }
//   .modal-exit-active {
//     opacity: 0.01;
//     transition: all 300ms ease-out;

//     .modal-view {
//       transform: scale(0.9) translateY(0%);
//     }
//   }
// `;

