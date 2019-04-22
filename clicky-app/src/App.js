import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Navbar from "./components/Navbar";
import friends from "./friends.json";
import "./index.css";


class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    score: 0,
    highscore: 0,
    unselectedFriends: friends,
    rightWrong: "",
    clicked: []
  };


  //Below needs to be the click function that records click
  shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      //concat.() will concatonate the clicked id into the clicked array
      this.setState({ clicked: this.state.clicked.concat(id) })
    } else {
      this.handleReset();
    }
  };





  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Navbar
          message={this.state.message}
          score={this.state.score}
          highscore={this.state.highscore}
        />
        <Title />
        {this.state.friends.map(friend => (
          <FriendCard
            clickCount={this.clickCount}
            id={friend.id}
            key={friend.id}
            image={friend.image}
          // location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
