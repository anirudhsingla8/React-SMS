import React,{Component} from 'react';
import logo from './logo.svg';
import Contacts from "./Components/Contacts";
import Navbar from "./Components/NavBar";
import SendSMS from "./Components/SendSMS";
import ContactInfo from "./Components/ContactInfo";


class App extends Component{
    state={
        contacts:[
            {id:0,first_name:'Ani',last_name:'Singla',number:8949544317,visible:false},
            {id:1,first_name:'chirag',last_name:'Malhotra',number:8949544316,visible:false},
            {id:2,first_name:'Agam',last_name:'Thind',number:8949544318,visible:false}
        ],
        current_view:{id:null,first_name:null,last_name:null,number:null,visible:false},
        current_sms:{id:null,first_name:null,last_name:null,number:null,visible:false}
    };

    viewSms = (contact) => {
        this.setState({
            current_sms:{
                id:contact.id,
                first_name:contact.first_name,
                last_name:contact.last_name,
                number:contact.number,
                visible:true
            }
        })
    }


    viewDetails = (contact) => {
        console.log(contact)
        this.setState({
            current_view:{
                id:contact.id,
                first_name:contact.first_name,
                last_name:contact.last_name,
                number:contact.number,
                visible:true
            }
        })
    };

    render(){
        let {contacts,current_view,current_sms} = this.state;
        console.log(contacts);
        return(
            <div>
                <Navbar totalContacts = {contacts.length}/>
                <div className='row'>

                    <div className="col-md-4">
                        <Contacts contacts={contacts} onView={this.viewDetails} onSms={this.viewSms}/>
                    </div>

                    <div className="col-md-4">
                        {this.state.current_view.visible && <ContactInfo contact={current_view}/>}
                    </div>

                    <div className="col-md-4">
                        {this.state.current_sms.visible && <SendSMS contact={current_sms}/>}
                    </div>

                </div>
            </div>
        )
    }
}
export default App;
