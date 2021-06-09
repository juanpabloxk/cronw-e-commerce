import React from 'react';
import { ErrorBoundaryContainer, ErrorBoundaryOverlay } from './error-boundary.styles';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasErrored: false
    }
  }
  
  static getDerivedStateFromError(error) {
    return { hasErrored: true }
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if(this.state.hasErrored) {
      return (
        <ErrorBoundaryContainer>
          <img src="https://i.pinimg.com/originals/cf/3f/83/cf3f83c413e5cfe485bb9f7a85c607dd.jpg" alt="Panic graphic" />
          <ErrorBoundaryOverlay>
            Something went wrong :(
          </ErrorBoundaryOverlay>
        </ErrorBoundaryContainer>
      )
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
