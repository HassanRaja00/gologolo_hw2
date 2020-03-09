import React, { Component } from 'react'

// THIS IS HOW WE DISPLAY THE LOGO, IN THIS COMPONENT
class TextEditWorkspace extends Component {
    render() {
        const styles = {
            container: { //FINISH FOR ALL FIELDS
                textAlign: "center",
                color: this.props.logo.textColor,
                fontSize: this.props.logo.fontSize + "pt",
                padding: this.props.logo.padding + "pt",
                borderStyle: "solid",
                backgroundColor: this.props.logo.backgroundColor,
                borderColor: this.props.logo.borderColor,
                borderRadius: this.props.logo.borderRadius + "pt",
                borderWidth: this.props.logo.borderThickness + "pt",
                margin: this.props.logo.margin + "pt"
            }
        }
        return (
            <div className="col s7"
                style={ styles.container }>
                    <div>
                    {this.props.logo.text}
                    </div>
            </div>
        )
    }
}

export default TextEditWorkspace