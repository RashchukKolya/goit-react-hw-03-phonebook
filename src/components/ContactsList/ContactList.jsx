import PropTypes from 'prop-types';
import css from './ContactsList.module.css';

export const ContactsList = ({ children }) => {
  return (
    <section className={css.section}>
      <h2 className={css.title}>Contacts</h2>
      <ul>{children}</ul>
    </section>
  );
};

ContactsList.propTypes = {
  children: PropTypes.node.isRequired,
};
