import { useSelector } from 'react-redux';

import Container from './Container/Container';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

const App = () => {
  const contacts = useSelector(state => state.contacts.items);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {contacts.length > 0 && <Filter />}
      {contacts.length > 0 ? <ContactList /> : <p>Your phonebook is empty.</p>}
    </Container>
  );
};

export default App;
