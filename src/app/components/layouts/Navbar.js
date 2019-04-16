import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../Modal';

export class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }

  render() {
    const { isOpen } = this.state;
    return (
      <div>
        <ul>
          <li><Link to="/">Index</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/blog">Blog</Link></li>
        </ul>
        <div role="presentation" onClick={this.openModal} opened={isOpen}>open</div>
        {isOpen ? <Modal /> : null}
      </div>
    );
  }
}
