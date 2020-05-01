import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    error: '',
    errorInfo: '',
  };
  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: true,
      error,
      errorInfo,
    });
  }
  render() {
    return (
      <>
        {this.state.hasError ? (
          <div>{this.props.renderItem()}</div>
        ) : (
          <div>{this.props.children}</div>
        )}
      </>
    );
  }
}

export default ErrorBoundary;
