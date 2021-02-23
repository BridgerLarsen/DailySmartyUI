import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

import Logo from './main-logo';
import SearchBar from './searchBar';
import RecentPosts from './recent-posts';

class App extends Component {
  constructor(props) {
    super(props);
  }

  handleSearchBarSubmit(query) {
    this.props.fetchQueriedPosts(query);
    this.props.history.push('/results');
}

  render() {
    return (
      <div className='app'>
        <Logo />
        <SearchBar onSubmit={(query) => this.handleSearchBarSubmit(query)} />
        <RecentPosts />
      </div>
    );
  }
}

export default connect(null, actions)(App);
