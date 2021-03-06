import React, { Component } from "react";

import Score from "./Score";
import LoseScreen from "./LoseScreen";
// import Temp from "./Temp";

import incoming from "../assets/sounds/ball-incoming.mp3";
import outgoing from "../assets/sounds/ball-outgoing.mp3";
import gameOver from "../assets/sounds/game-over.mp3";

class SPGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      lost: false,
      servedBall: false,
      returnTimerLength: 1000,
      maxCompRet: 800,
      minCompRet: 600,
      userSwing: 0,
    };
  }

  // returnTimer is the setTimeout.  If user hits the ball, the setTimeout is cancelled, otherwise user loses.
  returnTimer;

  // soundfiles
  incomingSound = new Audio(incoming);
  outgoingSound = new Audio(outgoing);
  gameOverSound = new Audio(gameOver);

  //  keeping handleKeyDown for testing on the computer purposes
  handleKeyDown = (event) => {
    const SPACE_KEY = 32;
    switch (event.keyCode) {
      case SPACE_KEY:
        this.userHitBall();
        break;
      default:
        break;
    }
  };

  handleMotion = (event) => {
    if (event.acceleration.x > this.state.userSwing) {
      this.setState({ userSwing: event.acceleration.x });
    }
    if (event.rotationRate.alpha >= 200 && this.state.userSwing >= 15) {
      this.setState({ userSwing: 0 });
      this.userHitBall();
    }
  };

  componentDidMount() {
    // This addresses a bug where the sound was not playing the first time.
    this.incomingSound.load();
    this.outgoingSound.load();
    this.gameOverSound.load();
    document.addEventListener("keydown", this.handleKeyDown);
    window.addEventListener("devicemotion", this.handleMotion, true);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
    window.removeEventListener("devicemotion", this.handleMotion, true);
  }

  render() {
    return this.state.lost ? (
      <LoseScreen score={this.state.score} replay={this.replayGame} />
    ) : (
      <Score score={this.state.score} served={this.state.servedBall} />
    );
    // return <Temp />;
  }

  // If the user hits the ball detemine if it is a serve or a volley
  // If it is a volley increment the points and maybe speed the game up
  userHitBall = () => {
    // If user hits the ball, we want to clear the returnTimer SetTimeout from triggering.
    clearTimeout(this.returnTimer);
    this.incomingSound.play();

    if (this.state.servedBall) {
      // Increment Score
      this.setState({ score: this.state.score + 1, userSwing: 0 });
      // Every 10 hits quicken the gameplay by 10%
      if (this.state.score % 10 === 0) {
        const returnTimerLength = Math.round(
          this.state.returnTimerLength - this.state.returnTimerLength * 0.1
        );
        const maxCompRet = Math.round(
          this.state.maxCompRet - this.state.maxCompRet * 0.1
        );
        const minCompRet = Math.round(
          this.state.minCompRet - this.state.minCompRet * 0.1
        );

        this.setState({ returnTimerLength, maxCompRet, minCompRet });
      }
    } else {
      // Ball is now served
      this.setState({ servedBall: true });
    }

    // Disable user
    document.removeEventListener("keydown", this.handleKeyDown);
    window.removeEventListener("devicemotion", this.handleMotion, true);

    // Sends ball to computer
    this.compRetBall();
  };

  // Computer will wait a random number within a range before allowing sending ball back
  compRetBall = () => {
    const { maxCompRet, minCompRet } = this.state;
    const compReactTime = Math.round(
      Math.random() * (maxCompRet - minCompRet) + minCompRet
    );

    // At the end of the timeout the computer hits the ball back to the user
    setTimeout(() => {
      this.outgoingSound.play();
      this.watchForUser();
    }, compReactTime);
  };

  // Allows User to hit the ball again within alloted time.
  watchForUser = () => {
    document.addEventListener("keydown", this.handleKeyDown);
    window.addEventListener("devicemotion", this.handleMotion, true);

    //  If this is not cancelled by userHitBall, the user is a loser.
    this.returnTimer = setTimeout(() => {
      this.setState({ lost: true });
      this.gameOverSound.play();
      document.removeEventListener("keydown", this.handleKeyDown);
      window.removeEventListener("devicemotion", this.handleMotion, true);
    }, this.state.returnTimerLength);
  };

  replayGame = () => {
    document.addEventListener("keydown", this.handleKeyDown);
    window.addEventListener("devicemotion", this.handleMotion, true);
    this.setState({
      score: 0,
      lost: false,
      servedBall: false,
      returnTimerLength: 1000,
      maxCompRet: 800,
      minCompRet: 600,
      userSwing: 0,
    });
  };
}

export default SPGame;
