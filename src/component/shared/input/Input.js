import React from "react";
import isEmpty from "lodash/isEmpty";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  handleChange = event => {
    event.preventDefault();
    const valid = this.validation(event.target.value);
    if (this.props.onChange) {
      this.props.onChange(event);
    }
  };

  validation = value => {
    let valid = true;
    if (this.props.required && isEmpty(value)) {
      valid = false;
    }
    this.setState({
      value,
      valid
    });
    return valid;
  };

  render() {
    console.log("Input component props", this.props);
    return (
      <div>
        <input
          id={this.props.id}
          name={this.props.name}
          type={this.props.type}
          placeholder={this.props.placeholder}
          onChange={this.handleChange}
          value={this.state.value}
        />
      </div>
    );
  }
}

export default Input;
