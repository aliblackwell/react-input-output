import React, { Component } from "react"
import { Route, NavLink } from 'react-router-dom';
import logo from "./logo.svg"
import Feed from './Feed';
import AddItem from './AddItem';
import "./App.css"

class App extends Component {

  state = {
    feedData: [
      {
        title: "First post",
        description: "I am the description of the first post"
      },
      {
        title: "Second post",
        description: "I am the description of the second post"
      },
      {
        title: "Third post",
        description: "I am the description of the third post"
      }
    ]
  }

  handleNewFeedItem = (feedItem) => {
    let newFeed = this.state.feedData;
    newFeed.push(feedItem);
    this.setState({
      feedData: newFeed,
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <nav>
            <ul>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/feed">Feed</NavLink></li>
              <li><NavLink to="/add-item">Add Item</NavLink></li>
            </ul>
          </nav>
        </header>
        <Route exact path="/" component={() => (
          <div className="Home">
            <h1>Welcome to our app</h1>
          </div>
        )} />
        <Route path="/feed" component={() => (
          <Feed feedData={this.state.feedData} />
        )} />
        <Route path="/add-item" component={() => (
          <AddItem handleNewFeedItem={this.handleNewFeedItem} />
        )} />
      </div>
    )
  }
}

export default App
