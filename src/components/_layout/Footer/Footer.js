import classes from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Footer.scss';
import {I18n} from 'react-redux-i18n';
import {LinkContainer} from 'react-router-bootstrap';
import {Nav, NavItem} from 'react-bootstrap';

class Footer extends React.Component {
  static propTypes = {
    className: PropTypes.string,
  };

  static defaultProps = {
    className: '',
  };

  render() {
    return (
      <footer className={classes(s.root, this.props.className)}>
        <div className={s.container}>
            <Nav className={s.list}>
              <LinkContainer to="/" exact
                             className={s.link}
              >
                <NavItem eventKey={1}>
                  <span>{I18n.t('general.footer.homepage')}</span>
                </NavItem>
              </LinkContainer>
              <LinkContainer to="/hobbies" exact
                             className={s.link}
              >
                <NavItem eventKey={2}>
                  <span>{I18n.t('general.footer.hobbies')}</span>
                </NavItem>
              </LinkContainer>
              <LinkContainer to="/about" exact
                             className={s.link}
              >
                <NavItem eventKey={3}>
                  <span>{I18n.t('general.footer.about')}</span>
                </NavItem>
              </LinkContainer>
              <LinkContainer to="/policies/using-terms" exact
                             className={s.link}
              >
                <NavItem eventKey={4}>
                  <span> {I18n.t('general.footer.usingTermsLink')}</span>
                </NavItem>
              </LinkContainer>
              <LinkContainer to="/help" exact
                             className={s.link}
              >
                <NavItem eventKey={5}>
                  <span>{I18n.t('general.footer.help')}</span>
                </NavItem>
              </LinkContainer>
              <LinkContainer to="/contact" exact
                             className={s.link}
              >
                <NavItem eventKey={6}>
                  <span>{I18n.t('general.footer.contact')}</span>
                </NavItem>
              </LinkContainer>
              <LinkContainer to="/signup" exact
                             className={s.link}
              >
                <NavItem eventKey={7}>
                  <span>{I18n.t('general.footer.log')}</span>
                </NavItem>
              </LinkContainer>
              <LinkContainer to="/login" exact >
                <NavItem eventKey={8}>
                  <span>Log In</span>
                </NavItem>
              </LinkContainer>
            </Nav>
          <span>© 2018 &nbsp; QoodLife</span>
        </div>
      </footer>
    );
  }
}

export default withStyles(s)(Footer);
