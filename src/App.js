import React, { Component } from 'react';
import Container from './components/Container';
import Section from './components/Section';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <>
        <Container>
          <Section title={'Phonebook'}></Section>
        </Container>
        <Container>
          <Section title={'Contacts'}></Section>
        </Container>
      </>
    );
  }
}

export default App;
