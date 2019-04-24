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





  handleShuffle = () => {
    let shuffledArray = this.shuffleArray(friends);
    this.setState({ friends: shuffledArray })
  }

  //function that handles shuffleArray
shuffleArray = array => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
  // When the component mounts, shuffle the cards
  componentDidMount() {
    this.handleShuffle();
  }

  handleClick = id => {
    // alert(this.state.friends);
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      //concat.() will concatonate the clicked id to the clicked array
      this.setState({ clicked: this.state.clicked.concat(id) })
    } else {
      this.handleReset();
    }
  };


  //function for handling incrementing the score

  handleIncrement = () => {
var that = this;
    const newScore = this.state.score + 1;
    this.setState({
      score: newScore,
      rightWrong: "You've scored a point!"

    });

    setTimeout(function () {
      that.setState({ rightWrong: "" })
    }, 1000)
    //conditional statement updating the highscore if 
    //newScore is equal to or less tahn hight score 
    if (newScore >= this.state.highscore) {
      this.setState({ highscore: newScore });
    }
    //else if newScore is equal to 12 (which is getting all 12 right) 
    //setState of the message to You've won
    else if (newScore === 12) {
      this.setState({ rightWrong: "You've Won!!" });
    }
    //after game is over, call the handleShuffle function
    this.handleShuffle();
  };

  //function for resetting game
  handleReset = () => {
    this.setState({
      score: 0,
      highscore: this.state.highscore,
      rightWrong: "Game Over!",
      clicked: []
    })
  };



  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Navbar
          score={this.state.score}
          highscore={this.state.highscore}
          rightWrong={this.state.rightWrong}
          
        />
        
        <Title />
        {this.state.friends.map(friend => (
          <FriendCard
            handleClick={this.handleClick}
            handleIncrement={this.handleIncrement}
            handleReset={this.handleReset}
            handleShuffle={this.handleShuffle}
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
