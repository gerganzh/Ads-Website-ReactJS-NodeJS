import React, { Component } from 'react';
import '../Home/Home.css';
import Helmet from 'react-helmet';
import styled from 'styled-components';

const imgMyimageexample = require('../Home/images/image.jpg');
const divStyle = {
  height: "1000px",
  backgroundImage: `url(${imgMyimageexample})`,
  backgroundSize: 'cover' ,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center"

};

class Delete_Ads extends Component {
  
    render() {
      return (
  
        <div>
        <div>
        <Helmet>
        <style>{'body, html { height: 100%; margin: 0; } h1,h2,p { margin: 0;  padding: 18px;    display: block; margin-block-start: 1em; margin-block-end: 1em; margin-inline-start: 0px;margin-inline-end: 0px;  font: 400 15px/1.8 "Lato", sans-serif; text-align: center; font-size: 40px; background-color: #40A798; color: seashell; padding: 18px; letter-spacing: 10px; top: 50%; width: 100%; position: absolute; left: 0;}'}</style>
    </Helmet>
    </div>
        <div className="Login-Component" style={divStyle} >
      
        <p className="title">YOU HAVE DELETED YOUR POSTING SUCCESSFULY!</p>
      </div>
      </div>
      );
    }
  }
  
  export default Delete_Ads;
  