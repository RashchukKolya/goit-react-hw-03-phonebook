import { Component } from 'react';
import css from './Form.module.css';
import { Input } from 'components/Input/Input';
import PropTypes from 'prop-types';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.createContact(this.state);
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={css.form} onSubmit={this.handleSubmit}>
        <h2 className={css.title}>Phonebook</h2>
        <Input
          type={'text'}
          name={'name'}
          value={name}
          handleChange={this.handleChange}
        />
        <Input
          type={'tel'}
          name={'number'}
          value={number}
          handleChange={this.handleChange}
        />
        <button type="submit" className={css.button}>
          Add contact
        </button>
      </form>
    );
  }
}

export default Form;

Form.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  createContact: PropTypes.func.isRequired,
};
