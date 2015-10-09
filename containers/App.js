import React, {Component} from 'react';
import Search from '../components/Search';
import {connect} from 'react-redux';
import {searchAction} from '../actions/actions';

class App extends Component {

  render() {
    const {dispatch, data} = this.props;
    return (
      <div className='main'>
        <Search
          search={this.handleSearch.bind(this)}/>
        <p>{data.result.total_count}</p>
      </div>
    );
  }

  handleSearch(text) {
    this.props.dispatch(searchAction(text))
  }
}

function select(state) {
  console.log(state);
  return {
    data: state.search
  };
}

export default connect(select)(App);
