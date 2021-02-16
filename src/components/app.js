import React, { Component } from 'react';

import Logo from './main-logo';
import SearchBar from './searchBar';
import RecentPosts from './recent-posts';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Logo />
        <SearchBar />
        <RecentPosts />
      </div>
    );
  }
}
