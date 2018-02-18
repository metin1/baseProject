import classes from 'classnames';
import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Layout.scss';
import Header from '../Header';
import HeaderMobile from '../Header/HeaderMobile';
import Footer from '../Footer/Footer';
import { connect } from 'react-redux';
import { MOBILE_VERSION } from '../../../actions/app';

class Layout extends Component {
  render() {
    const {
      UIVersion,
      hasSidebar,
      children,
      content,
      contentHasBackground,
    } = this.props;

    return (
      <div className={s.root}>
        <div className={s.wrap}>
          {
            (UIVersion !== MOBILE_VERSION &&(
              <Header />
            )) || (
              <HeaderMobile MenuItems={hasSidebar} />
            )
          }

          <main className={classes(s.container, 'container', {
            [s.withSidebar]: hasSidebar,
          })}>
            <div className={classes(s.content, {
              [s.contentBackground]: contentHasBackground,
            })}>
              {children || content}
            </div>
          </main>
          <Footer className="text-center" />
        </div>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    UIVersion: store.app.UIVersion,
  };
}

export default (connect(mapStateToProps)(withStyles(s)(Layout)));
