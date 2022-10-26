import React, { Component } from 'react'

export class ErrorBoundary extends Component {
    constructor(props) {
      super(props);
      this.state = { 
        error: null,
     };
    }
  
    componentDidCatch(error, errorInfo) {
      // You can also log the error to an error reporting service
      console.log({error, errorInfo});
    }

    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { error };
    }
  
  
    render() {
      if (this.state.error) {
        // You can render any custom fallback UI
        return <h1 style={{color: "red"}}>Something went wrong.</h1>;
      }
  
      return this.props.children; 
    }
  }


export default ErrorBoundary