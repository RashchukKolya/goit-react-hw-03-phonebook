import PropTypes from 'prop-types';
import css from './ContactItem.module.css';

export const ContactItem = ({ id, name, number, deleteItem }) => {
  return (
    <li className={css.listItem}>
      <span className={css.name}>{name}</span>
      <span className={css.number}>{number}</span>
      <button
        onClick={() => {
          deleteItem(id);
        }}
      >
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteItem: PropTypes.func.isRequired,
};
