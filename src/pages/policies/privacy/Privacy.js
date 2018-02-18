import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { I18n } from 'react-redux-i18n';
import Layout from '../../../components/_layout/Layout/Layout';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './privacy.scss';

class Privacy extends Component {
  render() {
    return (
      <Layout
        contentHasBackground
      >
        <div className={s.root}>
          <ul className="breadcrumb">
            <li>
              <span className="text-muted">
                <Link to="/policies/">
                  {I18n.t('general.policies.policies')}
                </Link>
              </span>
            </li>
            <li className="active">
              {I18n.t('general.policies.privacy')}
            </li>
          </ul>
          <h1>{I18n.t('general.policies.privacy')}</h1>
        </div>
      </Layout>
    );
  }
}

export default withRouter(withStyles(s)(Privacy));
