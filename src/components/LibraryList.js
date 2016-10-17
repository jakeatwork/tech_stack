// Import libraries
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Create component
class LibraryList extends Component {
  render() {
    console.log(this.props);
    return;
  }
}

const mapStateToProps = state => {
  console.log(state);
  return { libraries: state.libraries };
};

// Export component
export default connect(mapStateToProps)(LibraryList);
