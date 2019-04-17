import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getModal } from '../actions/contactsActions';

const Modal = props => (
  <div>
        modal window (MODAL)
    <div role="presentation" onClick={() => props.getModal()}>close modal in modal component</div>
  </div>
);


Modal.propTypes = {
  getModal: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  openModal: state.monitor.isOpen,
});

export default connect(mapStateToProps, { getModal })(Modal);
