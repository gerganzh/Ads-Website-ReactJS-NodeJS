import React, { Component } from 'react';
import history from '../../history/history';
import Helmet from 'react-helmet';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import {Link} from 'react-router-dom';

export default class Profile extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      LoggedUser: '',
      UserID: '',
    };
    this.LogOutClick = this.LogOutClick.bind(this);
  }

//logging out
  LogOutClick(){
        
    this.props.LogOutUser(); 
    history.push('/Logout');
  } 
  
//If logged in, let user in
  componentDidMount(){
        
    if (this.props.User !== undefined)
    {
    this.setState({LoggedUser: this.props.User, UserID: this.props.ID})
    }
    else
    {
      history.push('/Login');
    }
  }

  render() {
    return (
      <div>
        <head>
          <div> <Helmet>
                <style>{'button {background-color: #224C98; /* Green */border: none;color: white;padding: 15px 32px;text-align: center;text-decoration: none;display: inline-block;font-size: 16px;}hr {color: #224C98;} body { height: 1200px;  background-color: #1fc8db; background-image: linear-gradient(141deg, #9fb8ad 0%, #1fc8db 51%, #2cb5e8 75%); } h1,h2, h4, .heading,p p { margin: 0;  padding: 18px;    display: block; margin-block-start: 1em; margin-block-end: 1em; margin-inline-start: 0px;margin-inline-end: 0px;  font: 400 15px/1.8 "Lato", sans-serif; text-align: center; font-size: 40px; background-color: 	#224C98; color: seashell; padding: 18px; letter-spacing: 10px; top: 20%; width: 100%; position: relative; left: 0;}'}</style>
            </Helmet>
            </div>
      </head>
       <div>
      <h1 className = "heading">
       Hello, {this.props.User}!
      </h1>
      <hr className = "line" align = "center"></hr>
<div>
         <Row>
      <Col sm="3" >
        <Card  className = "card2" style={{ backgroundColor: '#0087BD'}} body inverse >
          <CardTitle className = "cardTitle"><b>Post an Ad</b></CardTitle>
          <CardText className = "cardTitle">Post a new ad in the category you want</CardText>
          <Link to = "/Post"><Button className = "btnControl" style={{ backgroundColor: '#224C98'}} >Go there!</Button></Link>
        </Card>
      </Col>
      <Col  sm="3">
        <Card className = "card1" style={{ backgroundColor: '#0087BD'}} body inverse>
          <CardTitle className = "cardTitle"><b>View my saved ads</b></CardTitle>
          <CardText className = "cardTitle">Saved an ad? Check it here!</CardText>
          <Link to = "/SavedAds"><Button className = "btnControl" style={{ backgroundColor: '#224C98'}} >Go there!</Button></Link>
        </Card>
      </Col>
      <Col  sm="3">
        <Card className = "card3" style={{ backgroundColor: '#0087BD'}} body inverse>
          <CardTitle className = "cardTitle"><b>My Ads</b></CardTitle>
          <CardText className = "cardTitle">Check your current ads, and delete them if neccessary.</CardText>
          <Link to = "/DeleteAds"><Button className = "btnControl" style={{ backgroundColor: '#224C98'}} >Go there!</Button></Link>
        </Card>
      </Col>
      <Col  sm="3">
        <Card className = "card3" style={{ backgroundColor: '#0087BD'}} body inverse>
          <CardTitle className = "cardTitle"><b>Messages</b></CardTitle>
          <CardText className = "cardTitle">Check your messages</CardText>
          <Link to = "/Inbox"><Button className = "btnControl" style={{ backgroundColor: '#224C98'}} >Go there!</Button></Link>
        </Card>
      </Col>
    </Row>
    </div>
    <hr></hr>
    <div className = "text-center">
    <button className = "btnLogOut" onClick = {this.LogOutClick}>Log Out</button>
    </div>
        
      </div>
      </div>
      
    )
  }
}
