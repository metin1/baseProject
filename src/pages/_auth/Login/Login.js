import React from 'react';
import { I18n } from 'react-redux-i18n';
import { Grid, Alert } from 'react-bootstrap';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Login.scss';
import Widget from '../../../components/Widget';
import Footer from '../../../components/_layout/Footer';
import ErrorsList from '../../../components/ErrorsList';

const Login = ({
   isFetching,
   onSubmit,
   errors,
   onCreateAccountClick,
   __email,
   __password,
   onEmailChange,
   onPasswordChange,
}) => (
  <div className={s.root}>
    <Grid className={s.grid}>
      <Widget className={s.widget} xs={10} sm={6} lg={4}>
        <h4 className="mt-0">
          {I18n.t('auth.logIn.siteDescription')}
        </h4>
        <p className="fs-sm text-muted">
          {I18n.t('auth.logIn.instructions')}
        </p>
        <form className="mt" onSubmit={onSubmit}>
          {
            errors && (
              <Alert className="alert-sm" bsStyle="danger">
                <ErrorsList messages={ errors } />
              </Alert>
            )
          }

          <div className="form-group">
            <input
              className="form-control no-border"
              name="email"
              type="email"
              value={__email}
              onChange={onEmailChange}
              required
              placeholder={I18n.t('auth.general.email')}
            />
          </div>

          <div className="form-group">
            <input
              className="form-control no-border"
              type="password"
              value={__password}
              onChange={onPasswordChange}
              required
              placeholder={I18n.t('auth.general.password')}
            />
          </div>

          <div className="clearfix">
            <div className={s.btnToolbar}>
              <button
                type="button"
                onClick={onCreateAccountClick}
                className={`btn btn-default btn-sm`}
              >
                {I18n.t('auth.general.createAccount')}
              </button>

              <button
                type="submit"
                className={`btn btn-success btn-sm`}
                disabled={isFetching}
              >
                {
                  isFetching
                  ? I18n.t('auth.general.loading')
                  : I18n.t('auth.general.logIn')
                }
              </button>
            </div>
            <a className="mt-sm pull-right fs-sm">
              {I18n.t('auth.logIn.troubleWithAccount')}
            </a>
          </div>
        </form>
      </Widget>
    </Grid>
    <Footer className="text-center" />
  </div>
);

export { Login as LoginWithoutDecorators };
export default withStyles(s)(Login);
