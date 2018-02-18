import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Popup.scss';

class Popup extends Component {
  static propTypes = {
    className: PropTypes.string,
    show: PropTypes.bool,
    omitOverflow: PropTypes.bool,
    onClose: PropTypes.func,
    beforeRender: PropTypes.func,
    // Do something before closing the popup.
    // The provided prop must be a function
    // to be provided for a new Promise.
    beforeClose: PropTypes.func,
  };

  static defaultProps = {
    show: true,
    omitOverflow: false,
    beforeClose: resolve => {resolve();},
  };

  componentWillMount() {
    const {
      omitOverflow,
      beforeRender,
    } = this.props;

    if ( ! omitOverflow) {
      this.setBodyOverflowY();
    }

    if (beforeRender instanceof Function) {
      beforeRender();
    }
  }

  componentWillReceiveProps(nextProps) {
    const {
      show,
      omitOverflow,
    } = this.props;

    if ( ! omitOverflow && ! show === nextProps.show) {
      this.setBodyOverflowY(nextProps);
    }
  }

  componentWillUnmount() {
    const { omitOverflow } = this.props;

    if ( ! omitOverflow) {
      document.body.style.overflowY = '';
    }
  }

  setBodyOverflowY(props) {
    const { show } = props || this.props;

    document.body.style.overflowY = show ? 'hidden' : '';
  }

  render() {
    const {
      className,
      show,
      onClose,
      beforeClose,
      children,
    } = this.props;

    if ( ! show) {
      return null;
    }

    return (
      <div
        className={classes(s.root, className)}
        onMouseDown={(e) => {
          if (e.target.classList.contains(s.root)) {
            new Promise(beforeClose)
              .then(() => {
                if (onClose instanceof Function) {
                  onClose();
                }
              });
          }
        }}
      >
        <div className={s.content}>
          {children}
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Popup);
