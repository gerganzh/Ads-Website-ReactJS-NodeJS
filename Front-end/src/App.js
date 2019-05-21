import React, { Component } from 'react';
import history from './history/history';
import {Route, Router}from 'react-router-dom';
import Home from './components/Home/Home';
import Menu from './components/Menu/Menu';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import {withCookies} from 'react-cookie';
import Cookies from 'universal-cookie';
import Profile from './components/Profile/Profile';
import Logout from './components/Successful_Action/Logout';
import Post from './components/Post_Ad/Post';
import Ads from './components/Ads/Ads';
import Ad from './components/Ad/Ad';
import Report from './components/Report/Report';
import DeleteAds from './components/DeleteAds/DeleteAds';
import Report_Done from './components/Successful_Action/Report_Done';
import Ad_Posting from './components/Successful_Action/Ad_Posting';
import Saved_Ads from './components/Saved_Ads/Saved_Ads';
import Error from './components/404/404';
import Message from './components/Message/Message';
import Inbox from './components/Message/Inbox';
import Reply from './components/Message/Reply';
import Successfuly_Saved from './components/Successful_Action/Successfuly_Saved';
import Message_Sent from './components/Successful_Action/Message_Sent';
import Delete_Ads from './components/Successful_Action/Delete_Ads';

const cookies = new Cookies(); //we need that for the login

class App extends Component {

  constructor(){
    super();
    this.state = {
    }
    this.LogUser = this.LogUser.bind(this); //Login information 
    this.LogoutUser = this.LogoutUser.bind(this);
  }

  LogUser(User, ID){
    cookies.set('User', User, { path: '/' }); //so I have the User data everywhere on the website we go
    cookies.set('UserID', ID,{ path: '/'}); //and I am going to manipulate it to achieve different results
  }
  LogoutUser(){
    cookies.remove('User')
  }

  render() {
    //using React Router to map out my SPA
    return (
      <div>
      <div>
       
        <Menu />
      </div>
        <Router history = {history} >
          <div>
            <Route path = "/" exact render={(props) => <Home {...props} User={cookies.get('User')} ID={cookies.get('UserID')} LogOutUser={this.LogoutUser} />}/>
            <Route path = "/Login" exact render = {(props) => <Login {...props} User={cookies.get('User')} LogUserIn={this.LogUser} />}/>
            <Route path = "/Register" component = {Register} exact />
            <Route path = "/Profile" render={(props) => <Profile {...props} User={cookies.get('User')} ID={cookies.get('UserID')} LogOutUser={this.LogoutUser} />}/>
            <Route path = "/Logout" component = {Logout} exact />
            <Route path = "/Post" render={(props) => <Post {...props} User={cookies.get('User')} ID={cookies.get('UserID')} LogOutUser={this.LogoutUser} />}/>
            <Route path = "/Ads" render={(props) => <Ads {...props} User={cookies.get('User')} ID={cookies.get('UserID')} LogOutUser={this.LogoutUser} />}/>
            <Route path = "/Ad/:id" render={(props) => <Ad {...props} User={cookies.get('User')} ID={cookies.get('UserID')} LogOutUser={this.LogoutUser} />}/>
            <Route path = "/Report/:id" render={(props) => <Report {...props} User={cookies.get('User')} ID={cookies.get('UserID')} LogOutUser={this.LogoutUser} />}/>
            <Route path = "/DeleteAds" render={(props) => <DeleteAds {...props} User={cookies.get('User')} ID={cookies.get('UserID')} LogOutUser={this.LogoutUser} />}/>
            <Route path = "/Post_Success" component = {Ad_Posting} exact />
            <Route path = "/Report_Success" component = {Report_Done} exact />
            <Route path = "/Saved_Success" component = {Successfuly_Saved} exact />
            <Route path = "/Sent_Success" component = {Message_Sent} exact />
            <Route path = "/Delete_Success" component = {Delete_Ads} exact />
            <Route path = "/404"  exact render={(props) => <Error {...props} User={cookies.get('User')} ID={cookies.get('UserID')} LogOutUser={this.LogoutUser} />}/>
            <Route path = "/Message/:id" exact render={(props) => <Message {...props} User={cookies.get('User')} ID={cookies.get('UserID')} LogOutUser={this.LogoutUser} />}/>
            <Route path = "/Reply/:id" exact render={(props) => <Reply {...props} User={cookies.get('User')} ID={cookies.get('UserID')} LogOutUser={this.LogoutUser} />}/>
            <Route path = "/Inbox" exact render={(props) => <Inbox {...props} User={cookies.get('User')} ID={cookies.get('UserID')} LogOutUser={this.LogoutUser} />}/>
            <Route path = "/SavedAds" exact render={(props) => <Saved_Ads {...props} User={cookies.get('User')} ID={cookies.get('UserID')} LogOutUser={this.LogoutUser} />}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
