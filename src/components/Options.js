
import React from "react";
import Option from "./Option";

const Options = (props) => {
  const x = props.options;
  return (

    <div>
      <div className="widget-header">
        <h3>Your Options</h3>
        <button
                className="button button--link"
                onClick={ props.deleteAll }>
          Remove All
        </button>
      </div>
      { props.options.length === 0 && <p className="widget__message">
                                        Add an option to get started!
                                      </p> }
      { x.map((option, index) => ( <Option
                                           id={ index }
                                           key={ index }
                                           count={ index + 1 }
                                           optionText={ option }
                                           deleteOption={ props.deleteOption } />)) }
    </div>

  )
}

export default Options;
