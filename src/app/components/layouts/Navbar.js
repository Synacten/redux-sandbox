import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getModal } from '../../actions/contactsActions';
import Modal from '../Modal';

const Navbar = (props) => {
  const { openModal } = props;
  return (
    <div>
      <ul>
        <li><Link to="/">Index</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/blog">Blog</Link></li>
      </ul>
      <div role="presentation" onClick={() => props.getModal()}>open *in NAV* </div>
      {openModal ? <Modal /> : null}
    </div>
  );
};

Navbar.propTypes = {
  getModal: PropTypes.func.isRequired,
  openModal: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  openModal: state.monitor.isOpen,
});

export default connect(mapStateToProps, { getModal })(Navbar);
