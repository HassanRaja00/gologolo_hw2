import React, { Component } from 'react';
// import Modal from './Modal';
import {Modal} from 'react-materialize'

class TextEditSidebar extends Component {
    constructor(props) {
        super(props);

        // WE'LL MANAGE THE UI CONTROL
        // VALUES HERE
        this.state = {
            text: props.logo.text,
            potentialNewText: "",
            textColor : props.logo.textColor, //fix hardcoded values later
            fontSize : props.logo.fontSize,
            backgroundColor : props.logo.backgroundColor,
            borderColor : props.logo.borderColor,
            borderRadius : props.logo.borderRadius,
            borderThickness : props.logo.borderThickness,
            padding: props.logo.padding,
            margin: props.logo.margin
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

    changingText = (event) => {
        if(event.target.value !== ""){
            let newstr = event.target.value.replace(/ /g, "\u00a0");
            this.setState({ potentialNewText: newstr });
        }
    }

    handleTextChange = () => {
        console.log("changing logo text");
        this.checkAllWhitespaces(this.state.potentialNewText);
        if(this.state.potentialNewText !== ""){
            this.setState({ text: this.state.potentialNewText, potentialNewText: ""}, this.completeUserEditing);
        }
        

        
    }

    completeUserEditing = () => {
        console.log("completeUserEditing");
        this.props.changeLogoCallback(this.props.logo, this.props.logo.key, this.state.text, this.state.textColor, 
            this.state.fontSize, this.state.padding, this.state.backgroundColor, this.state.borderColor, 
            this.state.borderRadius, this.state.borderThickness, this.state.margin);
    }

    // this method checks if a string is completely made of whitespaces
    checkAllWhitespaces = (string) => {
        let cleanedStr = string.replace(/\s/g, '');
        if(cleanedStr.length === ''){
            this.setState({ potentialNewText: ""})
            return this.state.text;
        } else {
            return string;
        }
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
        let fontSizeValue = this.props.logo.fontSize;
        let borderRadiusValue = this.props.logo.borderRadius;
        let borderThicknessValue = this.props.logo.borderThickness
        let paddingValue = this.props.logo.padding;
        let marginValue = this.props.logo.margin;
        return (
            <div className="card-panel col s4">
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        {/* <Modal /> */}
                        <Modal  header='Edit Logo Text'
                                trigger={<button className="waves-effect waves-light btn-small">&#9998;</button>}>
                                    {<input type='text'
                                            onChange={this.changingText}/>}
                                    {<button className="waves-effect waves-light btn-small"
                                            onClick={this.handleTextChange}
                                            >Enter</button>}
                        </Modal>
                        {/* <button className="waves-effect waves-light btn-small">&#9998;</button> */}
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
                                 <div style={{textAlign: "center"}}>{fontSizeValue}</div>
                                <input type="range" min="4" max="144" 
                                    onChange={this.handleFontSizeChange}
                                    value={this.props.logo.fontSize} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s4">Border Radius:</div>
                            <div className="col s8">
                                <div style={{textAlign: "center"}}>{borderRadiusValue}</div>
                                <input type="range" min="4" max="144" 
                                    onChange={this.handleBorderRadiusChange} 
                                    value={this.props.logo.borderRadius}
                                     />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s4">Border Thickness:</div>
                            <div className="col s8">
                                <div style={{textAlign: "center"}}>{borderThicknessValue}</div>
                                <input type="range" min="4" max="144" 
                                    onChange={this.handleBorderThicknessChange} 
                                    value={this.props.logo.borderThickness}
                                     />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s4">Padding:</div>
                            <div className="col s8">
                                <div style={{textAlign: "center"}}>{paddingValue}</div>
                                <input type="range" min="4" max="144" 
                                    onChange={this.handlePaddingChange} 
                                    value={this.props.logo.padding}
                                     />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s4">Margin:</div>
                            <div className="col s8">
                                <div style={{textAlign: "center"}}>{marginValue}</div>
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