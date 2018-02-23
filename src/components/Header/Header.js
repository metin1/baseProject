import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { withRouter } from 'react-router';
import s from './Header.scss';

class Header extends Component {
  render() {
    const {
      history
    } =this.props;

    return (
      <header className={s.mainHeader}>
        <div className={s.container}>
          <img src='http://foodhouse.md/files/restaurant/logo_acasa_la_mama.png' alt='Acasa la mama'/>
          <nav>
            <ul>
              <li onClick={() => history.push('/')}>Acasa</li>
              <li onClick={() => history.push('/events')}>Evenimente</li>
              <li onClick={() => history.push('/news')}>Noutati</li>
              <li onClick={() => history.push('/menu')}>Menu</li>
              <li onClick={() => history.push('/contacts')}>Contacte</li>
              <li>RO</li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default  withRouter(withStyles(s)(Header));
