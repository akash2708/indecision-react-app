import React from "react";


export default class AddOption extends React.Component {
  // This is not a global function unlike the ones in "jsx-indecision.js" but rather class methods.
  state = {
    error: undefined
  }

  handleAddOption = (event) => {
    event.preventDefault();
    console.log("testing");
    const x = event.target.elements.option.value.trim();
    const error = this.props.newOption(x);
    this.setState(() => ({
      error
    }))
    if (!error) {
      event.target.elements.option.value = ""
    }


  };
  render() {
    return (
      <div>
        { this.state.error ? <p className="add-option-error">
                               { this.state.error }
                             </p> : null }
        <form className="add-option"
              autoComplete="off"
              onSubmit={ this.handleAddOption }>
          <input
                 type="text"
                 name="option" />
          <button
                  type="submit"
                  className="button">
            Add Option
          </button>
        </form>
      </div>
    )
  }
}