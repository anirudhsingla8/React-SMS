import React, {Component} from "react";

class Navbar extends Component{
    render(){
        let {totalContacts} = this.props;
        return(
            <nav className='navbar navbar-light bg-light'>
                <p className='navbar-brand' href='#'>
                    Total Contacts <span className='badge badge-pill badge-secondary'>{totalContacts}</span>
                </p>
            </nav>
        )
    }
}

export default Navbar;