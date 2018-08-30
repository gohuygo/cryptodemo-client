import React, { Component } from 'react';
import styled from 'styled-components';

const ModalBody = styled.section`
  position: fixed;
  background: white;
  width: 80%;
  height: auto;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
`

const ModalContainer = styled.div`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width:100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
`

const Modal = ({ handleClose, show, children }) => {
  if (!show)
    return null

  return (
    <ModalContainer>
      <ModalBody>
        {children}
        <button onClick={handleClose}>close</button>
      </ModalBody>
    </ModalContainer>
  )
}

export default Modal
