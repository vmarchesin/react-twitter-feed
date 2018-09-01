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
  sortFunction = (key, order) => {
    switch (key) {
      case 'date':
        return (a, b) => {
          const compareValue = x => new Date(x.get('created_at')).getTime()
          a = compareValue(a)
          b = compareValue(b)
          return order === 'asc' ? a - b : a + b
        }
      case 'favs':
        return (a, b) => {
          const compareValue = x => x.get('favorite_count')
          a = compareValue(a)
          b = compareValue(b)
          return order === 'asc' ? a - b : a + b
        }
      default:
        return (a, b) => a - b
    }
  }

  renderCaret = (compareKey, key, order) => {
    if (compareKey !== key) {
      return false
    } else if (order === 'asc') {
      return <i className='fas fa-caret-up' style={{ marginRight: 4 }} />
    } else {
      return <i className='fas fa-caret-down' style={{ marginRight: 4 }} />
    }
  }

  render() {
    const { onSort, sort, tweets } = this.props

    if (!tweets.size) {
      return false
    }

    // Here I decided to keep the sort mechanic tied to the component, since it's easier to deal with.
    let sortedTweets = tweets
    const sortKey = sort.get('key')
    const sortOrder = sort.get('order')
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