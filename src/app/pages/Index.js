import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { GET_CONTACTS } from '../actions/types';


class Index extends Component {
  componentDidMount() {
    this.props.getContacts();
  }

  render() {
    const { contacts } = this.props;
    return (
      <div>
        {contacts ? contacts.map(contact => (
          <div key={contact.id}>
            <h2>{contact.name}</h2>
            <p>{contact.email}</p>
            <p>{contact.phone}</p>
          </div>
        )) : null}
      </div>
    );
  }
}

Index.propTypes = {
  contacts: PropTypes.array,
  getContacts: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  contacts: state.monitor.userdata
});

const mapDispatchToProps = (dispatch) => ({
  getContacts: () => dispatch({ type: GET_CONTACTS})
});

export default connect(mapStateToProps, mapDispatchToProps)(Index);
