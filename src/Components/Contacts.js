import React,{Component} from "react";
import Contact from "./Contact";

class Contacts extends Component{

    render(){
        let {contacts,onView,onSms} = this.props;
        return(
            <div>
                <ul>
                    {
                        contacts.map(contact => (<li key={contact.id}><Contact key={contact.id} contact={contact} onView={onView} onSms={onSms}></Contact></li>))
                    }
                </ul>
            </div>
        )
    }
}
export default Contacts;