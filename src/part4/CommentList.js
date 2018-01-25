import React, { Component} from 'react'
// import protoType from 'prop-types'

class CommentList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: true,
      error: null,
      value: null
    }
  }
  componentDidMount () {
    const fetchMethod = this.props.promise
    fetchMethod && fetchMethod().then(res =>  { return res.json() })
      .then(
        value => this.setState({loading: false, value}),
        err => this.setState({loading: false, err})
      )
  }
  render () {
    if (this.state.loading) {
      return <span>Loading...</span>
    } else if (this.state.error !== null) {
      return <span>Error:{this.state.error && this.state.error.message}</span>
    } else {
      const list = this.state.value && this.state.value.commentList
      return (
        <ul className='comment-box'>
          {list && list.map((entry, i) => (
            <li key={`response-${i}`} className='comment-item'>
              <p className='comment-item-name'>{entry.name}</p>
              <p className='comment-item-content'>{entry.content}</p>
            </li>
          ))}
        </ul>
      )
    }
  }
}
export default CommentList
