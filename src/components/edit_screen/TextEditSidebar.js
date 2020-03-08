import React, { Component } from 'react'

class TextEditSidebar extends Component {
    constructor() {
        super();

        // WE'LL MANAGE THE UI CONTROL
        // VALUES HERE
        this.state = {
            textColor : "#FF0000", //fix hardcoded values later
            fontSize : 24,
            backgroundColor : "#FF0000",
            borderColor : "#FF0000",
            borderRadius : 10,
            borderThickness : 15,
            padding: 5,
            margin: 0
        }
    }

    handleUndo = () => {
        this.props.undoCallback();
    }

    handleRedo = () => {
        this.props.redoCallback();
    }


    //original
    handleTextColorChange = (event) => {
        console.log("handleTextColorChange to " + event.target.value);
        this.setState({ textColor: event.target.value }, this.completeUserEditing);
    }

    handleBackgroundColorChange = (event) => {
        console.log("changing background color to: " + event.target.value);
        this.setState({ backgroundColor: event.target.value }, this.completeUserEditing);
    }

    handleBorderColorChange = (event) => {
        console.log("changing border color to: " + event.target.value);
        this.setState({ borderColor: event.target.value }, this.completeUserEditing)
    }

    //original
    handleFontSizeChange = (event) => {
        console.log("handleTextColorChangeComplete to " + event.target.value);
        this.setState({ fontSize: event.target.value }, this.completeUserEditing);
    }

    handleBorderRadiusChange = (event) => {
        console.log("changing border radius to " + event.target.value);
        this.setState({ borderRadius: event.target.value }, this.completeUserEditing)
    }

    handleBorderThicknessChange = (event) => {
        console.log("changing border thickness to " + event.target.value);
        this.setState({ borderThickness: event.target.value }, this.completeUserEditing)
    }

    handlePaddingChange = (event) => {
        this.setState({ padding: event.target.value }, this.completeUserEditing);
        console.log("changing padding to " + event.target.value);
    }

    handleMarginChange= (event) => {
        this.setState({ margin: event.target.value }, this.completeUserEditing);
    }

    completeUserEditing = () => {
        console.log("completeUserEditing");
        console.log("this.state.textColor: " + this.state.textColor);
        this.props.changeLogoCallback(this.props.logo, this.props.logo.key, this.props.logo.text, this.state.textColor, 
            this.state.fontSize, this.state.padding, this.state.backgroundColor, this.state.borderColor, 
            this.state.borderRadius, this.state.borderThickness, this.state.margin);
    }

    render() {
        let undoDisabled = !this.props.canUndo();
        let undoClass = "waves-effect waves-light btn-small";
        if (undoDisabled)
            undoClass += " disabled";
        let redoDisabled = !this.props.canRedo();
        let redoClass = "waves-effect waves-light btn-small";
        if(redoDisabled)
            redoClass += " disabled"
        return (
            <div className="card-panel col s4">
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <button className="waves-effect waves-light btn-small">&#9998;</button>
                        <button className={undoClass} onClick={this.handleUndo}>Undo</button>
                        <button className={redoClass} onClick={this.handleRedo}>Redo</button>
                    </div>
                </div>
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Text</span>
                        <div className="row">
                            <div className="col s4">Color:</div>
                            <div className="col s8">
                                <input type="color"
                                        onChange={this.handleTextColorChange}
                                        value={this.props.logo.textColor}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s4">Background Color:</div>
                            <div className="col s8">
                                <input type="color"
                                        onChange={this.handleBackgroundColorChange}
                                        value={this.props.logo.backgroundColor}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s4">Border Color:</div>
                            <div className="col s8">
                                <input type="color"
                                        onChange={this.handleBorderColorChange}
                                        value={this.props.logo.borderColor}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s4">Font Size:</div>
                            <div className="col s8">
                                <input type="range" min="4" max="144" 
                                    onChange={this.handleFontSizeChange}
                                    value={this.props.logo.fontSize} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s4">Border Radius:</div>
                            <div className="col s8">
                                <input type="range" min="4" max="144" 
                                    onChange={this.handleBorderRadiusChange} 
                                    value={this.props.logo.borderRadius}
                                     />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s4">Border Thickness:</div>
                            <div className="col s8">
                                <input type="range" min="4" max="144" 
                                    onChange={this.handleBorderThicknessChange} 
                                    value={this.props.logo.borderThickness}
                                     />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s4">Padding:</div>
                            <div className="col s8">
                                <input type="range" min="4" max="144" 
                                    onChange={this.handlePaddingChange} 
                                    value={this.props.logo.padding}
                                     />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s4">Margin:</div>
                            <div className="col s8">
                                <input type="range" min="4" max="144" 
                                    onChange={this.handleMarginChange} 
                                    value={this.props.logo.margin}
                                     />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TextEditSidebar