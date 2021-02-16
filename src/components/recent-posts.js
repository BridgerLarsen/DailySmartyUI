import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

class RecentPosts extends Component {

    componentDidMount() {
        this.props.fetchRecentPosts();
    }

    render() {
        return (
            <div className="recent-posts">
                <div className="recent-posts-wrapper">
                    <div className="recent-posts-heading">
                        Recent Posts
                    </div>

                    <ul className="recent-posts-items">
                        <li>Recent posts</li>
                        <li>Recent posts</li>
                        <li>Recent posts</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default connect(null, actions)(RecentPosts)