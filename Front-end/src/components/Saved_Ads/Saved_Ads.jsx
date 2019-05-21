import React, { Component } from 'react';
import Helmet from 'react-helmet';
import {Button} from 'reactstrap';
import axios from 'axios';

export default class Saved_Ads extends Component {
    constructor(props) {
        super(props);
        this.state = {
          adsList: [],
        };
      }

      //loading saved ads API call
      componentDidMount(){
        const self = this;
        axios.get('/api/loadSaved',
        {
            params: {
                userID: this.props.ID
            }
                })
                .then(response => {
                    var  adsList  = response.data
                 this.setState({ adsList }); //put into a list
                console.log(response.data)
        })
     }
 

  render() {
      //mapping the list so we can get the needed data
    return (
        <div>
        <h1>You saved this...</h1>
        <div class="grid-container1">
        {
          this.state.adsList.map((posting) => {
            return <div posting = {posting} key = {posting.user_id}>
               <Helmet>
                <style>{'button {background-color: #224C98; /* Green */border: none;color: white;padding: 15px 32px;text-align: center;text-decoration: none;display: inline-block;font-size: 16px;}hr {color: #224C98;} body { height: 1200px;  background-color: #1fc8db; background-image: linear-gradient(141deg, #9fb8ad 0%, #1fc8db 51%, #2cb5e8 75%); } h1,h2, h4, .heading,p p { margin: 0;  padding: 18px;    display: block; margin-block-start: 1em; margin-block-end: 1em; margin-inline-start: 0px;margin-inline-end: 0px;  font: 400 15px/1.8 "Lato", sans-serif; text-align: center; font-size: 40px; background-color: 	#224C98; color: seashell; padding: 18px; letter-spacing: 10px; top: 20%; width: 100%; position: relative; left: 0;}'}</style>
            </Helmet>
            
              <div class="grid-item1"><img className = "imageShowings"  src={posting.image}/>
              <h5><b>{posting.title} | Price: {posting.price} $</b></h5>
              <p><b>Category: {posting.category}</b></p>
              <p><b>Condition: {posting.category}</b></p>
              <p>{posting.description}</p>
              <button value={posting.posting_id} className="btnShowings" onClick={() => 
                          this.props.history.push({
                              pathname: `/Ad/${posting.posting_id}`,
                              state: { posting }
                          })}
              >More</button>
              
             
          </div>
            </div>})
        }
        </div>
        </div>
    )
  }
}
