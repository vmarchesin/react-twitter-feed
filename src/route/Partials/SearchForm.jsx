import React, { Component } from 'react'
import Button from "../../components/Button"
import { Col, ControlLabel, Form, FormControl, FormGroup, Row } from 'react-bootstrap'
import styled from 'styled-components'

const StyledForm = styled(Form)`
  padding: 32px;
`

class SearchForm extends Component {
  constructor(props) {
    super(props)
  }

  onChange = e => this.props.onChange(e.target.value)

  render() {
    return (
      <StyledForm>
        <Row>
          <Col xs={8}>
            <FormGroup>
              <ControlLabel>Screen name</ControlLabel>
              <FormControl
                onChange={this.onChange}
                placeholder=''
                type='text'
                value={this.props.value}
              />
            </FormGroup>
          </Col>
          <Col xs={4}>
            <Button
              onClick={this.props.onSubmit}
              size='lg'
              text='Search'
              type='submit'
            />
          </Col>
        </Row>
      </StyledForm>
    )
  }
}

export default SearchForm