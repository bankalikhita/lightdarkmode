// Write your code here
import './index.css'

import {Component} from 'react'

class LightDarkMode extends Component {
  state = {mode: 'Dark Mode'}

  changemode = () => {
    this.setState(prevState => ({
      mode: prevState.mode === 'Dark Mode' ? 'Light Mode' : 'Dark Mode',
    }))
  }

  render() {
    const {mode} = this.state
    const buttonContent = mode === 'Dark Mode' ? 'Light Mode' : 'Dark Mode'
    const appClassName = mode === 'Dark Mode' ? 'dark-mode' : 'light-mode'

    return (
      <div className="div">
        <div className={`${appClassName}`}>
          <h1 className="head">Click To Change Mode</h1>
          <button type="button" className="btn" onClick={this.changemode}>
            {buttonContent}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
