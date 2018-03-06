import React from 'react';
import { withStyles } from 'material-ui/styles';
import { CircularProgress } from 'material-ui/Progress';
import PropTypes from 'prop-types';

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2,
  },
});

const Loader = (props) => (
  <CircularProgress className={props.classes.progress} />
);

Loader.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Loader);
