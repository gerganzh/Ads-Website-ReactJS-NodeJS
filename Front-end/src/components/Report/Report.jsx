import React, { Component } from 'react';
import history from '../../history/history';
import axios from 'axios';
import './Report.css';
import Helmet from 'react-helmet';
import {Link} from 'react-router-dom';

export default class Report extends Component {
    constructor(props){
        super(props);
        this.state={
            
           report: '',

            
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeReport=this.onChangeReport.bind(this);
    }

   
//API CALL FOR REPORTING

    handleSubmit(event, posting){

        event.preventDefault();
        posting = {posting}
        axios.get('/api/report',
        {
            params: {
                userID: this.props.ID,
                report: this.state.report,
                postingID: posting.posting.posting_id,
            }
                })
                .then((response) => {
                      if(response.data.status)
                      {   
                          history.push('/Report_Success');
                      }
                     
                    })
                    }
    
        
                onChangeReport(event){
                    this.setState({report: event.target.value});
                  
                  }
              
  render() {
      //passing over the data
    const { location, history } = this.props;
    const { posting } = location.state
    return (
      <div history = {history} posting = {posting} >
      
         <Helmet>
                <style>{'body { background-color: lemonchiffon; } h1,h2, h3, h4 { font-family: "Roboto"; color: white; font-size: 22px; padding: 20px;}'}</style>
            </Helmet>
        
<div className="containerL2">
<form>
<div className="Logo">
<h3>Report Form for Posting <b>{posting.title}, ID: {posting.posting_id}</b></h3>    

</div>
    <div className="form-inputL2">
        <label className = "labelL2" for = "username2">Your Name:</label>
        <input type="text" className="textarea" name="username2" placeholder="Enter your name" value={this.state.username} onChange={this.onChangeUsername}/>
    </div>
    
    <div className="form-inputL2">
        <textarea type="text" className="textarea" name="report2" placeholder="Enter the problem" onChange = {this.onChangeReport} value={this.state.report}/>
    </div>
        
        <button type="submit"  onClick={e => this.handleSubmit(e, posting)}  className="btn-loginL2">Report</button>
        
    
</form>
</div>
</div>
    )
  }
}
