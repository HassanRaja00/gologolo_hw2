import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

class Modal extends Component {
  componentDidMount() {
    const options = {
      onOpenStart: () => {
        console.log("Open Start");
      },
      onOpenEnd: () => {
        console.log("Open End");
      },
      onCloseStart: () => {
        console.log("Close Start");
      },
      onCloseEnd: () => {
        console.log("Close End");
      },
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
      dismissible: false,
      startingTop: "4%",
      endingTop: "10%"
    };
    M.Modal.init(this.Modal, options);
    // If you want to work on instance of the Modal then you can use the below code snippet 
    // let instance = M.Modal.getInstance(this.Modal);
    // instance.open();
    // instance.close();
    // instance.destroy();
  }

  render() {
      let styles = {
          container: {
              color: "black",
              textAlign: "center"
          }
      }
    return (
      <div>
        <a
          className="waves-effect waves-light btn modal-trigger"
          data-target="modal1"
        >
          &#9998;
        </a>

        <div
          ref={Modal => {
            this.Modal = Modal;
          }}
          id="modal1"
          className="modal"
        >
          <div className="modal-content"
          style={styles.container}>
            <h4>Edit Logo Text</h4>
            <input type="text" />
          </div>
          <div class="modal-footer">
            <a class="modal-close waves-effect waves-red btn-flat">
              Cancel
            </a>
            <a class="modal-close waves-effect waves-green btn-flat">
              Change
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;