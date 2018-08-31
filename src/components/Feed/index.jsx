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

      > .sort-icons {
        margin: 0 4px;

        > i {
          cursor: pointer;
        }
      }
    }
  }
`

class Feed extends Component {
  constructor(props) {
    super(props)
  }

  sortFunction = (key, order) => {
    switch (key) {
      case 'date':
        return (a, b) => {
          if (order === 'asc') {
            a = a.get('created_at')
            b = b.get('created_at')
            return (new Date(a).getTime()) - (new Date(b).getTime())
          } else {
            return (new Date(b).getTime()) - (new Date(a).getTime())
          }
        }
      case 'favs':
        return (a, b) => {
          if (order === 'asc') {
            return a.get('favorite_count') - b.get('favorite_count')
          } else {
            return b.get('favorite_count') - a.get('favorite_count')
          }
        }
      default:
        return (a, b) => a - b
    }
  }

  renderCaret = (compareKey, key, order) => {
    if (compareKey !== key) {
      return false
    }

    return order === 'asc' ? <i className='fas fa-caret-up' /> : <i className='fas fa-caret-down' />
  }

  render() {
    const { filters, onSort, tweets } = this.props
    
    if (!tweets.size) {
      return false
    }

    let sortedTweets = tweets
    const sortKey = filters.getIn(['sort', 'key'])
    const sortOrder = filters.getIn(['sort', 'order'])
    if (sortKey) {
      sortedTweets = sortedTweets.sort(this.sortFunction(sortKey, sortOrder))
    }

    return (
      <StyledFeed>
        <Row id='sort-filter'>
          <Col xs={12}>
            <span>
              Sort by
              <span className='sort-icons' data-key='date' onClick={onSort}>
                {this.renderCaret('date', sortKey, sortOrder)}
                <i className='far fa-calendar-alt' />
              </span>
            </span>
            <span>
              Sort by
              <span className='sort-icons' data-key='favs' onClick={onSort}>
                {this.renderCaret('favs', sortKey, sortOrder)}
                <i className='far fa-heart' />
              </span>
            </span>
          </Col>
        </Row>
        {sortedTweets.valueSeq().map((tweet, index, self) => (
          <React.Fragment>
            <Card tweet={tweet}/>
            {index < self.size - 1 && <hr />}
          </React.Fragment>
        ))}
      </StyledFeed>
    )
  }
}

export default Feed