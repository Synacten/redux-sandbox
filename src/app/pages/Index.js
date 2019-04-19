import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getContacts } from '../actions/contactsActions';


class Index extends Component {
  componentDidMount() {
    this.props.getContacts();
  }

  render() {
    const { contacts } = this.props;
    console.log(this.props.contacts);
    return (
      <div>
        {contacts.data ? contacts.data.map(contact => (
          <div key={contact.id}>
            <h2>{contact.title}</h2>
            <p>{contact.director}</p>
            <p>{contact.count}</p>
          </div>
        )) : null}
      </div>
    );
  }
}

Index.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.any])).isRequired,
};

const mapStateToProps = state => ({
  contacts: state.monitor.userdata,
});


export default connect(mapStateToProps, { getContacts })(Index);
