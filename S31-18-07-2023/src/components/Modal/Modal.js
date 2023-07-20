import React from "react";

function Modal(props) {
  return (
    <div className=" mt-5">
      <button
        className="btn btn-outline-primary btn-lg"
        data-bs-toggle="modal"
        data-bs-target="#mymodal"
      >
        Open Modal
      </button>
      <div className="modal fade" id="mymodal">
        <div className="modal-dialog ">
          <div className="modalcontent">
            <div className="modal-header">
              <h2>Modal Header</h2>
            </div>
            <div className="modal-body">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                iure assumenda dolores, harum deleniti necessitatibus doloremque
                quaerat possimus! Cum, esse. Nobis dolorem dignissimos, est
                harum dolore quo rem molestiae iste!Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Odit iure assumenda dolores, harum
                deleniti necessitatibus doloremque quaerat possimus! Cum, esse.
                Nobis dolorem dignissimos, est harum dolore quo rem molestiae
                iste!Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Odit iure assumenda dolores, harum deleniti necessitatibus
                doloremque quaerat possimus! Cum, esse. Nobis dolorem
                dignissimos, est harum dolore quo rem molestiae iste!Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Odit iure assumenda
                dolores, harum deleniti necessitatibus doloremque quaerat
                possimus! Cum, esse. Nobis dolorem dignissimos, est harum dolore
                quo rem molestiae iste!Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Odit iure assumenda dolores, harum deleniti
                necessitatibus doloremque quaerat possimus! Cum, esse. Nobis
                dolorem dignissimos, est harum dolore quo rem molestiae
                iste!Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Odit iure assumenda dolores, harum deleniti necessitatibus
                doloremque quaerat possimus! Cum, esse. Nobis dolorem
                dignissimos, est harum dolore quo rem molestiae iste!Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Odit iure assumenda
                dolores, harum deleniti necessitatibus doloremque quaerat
                possimus! Cum, esse. Nobis dolorem dignissimos, est harum dolore
                quo rem molestiae iste!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
