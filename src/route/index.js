import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap'
import SearchForm from './Connects/SearchForm'
import Feed from './Connects/Feed'
import Filters from './Connects/Filters'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Row>
          <Col xs={12} md={4} mdOffset={4}>
            <SearchForm />
          </Col>
        </Row>
        <Filters />
        <Row>
          <Col xs={12} md={6} mdOffset={3}>
            <Feed />
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default App
