import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Widget.scss';

class Widget extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    className: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]),
  };

  static defaultProps = {
    title: null,
    className: '',
  };

  render() {
    document.body.style.backgroundColor = "#e8e8e8";
    return (
      <section className={[s.widget, this.props.className].join(' ')}>
        {
          this.props.title && (
            typeof this.props.title === 'string'
            ? <h5 className={s.title}>{this.props.title}</h5>
            : <header className={s.title}>{this.props.title}</header>
          )
        }
        <div>
          {this.props.children}
        </div>
      </section>
    );
  }
}

export default withStyles(s)(Widget);
