import React, { Component } from 'react'
import Card from "../Card"
import { Col, Row } from 'react-bootstrap'
import styled from 'styled-components'

const StyledFeed = styled.div`
  background-color: white;
  padding: 16px;

  > #sort-filter {
    text-align: right;

    > div span {
      color: #aab8c2;
      margin: 4px;
    }
  }
`

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
      <StyledFeed>
        <Row id='sort-filter'>
          <Col xs={12}>
            <span>Sort by <i className='far fa-calendar-alt'/></span>
            <span>Sort by <i className='far fa-heart'/></span>
          </Col>
        </Row>
        {tweets.valueSeq().map((tweet, index) => (
          <React.Fragment>
            <Card tweet={tweet}/>
            {index < tweets.size - 1 && <hr />}
          </React.Fragment>
        ))}
      </StyledFeed>
    )
  }
}

export default Feed