class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      boolean: false
    }

  }
  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        boolean: !(prevState.boolean)
      }
    })
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={ this.handleToggleVisibility }>
          { this.state.boolean ? "Hide Details" : "Show Details" }
        </button>
        { this.state.boolean ? <p>
                                 These are some details which you can now see!
                               </p> : null }
      </div>

    )
  }
}

ReactDOM.render(<VisibilityToggle/>, document.getElementById("app"));









