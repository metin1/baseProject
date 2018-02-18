import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { I18n } from 'react-redux-i18n';
import Layout from '../../../components/_layout/Layout/Layout';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './policies.scss';

class Policies extends Component {
  render() {
    return (
      <Layout
        contentHasBackground
      >
        <div className={s.root}>
          <ul className="breadcrumb">
            <li>
              <span className="text-muted">
                {I18n.t('general.policies.policies')}
              </span>
            </li>
          </ul>
          <h1>{I18n.t('general.policies.privacyAndTerms')}</h1>
          <div className={s.policiesLinks}>
            <div className={s.linkItem}>
              <h3>{I18n.t('general.policies.usingTerms')}</h3>
              <p>{I18n.t('general.policies.usingTermsDescription')}</p>
              <Link to="/policies/using-terms">
                {I18n.t('general.policies.usingTerms')}
              </Link>
            </div>
            <div className={s.linkItem}>
              <h3>{I18n.t('general.policies.privacy')}</h3>
              <p>{I18n.t('general.policies.privacyDescription')}</p>
              <Link to="/policies/privacy">
                {I18n.t('general.policies.privacy')}
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default withRouter(withStyles(s)(Policies));
