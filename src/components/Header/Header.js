import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { withRouter } from 'react-router';
import s from './Header.scss';

class Header extends Component {
  constructor (...args) {
    super(...args);
    this.state = {
      backgroundColor: null,
      color: null,
    };

    this.onScroll = this.onScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll)
  }

  onScroll() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if(250 <= scrollTop) {
        this.setState({
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          color: '#22313f',
          shadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
        });
      }

      if(250 >= scrollTop) {
        this.setState({
          backgroundColor: '',
          shadow: '',
          color: 'white',
        });
      }
  }

  render() {
    const {
      history
    } = this.props;

    const {
      color,
      backgroundColor,
      shadow,
    } = this.state;

    return (
      <header style={{backgroundColor: backgroundColor,
                      color: color,
                      boxShadow: shadow,
                    }}
              className={s.mainHeader}>
        <div className={s.container}>
          <img src='http://foodhouse.md/files/restaurant/logo_acasa_la_mama.png' alt='Acasa la mama'/>
          <nav>
            <ul>
              <li onClick={() => history.push('/')}>Acasa</li>
              <li onClick={() => history.push('/menu')}>Menu</li>
              <li onClick={() => history.push('/events')}>Evenimente</li>
              <li onClick={() => history.push('/reviews')}>Recenzii</li>
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
