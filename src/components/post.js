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

    getNameForPostLink(str) {
        var index = str.lastIndexOf('/');
        var link = str.substring(index + 1, str.length);

        if (index + 1 === str.length) {
            link = str.slice(0, index);
            index = link.lastIndexOf('/');
            link = str.substring(index + 1, str.length - 1) 
        } 
        
        if (link.includes('-')) {
            var newLink = link.replace(/[-]/g, ' ')
            link = newLink;
        }

        if (link.includes('.htm')) {
            var newLink = link.replace('.htm' , '');
            link = newLink;
        } 

        return link;
    }

    renderLinks() {
        let links = this.props.post_links.map((post_link, index ) => {
            return (
                <div className="post-link-container" key={index}>
                    
                    <div className={"post-link-box " + this.state.animatedHoverEffectBox}></div>
                    
                    <div className="post-link">
                        <a href={post_link.link_url}>{this.getNameForPostLink(post_link.link_url)}</a>
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