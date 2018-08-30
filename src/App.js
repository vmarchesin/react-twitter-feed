import React, { Component } from 'react'
import SearchInput from './route/Connects/SearchInput'
import SubmitButton from './route/Connects/SubmitButton'
import Feed from './route/Connects/Feed'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <SearchInput placeholder="Search for a user handle..." />
        <SubmitButton text="Submit" />
        <Feed />
      </React.Fragment>
    )
  }
}

export default App
