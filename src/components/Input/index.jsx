import React, { Component } from 'react'

class Input extends Component {
  constructor(props) {
    super(props)
  }

  onChange = e => this.props.onChange(e.target.value)

  render() {
    return (
      <input
        onChange={this.onChange}
        placeholder={this.props.placeholder}
        type="text"
        value={this.props.value}
      />
    )
  }
}

export default Input