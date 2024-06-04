import React, { Component } from 'react';
import './LifecycleLogger.css';

class LifecycleLogger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      log: []
    };
    this.logMessage = this.logMessage.bind(this);
  }

  logMessage(message) {
    this.setState((prevState) => ({
      log: [...prevState.log, message]
    }));
  }

  componentDidMount() {
    this.logMessage('componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    this.logMessage('shouldComponentUpdate');
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    this.logMessage('componentDidUpdate');
  }

  componentWillUnmount() {
    this.logMessage('componentWillUnmount');
  }

  incrementCounter = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1
    }));
  }

  render() {
    return (
      <div className="lifecycle-logger">
        <button onClick={this.incrementCounter}>
          Лічильник: {this.state.counter}
        </button>
        <div className="log-console">
          {this.state.log.map((message, index) => (
            <div key={index}>
              {message}
              <hr />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default LifecycleLogger;
