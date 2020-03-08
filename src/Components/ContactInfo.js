import React,{Component} from "react";

class ContactInfo extends Component{
    render(){
        let {contact} = this.props;
        console.log("contactinfo",typeof(contact),contact.first_name)
        return(
            <div>
                <h5>Name: {contact.first_name} {contact.last_name}</h5>
                <h5>Contact: {contact.number}</h5>
            </div>
        )
    }
}

export default ContactInfo;