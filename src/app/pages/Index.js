import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getContacts } from '../actions/contactsActions';


class Index extends Component {
  componentDidMount() {
    const { getContacts: _getContacts } = this.props;
    _getContacts();
  }

  render() {
    const { contacts } = this.props;
    return (
      <div>
        {contacts.data ? contacts.data.map(contact => (
          <div key={contact.id}>
            <h2>{contact.title}</h2>
            <p>{contact.body}</p>
          </div>
        )) : null}
      </div>
    );
  }
}

Index.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.any])).isRequired,
  getContacts: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  contacts: state.monitor.userdata,
});


export default connect(mapStateToProps, { getContacts })(Index);
