import React, { Component } from 'react'

class App1 extends Component {
  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit (e) {
    e.preventDefault()
    const {value} = this.refs.name
    console.log(value)
  }
  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' ref='name' defaultValue='Hangzhou' />
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}
export default App1
