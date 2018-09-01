import React, { Component } from 'react'
import Button from "../../components/Button"
import { Col, ControlLabel, Form, FormControl, FormGroup, HelpBlock, Row } from 'react-bootstrap'
import styled from 'styled-components'

const StyledForm = styled(Form)`
  padding: 32px;

  > div {
    > .search-submit {
      margin-top: 25px;
    }
  }
`

class SearchForm extends Component {
  constructor(props) {
    super(props)
  }

  onChange = e => this.props.onChange(e.target.value)

  onKeyPress = e => {
    if (e.key == 'Enter') {
      e.preventDefault()
      this.props.onSubmit()
    }
  }

  renderErrorFeedback = error => {
    switch (error) {
      case 'EMPTY_VALUE':
        return <HelpBlock>You need to provide a handle.</HelpBlock>
      case 'NO_RESULTS':
        return <HelpBlock>No user was found with that handle.</HelpBlock>
      default:
        return false
    }
  }

  render() {
    return (
      <StyledForm>
        <Row>
          <Col xs={8}>
            <FormGroup validationState={this.props.error === null ? null : 'error'}>
              <ControlLabel>Screen name</ControlLabel>
              <FormControl
                onChange={this.onChange}
                onKeyPress={this.onKeyPress}
                placeholder=''
                type='text'
                value={this.props.value}
              />
              {this.renderErrorFeedback(this.props.error)}
            </FormGroup>
          </Col>
          <Col xs={4} className='search-submit'>
            <Button
              onClick={this.props.onSubmit}
              size='md'
              text='Search'
              type='primary'
            />
          </Col>
        </Row>
      </StyledForm>
    )
  }
}

export default SearchForm