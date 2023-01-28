import React from 'react';
import PropTypes from 'prop-types';
import { Btn } from './Button.styled';

const Button = ({ type = 'submit', title, icon: Icon, handelClick }) => {
  return (
    <Btn type={type} onClick={handelClick}>
      {Icon && (
        <span>
          <Icon />
        </span>
      )}
      {title && title}
    </Btn>
  );
};

Button.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.func,
  handelClick: PropTypes.func,
  type: PropTypes.string,
};

export default Button;
