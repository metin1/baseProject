import React, {Component}  from "react";
import Events from './Events';
import ID from "../../helpers/ID";

class EventsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };

    this.handle = this.handle.bind(this);
  }

  handle() {
    const {
      modal
    } = this.state;

    this.setState({modal: !modal});
  }

  render() {
    const {
      modal
    } = this.state;

    const data = {
      list: [
         {
          id: `${ID()}`,
          img: 'https://images.pexels.com/photos/905011/pexels-photo-905011.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb',
          title: 'Cel  mai vesel eveniment',
          time: '24.01.1997'
        },
        {
          id: `${ID()}`,
          img: 'https://goo.gl/R8YnnS',
          title: 'Lorem Ispunm',
          time: '24.10.1997'
        },
        {
          id: `${ID()}`,
          img: 'https://images.unsplash.com/photo-1468078809804-4c7b3e60a478?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=44e64bd87bbea85ea90b5e85f8c201b1&auto=format&fit=crop&w=500&q=60',
          title: 'AptekaMD',
          time: '24.10.2002'
        },
        {
          id: `${ID()}`,
          img: 'https://goo.gl/R8YnnS',
          title: 'Moldova Tara md',
          time: '04.02.2018'
        },
        {
          id: `${ID()}`,
          img: 'https://goo.gl/R8YnnS',
          title: 'Cel  mai vesel eveniment',
          time: '24.10.1997'
        },
        {
          id: `${ID()}`,
          img: 'https://goo.gl/R8YnnS',
          title: 'Unul dintre evenimente',
          time: '11.09.2001'
        }
    ]
  };
    return(
        <Events
          data={data.list}
          modal={modal}
          openModal={this.handle}
        />
       )
  }
}

export default EventsContainer;
