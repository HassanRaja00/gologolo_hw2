import React from 'react'
import {Modal, Button} from 'react-materialize'

class Navbar extends React.Component {
  constructor() {
    super();

    console.log("Navbar constructed");
  }

  componentDidMount = () => {
      console.log("\tNavbar component did mount");
  }

  componentWillUnmount = () => {
      console.log("\tNavbar component will unmount");
  }

  handleGoHome = () => {
    console.log("handleGoHome");
    this.props.goToHomeCallback();
  }

  delete = () => {
    this.props.deleteLogo(this.props.logo.key);
    console.log("LOGO DELETED");
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <div  className='brand-logo' 
                style={ {cursor: "pointer"} }
                onClick={this.handleGoHome}>
            goLogoLo
          </div>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li style={ {cursor: "pointer",
                        fontSize: "40px"} }
                >
                  <Modal actions={[<Button flat modal="close" node="button" waves="green">Cancel</Button>]}
                          header='Delete Logo?'
                          trigger={<div>&#128465;</div>}>
                            {<button className="waves-effect waves-light btn-small"
                            onClick={this.delete}>Confirm, Delete</button>}

                  </Modal>
                  
                  </li>
          </ul>
        </div>
      </nav>
    )
  };
}

export default Navbar;