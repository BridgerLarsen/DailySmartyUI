import React, { Component } from 'react';

export default class RecentPosts extends Component {
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