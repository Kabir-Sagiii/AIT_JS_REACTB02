import { useState } from "react";
import { createPortal } from "react-dom";

function Modal() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="modal">
      <button
        onClick={() => {
          setShowModal(true);
        }}
      >
        Open Modal
      </button>

      {showModal
        ? createPortal(
            <div className="dialogBox">
              <p>My First Custom Modal</p>
              <button
                onClick={() => {
                  setShowModal(false);
                }}
              >
                Close
              </button>
            </div>,
            document.getElementById("anotherRoot")
          )
        : null}
    </div>
  );
}

export default Modal;
