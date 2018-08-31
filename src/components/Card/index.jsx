import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap'
import styled from 'styled-components'

const StyledCard = styled.div`
  padding: 8px;

  > .user-info, .share-info {
    > div span {
      color: #aab8c2;
      margin: 4px;

      > i {
        margin-right: 4px;
      }
    }
  }

  > .content {
    padding: 8px 0;
  }
`

const Card = ({
  tweet = Map(),
}) => (
  <StyledCard>
    <Row className='user-info'>
      <Col xs={12}>
        <span className='name'>{tweet.getIn(['user', 'name'])}</span>
        <span className='screen-name'>@{tweet.getIn(['user', 'screen_name'])}</span>
      </Col>
    </Row>
    <Row className='content'>
      <Col xs={12}>
        {tweet.get('text')}
      </Col>
    </Row>
    <Row className='share-info'>
      <Col xs={12}>
        <span className='retweet-count'>
          <i className='fas fa-retweet' />{tweet.get('retweet_count')}
        </span>
        <span className='favorite-count'>
          <i className='far fa-heart' />{tweet.get('favorite_count')}
        </span>
      </Col>
    </Row>  
  </StyledCard>
)

export default Card