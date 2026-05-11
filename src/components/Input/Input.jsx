import PropTypes from 'prop-types';
import css from './Input.module.css';

export const Input = ({ type, name, value, handleChange }) => {
  return (
    <label className={css.inputWrap}>
      {name === 'filter' ? 'Find name:' : `Enter your ${name}:`}
      <input
        className={css.input}
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        required
      />
    </label>
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
