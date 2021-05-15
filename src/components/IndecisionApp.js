import React from "react";
import AddOption from "./AddOption";
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";
import OptionModal from "./OptionModal"

export default class IndecisionApp extends React.Component {

  state = {
    options: [],
    selectedOption: undefined
  }

  handleDeleteOptions = () => {
    this.setState(() => ({
      options: []
    }))
  };

  handleClearSelectedOption = () => {
    this.setState(() => ({
      selectedOption: undefined
    }))
  }

  handleDeleteOption = (id) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((item, index) => index !== id)
    }))
  };

  handlePick = () => {
    const x = Math.floor((Math.random() * this.state.options.length))
    this.setState(() => ({
      selectedOption: this.state.options[x]
    }))


  };

  handleAddOption = (option) => {
    if (!option) {
      return "Enter valid value to add item.";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option already exits!";
    }

    this.setState((prevState) => ({
      options: [...prevState.options, option]
    }))

  };
  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({
          options
        }));

      }

    } catch ( error ) {}


  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
      console.log("Component did update!")

    }
  }

  componentWillUnmount() {
    console.log("Component will unmount.")
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({
          options
        }));

      }

    } catch ( error ) {}


  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
      console.log("Component did update!")

    }
  }

  componentWillUnmount() {
    console.log("Component will unmount.")
  }


  render() {

    const subtitle = "Put your life in the hands of a computer!";

    return (
      <div>
        <Header subtitle={ subtitle } />
        <div className="container">
          <Action
                  randomOption={ this.handlePick }
                  hasOptions={ this.state.options.length !== 0 ? true : false } />
          <div className="widget">
            <Options
                     options={ this.state.options }
                     deleteAll={ this.handleDeleteOptions }
                     deleteOption={ this.handleDeleteOption } />
            <AddOption newOption={ this.handleAddOption } />
          </div>
        </div>
        <OptionModal
                     selectedOption={ this.state.selectedOption }
                     handleClearSelectedOption={ this.handleClearSelectedOption } />
      </div>
    )
  }
}