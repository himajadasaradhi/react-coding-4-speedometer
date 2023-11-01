// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  OnIncrement = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  OnDecrement = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="image"
        />
        <h2 className="subheading">Speed is {speed}mph</h2>
        <p className="para">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button
            onClick={this.OnIncrement}
            className="blue-button"
            type="button"
          >
            Accelerate
          </button>
          <button
            onClick={this.OnDecrement}
            className="white-button"
            type="button"
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}
export default Speedometer
