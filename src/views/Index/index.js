import React, { Component } from 'react';
import Header from './components/Header'
import './style.less';

class Index extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className="index">
        <Header />
      </div>
    );
  }

}

export default Index;
