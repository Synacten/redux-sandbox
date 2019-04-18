import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { getModal, getSearchResults } from '../actions/contactsActions';

const Modal = props => (
  <ModalC>
        modal window (MODAL)
    <div role="presentation" onClick={() => props.getModal()}>close modal in modal component</div>
    <div className="searchInput">
      <input type="text" name="search" onChange={e => props.getSearchResults(e.target.value)} />
    </div>
  </ModalC>
);


Modal.propTypes = {
  getModal: PropTypes.func.isRequired,
  getSearchResults: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  openModal: state.monitor.isOpen,
  inputTEST: state.monitor.testInput,
});


const ModalC = styled.div`
  background-color: yellow;
  .searchInput{
    color: red;
  }
`;

export default connect(mapStateToProps, { getModal, getSearchResults })(Modal);
