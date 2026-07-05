import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, info: null };
  }
  static getDerivedStateFromError(error) {
    return { error };
  }
  componentDidCatch(error, info) {
    this.setState({ error, info });
    console.error('ErrorBoundary caught', error, info);
  }
  render() {
    if (this.state.error) {
      return (
        <div style={{ padding: 40, color: '#fff', background: '#b00020' }}>
          <h2>Application error</h2>
          <pre style={{ whiteSpace: 'pre-wrap' }}>{String(this.state.error)}</pre>
          <details style={{ whiteSpace: 'pre-wrap' }}>{this.state.info?.componentStack}</details>
        </div>
      );
    }
    return this.props.children;
  }
}
