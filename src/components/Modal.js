import React, { Component } from 'react';
import styled from 'styled-components';

const ModalBody = styled.section`
  position:fixed;
  background: white;
  width: 80%;
  height: auto;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
`

const DisplayModal = styled.div`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width:100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
`

const HideModal = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width:100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
`


const Modal = ({ handleClose, show, children }) => {
  console.log(show)
  const showHideClassName = show ? DisplayModal : HideModal
  if(!show) {
    return null
  }
  return (
    <DisplayModal>
      <ModalBody>
        {children}
        <button onClick={handleClose}>close</button>
      </ModalBody>
    </DisplayModal>
  )
}

export default Modal
