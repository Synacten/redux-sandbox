import React, { Component } from 'react';

export default class Modal extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  closeModal() {
    console.log('close modal');
  }

  render() {
    return (
      <div>
          modal window
        <div role="presentation" onClick={this.closeModal}>close modal in modal component</div>
      </div>
    );
  }
}
