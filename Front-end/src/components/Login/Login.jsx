import React, { Component } from 'react'
import history from '../../history/history';
import axios from 'axios';
import './Login.css';
import Helmet from 'react-helmet';

export default class Login extends Component {

    constructor(props){
        super(props);
        this.state={
            //this state
            username: '',
            password: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeUsername=this.onChangeUsername.bind(this);
        this.onChangePassword=this.onChangePassword.bind(this);
        this.RegisterLink=this.RegisterLink.bind(this);
    }
 
    //on loading of the page
    componentDidMount(){
        if(this.props.User !== undefined)
        {
            history.push('/'); //if the user is undefined
        }
    }

    onChangeUsername(event){
        this.setState({username: event.target.value});
      }

      onChangePassword(event){
        this.setState({password: event.target.value});
      }

    handleSubmit(event) { //on click of button, validate user

        event.preventDefault();
        axios.get('/api/LoginValidation', {
            params: {
            username: this.state.username,
            password: this.state.password
            }
        })
        .then((response) => {
            if(response.data.status)
            {
                this.props.LogUserIn(this.state.username, response.data.ID);
                history.push('/Profile'); //if successful login, go to profile
            }
            else{
                history.push('/404'); //if an error occurs (hope not)
            }
           
          })

      }
      RegisterLink(event){ //for Registering
        event.preventDefault();
        history.push('/Register');
    
      }
      

  render() {
      //using helmet and a normal log in form
    return (
      <div>
          <head>
         
         <title>Login</title>   
         <Helmet>
                <style>{'body { background-color: 	#AFDBF5; } h1,h2, h4 { font-family: "Roboto";}'}</style>
            </Helmet>
       </head>
            <div className="containerL">    
                
                <form onSubmit={this.handleSubmit} >
                <div className="Logo">
                
                </div>
                    
                    
                    <div className="form-inputL">
                        <input type="text" className="textarea" name="username" placeholder="Enter the user name" value={this.state.username} onChange={this.onChangeUsername}/>
                    </div>
                    <div className="form-inputL">
                        <input type="password" name="password" placeholder="Enter Password" value={this.state.password} onChange={this.onChangePassword}/>
                    </div>
                        <button type="submit"  className="btn-loginL"><b>LOGIN</b></button>
        
                    <div className="register-linkL">
                    <a className="link" href="/register" name='Register' onClick={this.RegisterLink}>Not A Memeber? Register Now</a>
                    </div>
                </form>
            </div>
        
    </div>
    )
  }
}
