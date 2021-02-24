import React, { Component } from 'react';
import { connect } from 'react-redux';

import Post from './post';

class ResultsPosts extends Component {
    constructor(props) {
        super(props);
    }

    renderResultsPosts() {
        const resultsPosts = this.props.resultsPosts.map((post, index) => {
            return (
                <Post key={index} {...post} />
            )
        })

        return resultsPosts;
    }

    render() {
        return (
            <div className="results-posts-wrapper">
                <div className="results-posts">
                    <div className="results-post">
                        {this.renderResultsPosts()}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        resultsPosts: state.posts.resultsPosts
    }
}

export default connect(mapStateToProps)(ResultsPosts);