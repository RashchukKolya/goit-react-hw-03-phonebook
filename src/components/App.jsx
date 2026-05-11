import { Component } from 'react';
import { Input } from './Input/Input';
import { nanoid } from 'nanoid';
import { ContactsList } from './ContactsList/ContactList';
import { ContactItem } from './ContactItem/ContactItem';
import Form from './Form/Form';
import PropTypes from 'prop-types';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    if (localStorage.getItem('contacts'))
      this.setState({
        contacts: JSON.parse(localStorage.getItem('contacts')),
      });
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts.length !== this.state.contacts.length)
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }

  changeFilterInput = ({ target }) => {
    this.setState({
      filter: target.value,
    });
  };

  createContact = ({ name, number }) => {
    const contactItem = {
      id: nanoid(),
      name,
      number,
    };
    this.state.contacts.some(
      item => item.name.toLowerCase() === contactItem.name.toLowerCase()
    )
      ? alert(`${name} is already in contacts`)
      : this.setState(prevState => ({
          contacts: [...prevState.contacts, contactItem],
        }));
  };

  deleteItem = id => {
    this.setState(prevState => {
      return { contacts: prevState.contacts.filter(item => item.id !== id) };
    });
  };

  filterItems = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { filter } = this.state;
    return (
      <>
        <Form createContact={this.createContact} />
        <ContactsList>
          <Input
            type={'text'}
            name={'filter'}
            value={filter}
            handleChange={this.changeFilterInput}
          />
          {this.filterItems().map(({ id, name, number }) => (
            <ContactItem
              key={id}
              id={id}
              name={name}
              number={number}
              deleteItem={this.deleteItem}
            />
          ))}
        </ContactsList>
      </>
    );
  }
}

export default App;

App.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  filter: PropTypes.string,
};
