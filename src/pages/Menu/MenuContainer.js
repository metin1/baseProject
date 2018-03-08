import React, {Component}  from "react";
import Menu from './Menu';
import {
  data,
  desert,
  drinks
} from './data';

class MenuContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: 'main',
    };
  }

  render() {
    const {
      menu,
    } = this.state;

    return(
        <Menu
          dataMain={data.list}
          dataDesert={desert.list}
          dataDrinks={drinks.list}
          menu={menu}
          onChangeDrinks={() => this.setState({menu: 'drinks'})}
          onChangeDeserts={() => this.setState({menu: 'deserts'})}
          onChangeMain={() => this.setState({menu: 'main'})}
        />
       )
  }
}

export default MenuContainer;
