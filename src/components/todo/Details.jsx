import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Details = props => (
  <div>
    Details with id {props.match.params.id}!! <br />
    <Link to="/todo">Go to entire list</Link>
  </div>
);

Details.defaultProps = {
  match: undefined,
};

Details.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }),
};

export default Details;
