import React, { Component } from 'react'
import axios from 'axios';
import Helmet from 'react-helmet';
import {Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import {
 

  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  PinterestShareButton,
  VKShareButton,
  OKShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  RedditShareButton,
  EmailShareButton,
  TumblrShareButton,
  LivejournalShareButton,
  MailruShareButton,
  ViberShareButton,
  WorkplaceShareButton,
  LineShareButton,
  WeiboShareButton,

  FacebookIcon,
  TwitterIcon,
  GooglePlusIcon,
  LinkedinIcon,
  PinterestIcon,
  VKIcon,
  OKIcon,
  TelegramIcon,
  WhatsappIcon,
  RedditIcon,
  TumblrIcon,
  MailruIcon,
  EmailIcon,
  LivejournalIcon,
  ViberIcon,
  WorkplaceIcon,
  LineIcon,
} from 'react-share';
  import './Ad.css';

import Rating from 'react-rating';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import  history from '../../history/history';
    
export default class Ad extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userID: '',
            postingID: '',
            postingTitle: '',
            postingDescription: '',
            postingPrice: '',
        };
        this.handleClick = this.handleClick.bind(this);
      }
    //api call to save the ad on click
      handleClick(event, posting) {
        event.preventDefault();
        posting = {posting}
        const save={ //getting the needed information
            userID: this.props.ID,
            postingID: posting.posting.posting_id,
            postingTitle: posting.posting.title,
            postingDescription: posting.posting.description,
            postingPrice: posting.posting.price,
            }
            axios.post('/api/save', save) //axios call
            .then((response) => {
                console.log(response);
                  if(response.data.status)
                  {
                      history.push('/Saved_Success');
                  }
                  else
                  {
                    history.push('/404');
                  }
                })
                }

  render() {
    const { location, history } = this.props;
    const { posting } = location.state
    const shareUrl = "localhost:3000" + location.pathname //url for sharing
    const title = location.state.title //title for sharing

    // Here I will bring over the specific posting data and will map it in a grid
    return (
      <div history = {history} posting = {posting}> 
 <Helmet>
                <style>{'button {background-color: #224C98; margin: 5px;/* Green */border: none;color: white;padding: 15px 32px;text-align: center;text-decoration: none;display: inline-block;font-size: 16px;}hr {color: #224C98;} body { height: 1200px;  background-color: #1fc8db; background-image: linear-gradient(141deg, #9fb8ad 0%, #1fc8db 51%, #2cb5e8 75%); } h1,h2, h4, .heading,p p { margin: 0;  padding: 18px;    display: block; margin-block-start: 1em; margin-block-end: 1em; margin-inline-start: 0px;margin-inline-end: 0px;  font: 400 15px/1.8 "Lato", sans-serif; text-align: center; font-size: 40px; background-color: 	#224C98; color: seashell; padding: 18px; letter-spacing: 10px; top: 20%; width: 100%; position: relative; left: 0;}'}</style>
            </Helmet>
         <div class="grid-container">
            <div class="item1"><b>{posting.title}</b></div>
            <div class="item2"><img width = "300px" height = "300px" src={posting.image}/></div>
            <div class="item3"><p>{posting.description}</p> 
            <p><b>Features list:</b> {posting.features}</p>
            <p><b>City:</b> {posting.city}</p>
            <p><b>Price:</b> {posting.price}$</p>
            <p></p> </div>
            <div class="item4"> 
                        <Rating
                          emptySymbol="fa fa-star-o fa-2x"
                          fullSymbol="fa fa-star fa-2x"
                        />
           
                   </div>
                   <div class = "item5"> <button name = "a" color="danger"  onClick={() => 
                        this.props.history.push({
                            pathname: `/Message/${posting.user_id}`,
                            state: { posting }
                        }) }  >Send Message</button>

                        <button name = "a"  onClick={e => this.handleClick(e, posting)} >Add to Saved List</button>

                    <button name = "a"   onClick={() => 
                        this.props.history.push({
                            pathname: `/Report/${posting.posting_id}`,
                            state: { posting }
                        }) }  >Report</button></div>

                      <div class = "item6">
                      <div className="Demo__container">
        <div className="Demo__some-network">
          <FacebookShareButton
            url={shareUrl}
            quote={title}
            className="Demo__some-network__share-button">
            <FacebookIcon
              size={32}
              round />
          </FacebookShareButton>

        </div>

        <div className="Demo__some-network">
          <TwitterShareButton
            url={shareUrl}
            title={title}
            className="Demo__some-network__share-button">
            <TwitterIcon
              size={32}
              round />
          </TwitterShareButton>

          
        </div>

        <div className="Demo__some-network">
          <TelegramShareButton
            url={shareUrl}
            title={title}
            className="Demo__some-network__share-button">
            <TelegramIcon size={32} round />
          </TelegramShareButton>

          
        </div>

        <div className="Demo__some-network">
          <WhatsappShareButton
            url={shareUrl}
            title={title}
            separator=":: "
            className="Demo__some-network__share-button">
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>

        
        </div>

        <div className="Demo__some-network">
          <GooglePlusShareButton
            url={shareUrl}
            className="Demo__some-network__share-button">
            <GooglePlusIcon
              size={32}
              round />
          </GooglePlusShareButton>

         
        </div>

        <div className="Demo__some-network">
          <LinkedinShareButton
            url={shareUrl}
            title={title}
            windowWidth={750}
            windowHeight={600}
            className="Demo__some-network__share-button">
            <LinkedinIcon
              size={32}
              round />
          </LinkedinShareButton>

          
        </div>

        <div className="Demo__some-network">
          <PinterestShareButton
            url={String(window.location)}
            
            windowWidth={1000}
            windowHeight={730}
            className="Demo__some-network__share-button">
            <PinterestIcon size={32} round />
          </PinterestShareButton>

          
        </div>

        <div className="Demo__some-network">
          <VKShareButton
            url={shareUrl}
           
            windowWidth={660}
            windowHeight={460}
            className="Demo__some-network__share-button">
            <VKIcon
              size={32}
              round />
          </VKShareButton>

         
        </div>

        <div className="Demo__some-network">
          <OKShareButton
            url={shareUrl}
          
            windowWidth={660}
            windowHeight={460}
            className="Demo__some-network__share-button">
            <OKIcon
              size={32}
              round />
          </OKShareButton>

   
        </div>

        <div className="Demo__some-network">
          <RedditShareButton
            url={shareUrl}
            title={title}
            windowWidth={660}
            windowHeight={460}
            className="Demo__some-network__share-button">
            <RedditIcon
              size={32}
              round />
          </RedditShareButton>

        
        </div>

        <div className="Demo__some-network">
          <TumblrShareButton
            url={shareUrl}
            title={title}
            windowWidth={660}
            windowHeight={460}
            className="Demo__some-network__share-button">
            <TumblrIcon
              size={32}
              round />
          </TumblrShareButton>
        </div>

        <div className="Demo__some-network">
          <LivejournalShareButton
            url={shareUrl}
            title={title}
            description={shareUrl}
            className="Demo__some-network__share-button"
          >
            <LivejournalIcon size={32} round />
          </LivejournalShareButton>
        </div>

        <div className="Demo__some-network">
          <MailruShareButton
            url={shareUrl}
            title={title}
            className="Demo__some-network__share-button">
            <MailruIcon
              size={32}
              round />
          </MailruShareButton>
        </div>

        <div className="Demo__some-network">
          <EmailShareButton
            url={shareUrl}
            subject={title}
            body="body"
            className="Demo__some-network__share-button">
            <EmailIcon
              size={32}
              round />
          </EmailShareButton>
        </div>
        <div className="Demo__some-network">
          <ViberShareButton
            url={shareUrl}
            title={title}
            body="body"
            className="Demo__some-network__share-button">
            <ViberIcon
              size={32}
              round />
          </ViberShareButton>
        </div>

        <div className="Demo__some-network">
          <WorkplaceShareButton
            url={shareUrl}
            quote={title}
            className="Demo__some-network__share-button">
            <WorkplaceIcon
              size={32}
              round />
          </WorkplaceShareButton>
        </div>

        <div className="Demo__some-network">
          <LineShareButton
            url={shareUrl}
            title={title}
            className="Demo__some-network__share-button">
            <LineIcon
              size={32}
              round />
          </LineShareButton>
        </div>

        <div className="Demo__some-network">
          <WeiboShareButton
            url={shareUrl}
            title={title}
         
            className="Demo__some-network__share-button">
            <img className="Demo__some-network__custom-icon" src="http://icons.iconarchive.com/icons/martz90/circle-addon2/512/weibo-icon.png" alt="Weibo share button" />
          </WeiboShareButton>
        </div>
      </div>
            

          </div>
    </div>
    </div>

      
  

            
            
            
          
           
           
            
      

       
           

      
    )
  }
}
