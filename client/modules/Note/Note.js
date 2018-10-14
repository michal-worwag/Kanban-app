import React from 'react';
import PropTypes from 'prop-types';
// import styles from './Note.css';

const Note = props =>
  <li>{props.children}</li>;

Note.propTypes = {
  children: PropTypes.any,
};

export default Note;
