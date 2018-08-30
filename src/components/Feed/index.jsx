import React, { Component } from 'react'
import Card from "../Card"

class Feed extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { tweets } = this.props
    
    if (!tweets.size) {
      return false
    }

    return (
      <div>
        {tweets.valueSeq().map(tweet => <Card tweet={tweet}/>)}
      </div>
    )
  }
}

export default Feed