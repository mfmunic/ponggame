import React, { Component } from "react";

class Temp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      acceleration: {},
      accelerationIncludingGravity: {},
      rotationRate: {},
      accelerationx: 0,
      accelerationy: 0,
      accelerationz: 0,
      accelerationIncludingGravityx: 0,
      accelerationIncludingGravityy: 0,
      accelerationIncludingGravityz: 0,
      rotationRatealpha: 0,
      rotationRatebeta: 0,
      rotationRategamma: 0,
      interval: 0,
    };
  }

  _handleMotion = (event) => {
    this.setState({
      accelerationx:
        event.acceleration.x > this.state.accelerationx
          ? event.acceleration.x
          : this.state.accelerationx,
      accelerationy:
        event.acceleration.y > this.state.accelerationy
          ? event.acceleration.y
          : this.state.accelerationy,
      accelerationz:
        event.acceleration.z > this.state.accelerationz
          ? event.acceleration.z
          : this.state.accelerationz,
      accelerationIncludingGravityx:
        event.accelerationIncludingGravity.x >
        this.state.accelerationIncludingGravityx
          ? event.accelerationIncludingGravity.x
          : this.state.accelerationIncludingGravityx,

      accelerationIncludingGravityy:
        event.accelerationIncludingGravity.y >
        this.state.accelerationIncludingGravityy
          ? event.accelerationIncludingGravity.y
          : this.state.accelerationIncludingGravityy,

      accelerationIncludingGravityz:
        event.accelerationIncludingGravity.z >
        this.state.accelerationIncludingGravityz
          ? event.accelerationIncludingGravity.z
          : this.state.accelerationIncludingGravityz,

      rotationRatealpha:
        event.rotationRate.alpha > this.state.rotationRatealpha
          ? event.rotationRate.alpha
          : this.state.rotationRatealpha,

      rotationRatebeta:
        event.rotationRate.beta > this.state.rotationRatebeta
          ? event.rotationRate.beta
          : this.state.rotationRatebeta,

      rotationRategamma:
        event.rotationRate.gamma > this.state.rotationRategamma
          ? event.rotationRate.gamma
          : this.state.rotationRategamma,
      interval: event.interval,
    });
  };

  componentDidMount() {
    window.addEventListener("devicemotion", this._handleMotion, true);
  }

  componentWillUnmount() {
    window.removeEventListener("devicemotion", this._handleMotion, true);
  }

  render() {
    const {
      accelerationx,
      accelerationy,
      accelerationz,
      accelerationIncludingGravityx,
      accelerationIncludingGravityy,
      accelerationIncludingGravityz,
      rotationRatealpha,
      rotationRatebeta,
      rotationRategamma,
      interval,
    } = this.state;
    return (
      <div>
        <div>acceleration: x:{accelerationx}</div>
        <div>acceleration: y:{accelerationy}</div>
        <div>acceleration: z:{accelerationz}</div>
        <div>
          accelerationIncludingGravity: x: {accelerationIncludingGravityx}
        </div>
        <div>
          accelerationIncludingGravity: y: {accelerationIncludingGravityy}
        </div>
        <div>
          accelerationIncludingGravity: z: {accelerationIncludingGravityz}
        </div>
        <div>rotationRate: {rotationRatealpha}</div>
        <div>rotationRate: {rotationRatebeta}</div>
        <div>rotationRate: {rotationRategamma}</div>
        <div>interval: {interval}</div>
      </div>
    );
  }
}

export default Temp;
