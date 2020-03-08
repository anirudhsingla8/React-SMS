import React,{Component} from "react";

class SendSMS extends Component{
    render(){
        let {contact} = this.props;
        return(
            <div>
                <h5>To: {contact.first_name} {contact.last_name}</h5>
                <h5>Contact: {contact.number} </h5>
                <input placeholder='enter Message'></input>
                <button className='btn btn-primary m-2'>Send</button>
            </div>
        )
    }
}

export default SendSMS;