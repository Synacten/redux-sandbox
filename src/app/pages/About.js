import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getModal } from '../actions/contactsActions';

class About extends Component {
  componentDidMount() {
    getModal();
  }

  render() {
    const { openModal } = this.props;
    return (
      <div>
        {openModal ? 'ok' : ' not ok'}
      </div>
    );
  }
}

About.propTypes = {
  openModal: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  openModal: state.monitor.isOpen,
});


export default connect(mapStateToProps, { getModal })(About);
