import React, { Component } from 'react';
import axios from 'axios';
import {Button} from 'reactstrap';
import Helmet from 'react-helmet';
export default class Inbox extends Component {
    constructor(props) {
        super(props);
        this.state = {
          messageList: [],
          userID: '',
        };
      }
//loading the messages for the specific user
      componentDidMount(){
        const self = this;
        axios.get('/api/loadMessages',
        {
            params: {
                userID: this.props.ID
            }
                })
                .then(response => {
                    var  messageList  = response.data
                 this.setState({ messageList }); //I am going to map this later
                console.log(this.props.ID)
        })
     }
  render() {
      console.log(this.props.ID) //testing purposes
    return (
      <div>
        <h1 className = "heading">
       Your Inbox!...
      </h1>
         <div id = "grid">
        {
          this.state.messageList.map((message) => {
            return <div message = {message} key = {message.id}>
              <Helmet>
                <style>{'button {background-color: #224C98; /* Green */border: none;color: white;padding: 15px 32px;text-align: center;text-decoration: none;display: inline-block;font-size: 16px;}hr {color: #224C98;} body { height: 1200px;  background-color: #1fc8db; background-image: linear-gradient(141deg, #9fb8ad 0%, #1fc8db 51%, #2cb5e8 75%); } h1,h2, h4, .heading,p p { margin: 0;  padding: 18px;    display: block; margin-block-start: 1em; margin-block-end: 1em; margin-inline-start: 0px;margin-inline-end: 0px;  font: 400 15px/1.8 "Lato", sans-serif; text-align: center; font-size: 40px; background-color: 	#224C98; color: seashell; padding: 18px; letter-spacing: 10px; top: 20%; width: 100%; position: relative; left: 0;}'}</style>
            </Helmet>
          
              <div>
                <h5><b>Title: {message.title} (Posting: {message.posting_id}) <i>FROM: {message.sender_name}</i></b></h5>
              <p>{message.message}</p>
              
              </div>
            
              <button  onClick={() => 
                        this.props.history.push({
                            pathname: `/Reply/${message.receiver_id}`,
                            state: { message }
                        }) }  >Reply</button>
            </div>})
        }
        </div>
      </div>
    )
  }
}
