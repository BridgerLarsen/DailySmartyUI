import React, { Component } from 'react';
import { connect } from 'react-redux';

import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

import * as actions from '../actions';

import Logo from './main-logo';
import SearchBar from './searchBar';
import RecentPosts from './recent-posts';

library.add(faSpinner);

class Home extends Component {
  constructor(props) {
    super(props);
  }

  handleSearchBarSubmit(query) {
    this.props.fetchQueriedPosts(query, () => {
        this.props.history.push('/results');
      }
    );
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

export default connect(null, actions)(Home);
