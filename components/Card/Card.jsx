import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.module.css';

export const Card = ({ title, imageSrc, imageAlt, ...props }) => (
  <div className={styles.card} {...props}>
    {title.length > 0 && <h3 className={styles.title}>{title}</h3>}
    {imageSrc.length > 0 && (
      <img className={styles.image} src={imageSrc} alt={imageAlt} />
    )}
  </div>
);

Card.propTypes = {
  title: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
};

Card.defaultProps = {
  title: '',
  imageSrc: '',
  imageAlt: '',
};
