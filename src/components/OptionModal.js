import React from "react";
import Modal from "react-modal";

const OptionModal = (props) => (
  <Modal
         className="modal"
         isOpen={ props.selectedOption !== undefined ? true : false }
         onRequestClose={ props.handleClearSelectedOption }
         contentLabel="Selected Option"
         closeTimeoutMS={ 200 }>
    <h3>Selected Option</h3>
    { props.selectedOption && <p>
                                { props.selectedOption }
                              </p> }
    <button
            className="button"
            onClick={ props.handleClearSelectedOption }>
      Okay
    </button>
  </Modal>
);

export default OptionModal;
