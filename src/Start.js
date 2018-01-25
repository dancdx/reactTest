import React, { Component } from 'react'
import CommentList from './part4/CommentList'
class Start extends Component{
  render(){
    return(
      <div>
        <CommentList promise={()=>fetch('/response.json')}/>
      </div>
    )
  }
}
export default Start