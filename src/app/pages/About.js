import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { GET_MODAL } from '../actions/types';

class About extends Component {
  componentDidMount() {
    this.props.getModal();
  }

  render() {
    const { openModal } = this.props;
    return (
      <div>
        {this.props.openModal ? 'ok' : ' not ok'}
      </div>
    );
  }
}

About.propTypes = {
  openModal: PropTypes.bool,
  getModal: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  openModal: state.monitor.isOpen,
});

const mapDispatchToProps = dispatch => ({
  getModal: () => dispatch({ type: GET_MODAL }),
});

export default connect(mapStateToProps, mapDispatchToProps)(About);
