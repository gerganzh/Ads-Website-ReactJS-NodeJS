import React, { Component } from 'react'
import axios from 'axios';
import history from '../../history/history';
import Helmet from 'react-helmet';
import './Post.css';

export default class Post extends Component {

    constructor(props){
        super(props);
        this.state={
            
            title: '',
            category: '',
            description: '',
            features: '',
            city: '',
            price: '',
            image: '',
            condition: '',
            UserID: '',
            username: '',
            
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeTitle=this.onChangeTitle.bind(this);
        this.onChangeDescription=this.onChangeDescription.bind(this);
        this.onChangeCategory = this.onChangeCategory.bind(this);
        this.onChangeFeatures = this.onChangeFeatures.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangeImage = this.onChangeImage.bind(this);
        this.onChangeCondition = this.onChangeCondition.bind(this);
        this.onChangeCity = this.onChangeCity.bind(this);
       
    }
//for posting an add we get all data we need, and we insert it in the database
    handleSubmit(event){

        event.preventDefault();

            const posting={
            title: this.state.title,
            category: this.state.category,
            description: this.state.description,
            features: this.state.features,
            condition: this.state.condition,
            price: this.state.price,
            city: this.state.city,
            image: this.state.image,
            userID: this.props.ID,
            username: this.props.User,
            }

            axios.post('/api/createPosting',posting)
            .then((response) => {
                console.log(response);
                  if(response.data.status)
                  {
                      history.push('/Post_Success');
                  }
                  else{
                      history.push('/404');
                  }
                })
                }
        
    onChangeTitle(event){
      this.setState({title: event.target.value});
    }

    onChangeDescription(event){
      this.setState({description: event.target.value});
    }

    onChangeCity(event){
        this.setState({city: event.target.value});
      }

      onChangeCategory(event){
        this.setState({category: event.target.value});
      }

      onChangeFeatures(event){
        this.setState({features: event.target.value});
      }

      onChangeImage(event){
        this.setState({image: event.target.value});
      }

      onChangePrice(event){
        this.setState({price: event.target.value});
      }

      onChangeCondition(event){
          this.setState({condition: event.target.value})
      }

      onChange(e) {
        this.setState({img:e.target.files[0]});
    }

        validate_pass(event){
        }

  render() {
    return (
      <div>
          
        <head>
                  <title> Add a showing </title>
              </head>
            <div>
            <Helmet>
                <style>{'button {background-color: #224C98; /* Green */border: none;color: white;padding: 15px 32px;text-align: center;text-decoration: none;display: inline-block;font-size: 16px;}hr {color: #224C98;} body { height: 1200px;  background-color: #1fc8db; background-image: linear-gradient(141deg, #9fb8ad 0%, #1fc8db 51%, #2cb5e8 75%); } h1,h2, h4, .heading,p p { margin: 0;  padding: 18px;    display: block; margin-block-start: 1em; margin-block-end: 1em; margin-inline-start: 0px;margin-inline-end: 0px;  font: 400 15px/1.8 "Lato", sans-serif; text-align: center; font-size: 40px; background-color: 	#224C98; color: seashell; padding: 18px; letter-spacing: 10px; top: 20%; width: 100%; position: relative; left: 0;}'}</style>
            </Helmet>
            </div>
         
          <div class="container">

          <form onSubmit={this.handleSubmit}>
              <h1 className = "postingHeader">Add a new posting:</h1>

              <div class="row">
              <div class="col-25">
                   <label for="title">Title</label>
              </div>
              <div class="col-75">
                  <input type="text" value = {this.state.title} onChange = {this.onChangeTitle} name="title"  required = "required" placeholder="Please enter the posting's title here.."/>
              </div>
              </div>


            <div class="row">
            <div class="col-25">
                <label for="subject">Description</label>
            </div>
            <div class="col-75">
            <textarea  name="description" value = {this.state.description} onChange = {this.onChangeDescription} placeholder="Write something.." styles="height:200px" ></textarea>
            </div>
            </div>
            
            <div class="row">
              <div class="col-25">
                   <label for="title">Feature List</label>
              </div>
              <div class="col-75">
                  <input type="text" value = {this.state.features} onChange = {this.onChangeFeatures} name="features"  required = "required" placeholder="Feature's list"/>
              </div>
              </div>
            
              <div class="row">
              <div class="col-25">
                   <label for="title">City</label>
              </div>
              <div class="col-75">
                  <input type="text" value = {this.state.city} onChange = {this.onChangeCity} name="city"  required = "required" placeholder="Please enter the city here.."/>
              </div>
              </div>

              <div class="row">
              <div class="col-25">
                   <label for="title">Category</label>
              </div>
              <div class="col-75">
                  <select  name="category" value = {this.state.category} onChange = {this.onChangeCategory} required = "required" placeholder="Please choose a category">
                  <option value="Electronics">Electronics</option>
  <option value="Automobiles">Automobiles</option>
  <option value="Homeware">Homeware</option>
  <option value="Other">Other</option>
  </select>
              </div>
              </div>

              
              <div class="row">
              <div class="col-25">
                   <label for="title">Condition</label>
              </div>
              <div class="col-75">
                  <select  name="condition" value = {this.state.condition} onChange = {this.onChangeCondition} required = "required" placeholder="Please enter the showing's title here..">
                  <option value="Brand New">Brand New</option>
  <option value="Mint">Mint</option>
  <option value="Used">Used</option>
  <option value="Bad condition/Unusable">Bad condition/Unusable</option>
  </select>
              </div>
              </div>

              <div class="row">
              <div class="col-25">
                  <label for="seatPrice">Price</label>
              </div>
              <div class="col-75">
                  <input type="number" value = {this.state.price} onChange = {this.onChangePrice} name = "price" min="0.01" step="0.01" max="2500"/><span>$</span>
              </div>
              </div>

              <div class="row">
              <div class="col-25">
                  <label for="image">Image </label>
              </div>
              <div class="col-75">
                  <input name = "image" placeholder = "Please use IMGUR" value = {this.state.image} onChange = {this.onChangeImage} type = "text" />
              </div>
              </div>

                <div class="row">
                    <input type="submit" value="Submit" />
                </div>


      </form>
      </div>





      </div>
    )
  }
}
