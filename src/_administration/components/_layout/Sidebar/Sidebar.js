import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Sidebar.scss';

import LinksGroup from './LinksGroup/LinksGroup';

import {
  atLeastOneActionIsAllowed,
} from '../../../../helpers/permissions';

import {I18n} from 'react-redux-i18n';
const Sidebar = ({permissions}) => (
  <nav className={s.root}>
    <ul className={s.nav}>
      <LinksGroup
        header={I18n.t('administration.menuDropDown.deshboard')}
        headerLink="/administration"
        iconName="glyphicon-home"
      />

      {
        atLeastOneActionIsAllowed(permissions, {
          module: 'users',
          action: 'view-all-stored',
        }) && (
          <LinksGroup
            header={I18n.t('administration.menuDropDown.users')}
            headerLink="/administration/users"
            iconName="glyphicon-user"
          />
        )
      }

      {
        atLeastOneActionIsAllowed(permissions, {
          module: 'events',
          action: 'view-all-stored',
        }) && (
          <LinksGroup
            header={I18n.t('administration.menuDropDown.events')}
            headerLink="/administration/events"
            iconName="glyphicon-calendar"
          />
        )
      }

      {
        atLeastOneActionIsAllowed(permissions, {
          module: 'groups',
          action: 'view-all-stored',
        }) && (
          <LinksGroup
            header={I18n.t('administration.menuDropDown.groups')}
            headerLink="/administration/groups"
            iconName="glyphicon-user"
          />
        )
      }

      {
        atLeastOneActionIsAllowed(permissions, {
          module: 'products',
          action: 'view-all-stored',
        }) && (
          <LinksGroup
            header={I18n.t('administration.menuDropDown.products')}
            headerLink="/administration/products"
            iconName="glyphicon-shopping-cart"
          />
        )
      }

      {
        atLeastOneActionIsAllowed(permissions, {
          module: 'places',
          action: 'view-all-stored',
        }) && (
          <LinksGroup
            header={I18n.t('administration.menuDropDown.places')}
            headerLink="/administration/places"
            iconName="glyphicon-map-marker"
          />
        )
      }

      {
        atLeastOneActionIsAllowed(permissions, {
          module: 'professionals',
          action: 'view-all-stored',
        }) && (
          <LinksGroup
            header={I18n.t('administration.menuDropDown.professionals')}
            headerLink="/administration/professionals"
            iconName="glyphicon-user"
          />
        )
      }

      {
        atLeastOneActionIsAllowed(permissions, {
          module: 'blog',
          action: 'view-all-stored',
        }) && (
          <LinksGroup
            header={I18n.t('administration.menuDropDown.blog')}
            headerLink="/administration/blog"
            iconName="glyphicon-book"
          />
        )
      }

      {
        atLeastOneActionIsAllowed(permissions, {
          module: 'hobbies',
          action: 'manage-everything',
        }) && (
          <LinksGroup
            header={I18n.t('administration.menuDropDown.hobbies')}
            headerLink="/administration/hobbies"
            iconName="glyphicon-heart"
          />
        )
      }
    </ul>
  </nav>
);

function mapStateToProps(store) {
  return {
    permissions: store.user.permissions,
  };
}

export default withRouter(connect(mapStateToProps)(withStyles(s)(Sidebar)));
