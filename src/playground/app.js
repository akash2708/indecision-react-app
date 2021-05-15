// Revise this project uptill now

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options: []
    }

  }

  handleDeleteOptions() {
    this.setState(() => ({
      options: []
    }))
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

  handleDeleteOption(id) {
    this.setState((prevState) => ({
      options: prevState.options.filter((item, index) => index !== id)
    }))
  }

  handlePick() {
    const x = Math.floor((Math.random() * this.state.options.length))
    alert(this.state.options[x]);
  }

  handleAddOption(option) {
    if (!option) {
      return "Enter valid value to add item";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option already exits";
    }

    this.setState((prevState) => ({
      options: [...prevState.options, option]
    }))

  }

  render() {

    const subtitle = "Put your life in the hands of a computer!";

    return (
      <div>
        <Header subtitle={ subtitle } />
        <Action
                randomOption={ this.handlePick }
                hasOptions={ this.state.options.length !== 0 ? true : false } />
        <Options
                 options={ this.state.options }
                 deleteAll={ this.handleDeleteOptions }
                 deleteOption={ this.handleDeleteOption } />
        <AddOption newOption={ this.handleAddOption } />
      </div>
    )
  }
}


const Header = (props) => {
  return (
    <div>
      <h1>{ props.title }</h1>
      { props.subtitle && <h2>{ props.subtitle }</h2> }
    </div>
  )

}

Header.defaultProps = {
  title: "Indecision",

}

const Action = (props) => {
  return (
    <div>
      <button
              disabled={ !(props.hasOptions) }
              onClick={ props.randomOption }>
        What should I do?
      </button>
    </div>
  )
}

const Options = (props) => {
  const x = props.options;
  return (

    <div>
      <button onClick={ props.deleteAll }>
        Remove All
      </button>
      { props.options.length === 0 && <p>
                                        Add an option to get started!
                                      </p> }
      { x.map((option, index) => ( <Option
                                           id={ index }
                                           key={ index }
                                           optionText={ option }
                                           deleteOption={ props.deleteOption } />)) }
    </div>

  )
}

const Option = (props) => {
  return (
    <div>
      { props.optionText }
      <button onClick={ () => {
                          props.deleteOption(props.id)
                        } }>
        Remove
      </button>
    </div>
  )
}

class AddOption extends React.Component {
  // This is not a global function unlike the ones in "jsx-indecision.js" but rather class methods.
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    }
  }

  handleAddOption(event) {
    event.preventDefault();
    const x = event.target.elements.option.value.trim();
    const error = this.props.newOption(x);
    this.setState(() => ({
      error
    }))
    if (!error) {
      event.target.elements.option.value = ""
    }


  }
  render() {
    return (
      <div>
        { this.state.error ? <p>
                               { this.state.error }
                             </p> : null }
        <form
              onSubmit={ this.handleAddOption }
              autoComplete="off">
          <input
                 type="text"
                 name="option" />
          <button type="submit">
            Add Option
          </button>
        </form>
      </div>
    )
  }
}

// const User = (props) => {
//   return (
//     <div>
//       <p>
//         Name:
//         { props.name }
//       </p>
//       <p>
//         Age:
//         { props.age }
//       </p>
//     </div>

//   )
// }



ReactDOM.render(<IndecisionApp />, document.getElementById("app"));