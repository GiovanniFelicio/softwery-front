import React, {Component} from 'react';

class Feed extends Component{

    render(){
        return(
            <div key={this.props.key}>
                {this.props.name} 
                    - {this.props.likes > 1 ? this.props.likes + ' likes' : this.props.likes + ' like'} 
                    - {this.props.comments > 1 ? this.props.comments + ' comments' : this.props.comments + ' comment'}
            </div>
        );
    }
}

export default Feed;