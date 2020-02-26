import React from 'react';
import './style.css';
import BlogPost from '../../components/BlogPosts';
import SideBar from '../../components/SideBar';
 
const Posts = (props) => {
  return (
    <section className="container">
    <BlogPost/>
    <SideBar/>
    </section>
  );
}
 
export default Posts;