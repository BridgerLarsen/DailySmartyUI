import React, { Component } from 'react';
import { connect } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as actions from '../actions';

import Logo from './main-logo';
import SearchBar from './searchBar';
import ResultsPosts from './results-posts';

class Results extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false
        }
    }

    handleResultsSearchBarSubmit(query) {
        this.setState({ isLoading: true })
        this.props.fetchQueriedPosts(query, () => {
            this.setState({ isLoading: false})
        });
    }
    render() {
        return (
            <div>
                <Logo size={55} />
                <SearchBar onSubmit={query => this.handleResultsSearchBarSubmit(query)} />
                {this.state.isLoading ? (
                    <div className="content-loader">
                        <FontAwesomeIcon icon="spinner" spin />
                    </div>
                ) : (
                    <ResultsPosts />
                )}
            </div>
        )
    }
}

export default connect(null, actions)(Results);