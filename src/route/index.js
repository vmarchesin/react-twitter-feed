import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap'
import SearchForm from './Connects/SearchForm'
import Feed from './Connects/Feed'
import Filters from './Connects/Filters'
import ModalButton from './Connects/ModalButton'
import StatisticsModal from './Connects/StatisticsModal'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Row>
          <Col xs={12} md={4} mdOffset={4}>
            <SearchForm />
          </Col>
        </Row>
        <Row>
          <Col xs={12} style={{ textAlign: 'center' }}>
            <ModalButton
              size='lg'
              text='Show Statistics'
              type='info'
            />
          </Col>
        </Row>
        <Filters />
        <Row>
          <Col xs={12} md={6} mdOffset={3}>
            <Feed />
          </Col>
        </Row>
        <StatisticsModal />
      </React.Fragment>
    )
  }
}

export default App
