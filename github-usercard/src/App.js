import React, { Component } from 'react'
import axios from 'axios'
import './index.css';
import Card from './Card'
import Followers from './Followers'
import Following from './Following'

export default class App extends Component {
  state = {}
  
  componentDidMount() {
    axios
      .get('https://api.github.com/users/matt22881')
      .then((res) => {
        // console.log('res: ', res)
        this.setState({ user: res.data })
      })
      .catch((err) => console.log(err))
    }
    
    render() {
    return (
    // console.log('this.state.user: ', this.state.user)
      <div className="App">
        <div className="container">
          <div className="header">
            <img src='https://i.imgur.com/GRLVRuz.png' alt="Lambda Logo" />
            <p>❤️'s</p>
            <img src='https://i.imgur.com/TqE2x4o.png' alt="GitHub Logo" />
          </div>
          <Card user={this.state.user}/>
          {/* <Followers
            followers={this.state.followers}
            followers_url={this.state.followers_url}
          /> */}
          {/*<Following /> */}
        </div>
      </div>
    );
  }
}

