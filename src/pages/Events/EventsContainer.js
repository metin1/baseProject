import React, {Component}  from "react";
import Events from './Events';
import {data} from './data';

class EventsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      id: null,
    };
  }

  render() {
    const {
      modal,
      id,
    } = this.state;

    console.info(id);

    return(
        <Events
          data={data.list}
          modal={modal}
          openModal={id => {
            this.setState({
              modal: !modal,
              id,
            })
          }}
        />
       )
  }
}

export default EventsContainer;
