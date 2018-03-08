import {Component}  from "react";
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const modalRoot = document.getElementById('modal-root');

class Modal extends Component {
  static propTypes = {
    className: PropTypes.string,
    show: PropTypes.bool,
    omitOverflow: PropTypes.bool,
    beforeRender: PropTypes.func,
    beforeClose: PropTypes.func,
  };

  static defaultProps = {
    show: true,
    omitOverflow: false,
    beforeClose: resolve => {resolve();},
  };

  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

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

  componentDidMount() {
    modalRoot.appendChild(this.el);
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
    modalRoot.removeChild(this.el);

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
      children,
    } = this.props;

      return (
        ReactDOM.createPortal(
        children,
        this.el,
      )
    );
  }
}

export default Modal;
