import React, { Component } from 'react';

export class Index extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        {
          id: 1,
          name: 'Jonh Dou',
          email: 'jdou@gmail.com',
          phone: '111-1111-111',
        },
        {
          id: 2,
          name: 'Berry Smith',
          email: 'bsmith@gmail.com',
          phone: '333-3333-333',
        },
        {
          id: 3,
          name: 'Kate Gross',
          email: 'kgross@gmail.com',
          phone: '777-7777-777',
        },
      ],
    };
  }

  render() {
    const { contacts } = this.state;
    return (
      <div>
        {contacts.map(contact => (
          <div key={contact.id}>
            <h2>{contact.name}</h2>
            <p>{contact.email}</p>
            <p>{contact.phone}</p>
          </div>
        ))}
      </div>
    );
  }
}
