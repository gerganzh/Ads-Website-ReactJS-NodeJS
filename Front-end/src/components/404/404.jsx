import React, { Component } from 'react'
import './404.css';
import Helmet from 'react-helmet';

export default class Error extends Component {
  render() {
    return (
      <div> <Helmet>
      <style>{'body { background-color: #416475; } h1,h2, p, h3, h4 { top: 50%; margin: 50px; font-family: "Roboto"; color: seashell;}'}</style>
  </Helmet>
        <h1>Hmmm, something is not right!</h1>
<p class="zoom-area"> </p>
<section class="error-container">
  <span>4</span>
  <span><span class="screen-reader-text">0</span></span>
  <span>4</span>
</section>
<div class="link-container">
  <a href="/" class="more-link">GO BACK TO THE HOME PAGE</a>
</div>
      </div>
    )
  }
}
