import React from 'react';
import './style.css';
import Card from '../UI/Card';
 
const SideBar = (props) => {
  return (
<div className="sideBaerContainer">
  <Card style={{marginBottom: '20px', padding: '20px', boxSizing: 'border-box'}}>
  <div className="cardHeadder" >
  <span>About-Us</span>
  </div>
  <div className="profilImageContainer">
    <img src={require('../../assets/BlogPostImages/home-version-two-website-growth-img.png')} alt="sideabout"/>
  </div>
  <div className="cardBody">
  <p className="personalBio">Hi, my name is Umukoro chinedu, i am a software enginer. I live in Lagos state Nigeria. I work as a frontend Developer with Ekaruz technology</p>
  </div>
  </Card>
  <Card style={{marginBottom: '20px', padding: '20px', boxSizing: 'border-box'}}>
  <div className="cardHeadder">
  <span>Social Network</span>
  </div>
  </Card>
  <Card style={{marginBottom: '20px', padding: '20px', boxSizing: 'border-box'}}>
  <div className="cardHeadder" >
  <span>Recent Post</span>
  </div>
  </Card>
</div>
  );
}
 
export default SideBar;