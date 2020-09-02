import React, { Component } from 'react';
import Frame from './components/Frame'
import './style.less';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className="index">
        <Frame history={this.props.history}/>
      </div>
    );
  }

}

export default Login;
