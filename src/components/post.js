import React, { Component } from 'react';

class Post extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li>
                {this.props.title}
            </li>
        )
    }
}

export default Post;