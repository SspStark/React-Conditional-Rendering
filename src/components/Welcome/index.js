import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {text: 'Subscribe'}

  /* state = {isSubscribed: false,}
  onSubscribe = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  getButtonText = () => {
    const {isSubscribed} = this.state

    return isSubscribed ? 'Subscribed' : 'Subscribe'
  } */

  subscribeBtn = () => {
    const {text} = this.state

    if (text === 'Subscribe') {
      this.setState(() => ({text: 'Subscribed'}))
    } else {
      this.setState(() => ({text: 'Subscribe'}))
    }
  }

  render() {
    const {text} = this.state
    // const buttonText = this.getButtonText()
    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="caption">Thank you! Happy Learning</p>
        <button className="button" type="button" onClick={this.subscribeBtn}>
          {text}
        </button>
      </div>
    )
  }
}

export default Welcome
