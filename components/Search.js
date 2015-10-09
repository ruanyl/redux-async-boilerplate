import React, {Component} from 'react';
import {TextField} from 'material-ui';

export default class Search extends Component {
  render() {
    return (
      <TextField
        hintText='some text'
        onChange={this.handleInputChange.bind(this)}/>
    );
  }

  handleInputChange(e) {
    this.props.search(e.target.value);
  }
}
