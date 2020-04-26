import React, { Component } from 'react';
import { connect } from 'react-redux';

import Home from '../Home/views/Home';

class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Home {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, {})(HomePage);
