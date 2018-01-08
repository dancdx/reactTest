import React, { Component } from 'react'
import Tabs from './Tabs'
import TabPane from './TabPane'
import './App.css'

class App extends Component {
  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.changeSelect = this.changeSelect.bind(this)
    this.state = {
      activeIndex: 0
    }
  }
  handleChange (e) {
    this.setState({
      activeIndex: parseInt(e.target.value, 10)
    })
  }
  changeSelect (n) {
    this.setState({
      activeIndex: parseInt(n, 10)
    })
  }
  render () {
    // const {activeIndex} = this.state

    return (
      <div>
        <div className='operator'>
          <span>切换 Tab：</span>
          <select value={this.state.activeIndex} onChange={this.handleChange}>
            <option value='0'>Tab 1</option>
            <option value='1'>Tab 2</option>
            <option value='2'>Tab 3</option>
          </select>
        </div>
        <Tabs defaultActiveIndex={this.state.activeIndex} className='tabs-bar' onChange={this.changeSelect}>
          <TabPane order='0' tab={'Tab 1'}>第一个 Tab 里的内容</TabPane>
          <TabPane order='1' tab={'Tab 2'}>第二个 Tab 里的内容</TabPane>
          <TabPane order='2' tab={'Tab 3'}>第三个 Tab 里的内容</TabPane>
        </Tabs>
      </div>
    )
  }
}

export default App
