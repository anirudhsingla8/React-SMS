import React,{Component} from "react";

class Contact extends Component{
    render(){
        let {contact,onView,onSms} = this.props
        return(
            <div>
                <div>
                    <h5>{contact.number}</h5>
                    <button type="button" className='btn btn-info m-2' onClick={() => onView(contact)}>View</button>
                    <button type="button" className='btn btn-primary' onClick={() => onSms(contact)}>Send Message</button>
                </div>
            </div>
        )
    }
}
//https://sms1608.herokuapp.com/
export default Contact;