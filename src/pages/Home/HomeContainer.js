import React, {Component}  from "react";
import Home from './Home';
import {withRouter} from "react-router";

class HomeContainner extends Component {
  render() {
    const {
      history,
    } = this.props;

    return(
        <Home
          redirect={() => history.push('/contacts')}
        />
       )
  }
}

export default withRouter(HomeContainner);
