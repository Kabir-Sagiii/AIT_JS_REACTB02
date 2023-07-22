import React from "react";

function Modal(props) {
  return (
    <div className="m-5">
      <button
        className="btn btn-primary"
        data-bs-target="#mymodal"
        data-bs-toggle="modal"
      >
        Open Modal
      </button>

      <div className="modal" id="mymodal" data-bs-backdrop="static">
        <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-fullscreen">
          <div className="modal-content">
            <div className="modal-header">
              <h2>Model Title</h2>
              <button className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                excepturi maiores, voluptatibus eos sit, ratione consequatur,
                expedita repellat magnam necessitatibus eum voluptas laudantium
              </p>
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-outline-danger"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button className="btn btn-primary">Proceed</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
