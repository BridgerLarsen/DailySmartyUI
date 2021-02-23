import React, { Component } from 'react';

import Logo from './main-logo';
import SearchBar from './searchBar';
import RecentPosts from './recent-posts';

export default class App extends Component {
  handleFormSubmit(query) {
    console.log('tring to handle submit for query', query)
    this.props.history.push('/results');
}

  render() {
    return (
      <div className='app'>
        <Logo />
        <SearchBar onSubmit={(query) => this.handleFormSubmit(query)} />
        <RecentPosts />
      </div>
    );
  }
}
