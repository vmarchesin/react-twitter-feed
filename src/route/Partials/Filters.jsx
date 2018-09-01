import React, { Component } from 'react'
import { Col, Collapse, ControlLabel, Form, FormControl, FormGroup, HelpBlock, Row } from 'react-bootstrap'


class Filters extends Component {
  onChange = e => {
    // This won't work properly on IE 10 and below. All modern browsers should be fine.
    const key = e.target.dataset.key
    const value = e.target.value
    this.props.onChange(key, value)
  }

  render() {
    return (
      <Collapse in={this.props.isOpen}>
        {/* TODO: Improve HelpBlocks text and/or filter names. This text shouldn't be used in an production environment.*/}
        <Row>
          <Col xs={12} md={4} mdOffset={4}>
            <h4>Filters</h4>
          </Col>
          <Col xs={12} md={4} mdOffset={4}>
            <Form>

              <Row>
                <Col xs={12} md={4}>
                  {/* TODO: Fix inputs bigger than 280. To do that just have a helper function that changes any number bigger than 280 to 280.*/}
                  <FormGroup>
                    <ControlLabel>Length</ControlLabel>
                    <FormControl
                      data-key='length'
                      max={280}
                      min={0}
                      onChange={this.onChange}
                      placeholder='0'
                      type='number'
                      value={this.props.filters.get('length')}
                    />
                    <HelpBlock>Filters for tweets with less than <i>number</i> characters.</HelpBlock>
                  </FormGroup>
                </Col>

                <Col xs={12} md={4}>
                  {/* TODO: Create a calendar picker, and enable the user to filter using a date range (before and after).*/}
                  <FormGroup>
                    <ControlLabel>Date</ControlLabel>
                    <FormControl
                      data-key='date'
                      onChange={this.onChange}
                      placeholder='DD/MM/YYYY'
                      type='text'
                      value={this.props.filters.get('date')}
                    />
                    <HelpBlock>Filters for tweets sent earlier than <i>date</i>.</HelpBlock>
                  </FormGroup>
                </Col>

                <Col xs={12} md={4}>
                  <FormGroup>
                    <ControlLabel>Favorites</ControlLabel>
                    <FormControl
                      data-key='favs'
                      min={0}
                      onChange={this.onChange}
                      placeholder='0'
                      type='number'
                      value={this.props.filters.get('favs')}
                    />
                    <HelpBlock>Filters for tweets with more than <i>number</i> favorites.</HelpBlock>
                  </FormGroup>
                </Col>
                </Row>

              <Row>
                <Col xs={12} md={4}>
                  <FormGroup>
                    <ControlLabel>Number of Mentions</ControlLabel>
                    <FormControl
                      data-key='mentions'
                      min={0}
                      onChange={this.onChange}
                      placeholder='0'
                      type='number'
                      value={this.props.filters.get('mentions')}
                    />
                    <HelpBlock>Filters for tweets with more than or equal to <i>number</i> of user mentions.</HelpBlock>
                  </FormGroup>
                </Col>

                <Col xs={12} md={4}>
                  <FormGroup>
                    <ControlLabel>Number of Hashtags</ControlLabel>
                    <FormControl
                      data-key='hashtags'
                      min={0}
                      onChange={this.onChange}
                      placeholder='0'
                      type='number'
                      value={this.props.filters.get('hashtags')}
                    />
                    <HelpBlock>Filters for tweets with more than or equal to <i>number</i> of hashtags.</HelpBlock>
                  </FormGroup>
                </Col>

                <Col xs={12} md={4}>
                  <FormGroup>
                    <ControlLabel>Content</ControlLabel>
                    <FormControl
                      data-key='substring'
                      onChange={this.onChange}
                      type='text'
                      value={this.props.filters.get('substring')}
                    />
                    <HelpBlock>Search for any content inside the tweet.</HelpBlock>
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <Col xs={12} md={4}>
                  <FormGroup>
                    <ControlLabel>Mention Match</ControlLabel>
                    <FormControl
                      data-key='mentionMatch'
                      onChange={this.onChange}
                      type='text'
                      value={this.props.filters.get('mentionMatch')}
                    />
                    <HelpBlock>Search for a mention. Should be exact, and without the <i>@</i>.</HelpBlock>
                  </FormGroup>
                </Col>

                <Col xs={12} md={4}>
                  <FormGroup>
                    <ControlLabel>Hashtag Match</ControlLabel>
                    <FormControl
                      data-key='hashtagMatch'
                      onChange={this.onChange}
                      type='text'
                      value={this.props.filters.get('hashtagMatch')}
                    />
                    <HelpBlock>Search for a hashtag. Should be exact, and without the <i>#</i>.</HelpBlock>
                  </FormGroup>
                </Col>
              </Row>

            </Form>
          </Col>
        </Row>
      </Collapse>
    )
  }
}

export default Filters