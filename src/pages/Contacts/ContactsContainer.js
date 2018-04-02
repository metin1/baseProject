import React, {Component}  from "react";
import Events from './Contacts';
import {data} from './data';

class ContactsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };
  }

  render() {
    const {
      modal,
    } = this.state;

    return(
        <Events
          data={data.list}
          modal={modal}

        />
       )
  }
}

export default ContactsContainer;
