import React, { Component } from 'react'
import { Map } from 'immutable'
import { Button, Col, Modal, Row } from 'react-bootstrap'
import styled from 'styled-components'

const Card = styled(Col)`
  text-align: center;

  > div {
    font-size: 1.4rem;
    font-weight: 900;
    margin-bottom: 8px;
  }

  > table {
    width: 100%;
  }
`

class StatisticsModal extends Component {
  render() {
    const { tweets } = this.props
    if (!tweets.size) {
      return false
    }

    const favorites = tweets.reduce((acc, tweet) => acc + tweet.get('favorite_count'), 0)
    const avgFavorites = parseInt(favorites / tweets.size)
    // Here I put every mention as a simple string inside an array. Then I reduce the array, mapping each value to an object creating a frequency map, where the key is the user handle and the value is the frequency. At last, I sort this map by number of mentions, in descending order.
    const mentions = tweets.valueSeq().map(tweet => {
      return tweet.getIn(['entities', 'user_mentions']).valueSeq().map(m => m.get('screen_name'))
    }).reduce((frequencyMap, mentionArr) => {
      mentionArr.forEach(mention => {
        frequencyMap = frequencyMap.set(mention, (frequencyMap.get(mention) || 0 ) + 1)
      })
      return frequencyMap
    }, Map()).sortBy(frequency => frequency, (a, b) => b - a)

    return (
      <Modal
        show={this.props.isVisible}
        onHide={this.props.onHide}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title">
            Tweets statistics for @{this.props.user}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Card xs={12}>
              <div>Tweets Retrieved</div>
              <span>{tweets.size}</span>
            </Card>
          </Row>
          <Row>
            <Card xs={12} md={6}>
              <div>Total Favorites</div>
              <span>{favorites}</span>
            </Card>
            <Card xs={12} md={6}>
              <div>Avg Favorites</div>
              <span>{avgFavorites}</span>
            </Card>
          </Row>
          <Row>
            <Card xs={12} md={6} mdOffset={3}>
              <div>Mentions</div>
              <table>
                {mentions.entrySeq().map(([key, value]) => (
                  <tr>
                    <td style={{ textAlign: 'left' }}><strong>@{key}</strong></td>
                    <td>{value}</td>
                  </tr>
                ))}
              </table>
            </Card>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default StatisticsModal