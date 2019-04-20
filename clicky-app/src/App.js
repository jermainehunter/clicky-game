import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    score: 0,
    highscore: 0
  };
//Below needs to be the click function that records click
  clickCount = id => {
    this.state.friends.find((o, i) => {
      if(o.id === id) {
        if (friends[i].count === 0) {
          friends[i].count = friends[i].count +1;
          this.setState({score : this.state.score +1}, function(){
            console.log(this.state.score);
          });
          this.state.friends.sort(() => Math.random() -0.5);
          return true;
        } else {
          this.gameOver();
        }
      }

    })
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>The Clicky Game</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
