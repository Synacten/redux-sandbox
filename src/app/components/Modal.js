import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { getModal, getSearchResults } from '../actions/contactsActions';

const Modal = (props) => {
  const { resultSearch } = props;
  return (
    <ModalC>
          modal window (MODAL)
      <div role="presentation" onClick={() => props.getModal()}>close modal in modal component</div>
      <div className="searchInput">
        <input type="text" name="search" onChange={e => props.getSearchResults(e.target.value)} />
      </div>
      <div>
        {resultSearch.length > 0 ? (<div>Founded {resultSearch.length}</div>) : null}
        {resultSearch.map(n => (
          <div key={n.id}>
            <h1>{n.title}</h1>
            <h4>{n.director}</h4>
            <h5>{n.count}</h5>
            <img src={n.img} alt="" style={{ maxWidth: '100px', width: '100%' }} />
          </div>
        ))}
      </div>
    </ModalC>
  );
};


Modal.propTypes = {
  getModal: PropTypes.func.isRequired,
  getSearchResults: PropTypes.func.isRequired,
  resultSearch: PropTypes
    .arrayOf(PropTypes.oneOfType([PropTypes.array, PropTypes.object])).isRequired,
};

const mapStateToProps = state => ({
  openModal: state.monitor.isOpen,
  resultSearch: state.monitor.searchResult,
});


const ModalC = styled.div`
  background-color: bisque;
  .searchInput{
    color: red;
  }
`;

export default connect(mapStateToProps, { getModal, getSearchResults })(Modal);
