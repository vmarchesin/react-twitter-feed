import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap'
import SearchForm from './route/Connects/SearchForm'
import Feed from './route/Connects/Feed'

class App extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col xs={12} md={4} mdOffset={4}>
            <SearchForm />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6} mdOffset={3}>
            <Feed />
          </Col>
        </Row>
      </div>
    )
  }
}

export default App
