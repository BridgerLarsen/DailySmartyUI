import React, { Component } from 'react';

class Post extends Component {
    constructor(props) {
        super(props);

        this.state = {
            animatedHoverEffectLink: "",
            animatedHoverEffectBox: ""
        }
    }

    handleMouseEnter() {
        this.setState({ 
            animatedHoverEffectLink: "animatedHoverEffectLink", 
            animatedHoverEffectBox: "animatedHoverEffectBox"
        });
    }

    handleMouseLeave() {
        this.setState({ 
            animatedHoverEffectLink: "", 
            animatedHoverEffectBox: ""
        });
    }

    renderTopics() {
        let topics = this.props.associated_topics.map((topic, index) => {
            return (
                <span className="post-topic" key={index}>{topic}</span>
            )
        })

        return topics;
    }

    renderLinks() {
        let links = this.props.post_links.map((post_link, index ) => {
            return (
                <div className="post-link-container" key={index}>
                    
                    <div className={"post-link-box " + this.state.animatedHoverEffectBox}></div>
                    
                    <div className="post-link">
                        <a href={post_link.link_url}>Useful Link #{index + 1}</a>
                    </div>
                </div>
            )
        })

        return links;
    }

    render() {
        if (this.props.type === "recent") {
            return ( 
                <li className="recent-post">
                    <div className="recent-post-title">
                        <a href={this.props.url_for_post}>{this.props.title}</a>
                    </div>
    
                    <div className="recent-post-topics" >
                        {this.renderTopics()}
                    </div>
                </li>
            )
        } else if (this.props.type === "results") {
            return ( 
                <div className="result-post">
                    <div className="result-post-topics">
                        {this.renderTopics()}
                    </div>
    
                    <div className="result-post-title-link-wrapper"
                        onMouseEnter={() => this.handleMouseEnter()}
                        onMouseLeave={() => this.handleMouseLeave()}
                    >
                        <div className="result-post-title" >
                            <a href={this.props.url_for_post}>{this.props.title}</a>
                        </div>

                        <div className={"result-post-links " + this.state.animatedHoverEffectLink}>
                            {this.renderLinks()}
                        </div> 
                    </div>
                </div>
            )
        }
    }
}

export default Post;