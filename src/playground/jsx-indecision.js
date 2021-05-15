'use strict';

console.log("App.js is running");

const app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer.",
  options: []
};

const onFormSubmit = (event) => {
  event.preventDefault();
  let option = event.target.elements.option.value;
  if (option) {
    app.options.push(option);
    render();
    event.target.elements.option.value = "";
  }

}

const onRemoveAll = () => {
  app.options = [];
  render();
}

const onMakeDecision = () => {
  const x = Math.floor(Math.random() * app.options.length);
  const option = app.options[x];
  alert(option);

}



var appRoot = document.getElementById("app");

const render = () => {
  var template = (
  <div>
    <h1>{ app.title }</h1>
    { app.subtitle && <p>
                        { app.subtitle }
                      </p> }
    <p>
      { app.options.length > 0 ? "Here are your options" : "No options" }
    </p>
    <button
            disabled={ app.options.length === 0 ? true : false }
            onClick={ onMakeDecision }>
      What should I do?
    </button>
    <button onClick={ onRemoveAll }>
      Remove All
    </button>
    <ol>
      { app.options.map((option, index) => (<li key={ index }>
                                              { option }
                                            </li>)) }
    </ol>
    <form onSubmit={ onFormSubmit }>
      <input
             type="text"
             name="option" />
      <button>
        Add Option
      </button>
    </form>
  </div>
  );
  ReactDOM.render(template, appRoot);
}

render();
