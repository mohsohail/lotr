import React, { Component } from 'react';
import Header from '../../../components/Header/Header';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Header />
        <div>
          welcome to the LOTR website, please browser the site using the navigation link above
        </div>
      </>
    );
  }
}

export default Home;
