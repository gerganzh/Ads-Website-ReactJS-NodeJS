import React, { Component } from 'react'
import axios from 'axios';
import Helmet from 'react-helmet';
import {Button} from 'reactstrap';
import history from '../../history/history';

export default class DeleteAds extends Component {
    constructor(props) {
        super(props);
        this.state = {
          adsList: [],
          userID: '',
          userID1: '',
          adID: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      componentDidMount(){
       axios.get('/api/loadSpecificAds',
       {
           params: {
               userID: this.props.ID
           }
               })
               .then(response => {
                   var  adsList  = response.data
                this.setState({ adsList });
               console.log(response.data)
       })
    }

 //on clicking submit the delete api is called
    handleSubmit(event, posting){

        event.preventDefault();
            posting = {posting} //parameters
            const deletion={
            userID1: this.props.ID,
            adID: posting.posting.posting_id
            }
            axios.post('/api/deleteAds', deletion) //POST request
            .then((response) => {
                console.log(response);
                  if(response.data.status)
                  {
                      history.push('/Delete_Success');
                  }
                  else
                  {
                    history.push('/404') //on error
                  }
                })
                }
            
    //mapping the objects from the list
  render() {
    return (
      <div>
      <h1>Your postings...</h1>
      <div>
        <div class="grid-container1">
        {
          this.state.adsList.map((posting) => {
            return <div posting = {posting} key = {posting.posting_id}>
              <Helmet>
                <style>{'button {background-color: #224C98; /* Green */border: none;color: white;padding: 15px 32px;text-align: center;text-decoration: none;display: inline-block;font-size: 16px;}hr {color: #224C98;} body { height: 1200px;  background-color: #1fc8db; background-image: linear-gradient(141deg, #9fb8ad 0%, #1fc8db 51%, #2cb5e8 75%); } h1,h2, h4, .heading,p p { margin: 0;  padding: 18px;    display: block; margin-block-start: 1em; margin-block-end: 1em; margin-inline-start: 0px;margin-inline-end: 0px;  font: 400 15px/1.8 "Lato", sans-serif; text-align: center; font-size: 40px; background-color: 	#224C98; color: seashell; padding: 18px; letter-spacing: 10px; top: 20%; width: 100%; position: relative; left: 0;}'}</style>
            </Helmet>
              <div class="grid-item1"><img className = "imageShowings" width = "300px" height = "200px" src={posting.image}/>
              <h3><b>{posting.posting_title} | Price: {posting.price} $</b></h3>
              <p><b>Category: {posting.category}</b></p>
              <p><b>Condition: {posting.category}</b></p>
              <p>{posting.description}</p>
              <Button color = "danger" onClick={e => this.handleSubmit(e, posting)}
              >DELETE</Button>
              
             
          </div>
            </div>})
        }
        </div>
      </div>
      </div>
    )
  }
} 
 