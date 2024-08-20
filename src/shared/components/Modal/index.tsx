import React from 'react';
import Title from '../Title';

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

const Modal = ({ children, isOpen, onClose,title }:ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
    <div className="overlay"></div>
      <div className="modal-content">
        <div className="modal-close">
          <span className="close" onClick={onClose}>
            &times;
          </span>
        </div>
        <div className="modal-content__title"><Title title={title} type="h3"/></div>
        <div className="modal-content__body">
        {children}
        </div>
       
      </div>
    </div>
  );
}

export default Modal;