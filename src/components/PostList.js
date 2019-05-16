import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPostsAndUsers } from '../actions';
import { capitalize } from '../utils/helpers';
import UserHeader from './UserHeader';
import '../css/PostList.css';

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPostsAndUsers();
  }

  renderList() {
    return this.props.posts.map(post => {
      return (
        <div className="PostList-item d-flex" key={post.id}>
          <i className="PostList-avatar d-flex fas fa-user fa-2x" />
          <div className="PostList-content">
            <h2 className="PostList-title">{capitalize(post.title)}</h2>
            <p>{capitalize(post.body)}</p>
            <UserHeader userId={post.userId} />
          </div>
        </div>
      );
    });
  }

  render() {
    // console.log(this.props.posts);
    return <div className="PostList">{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  return { posts: state.posts };
};

export default connect(
  mapStateToProps,
  { fetchPostsAndUsers }
)(PostList);
