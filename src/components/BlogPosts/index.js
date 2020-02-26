import React from 'react';
import './style.css';
import Card from '../UI/Card';

const BlogPost = (props) => {
  return (
    <div className='blogPost'>
      <Card>
        <div className='blogHeader'>
          <span className='blogCategory'>featured</span>
          <h1 className='post-title'>Black is beautiful</h1>
          <span className='postedBy'>
            Posted on july 21, 2016 by Sora Blogging tips
          </span>
          <div className="postImageContainer">
            <img src={require('../../assets/BlogPostImages/img-work-seo3.png')} alt="postimage"/>>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default BlogPost;
