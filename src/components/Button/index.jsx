import React from 'react'
import { Button } from 'react-bootstrap'

const Btn = ({
  onClick,
  size = 'sm',
  text,
}) => (
  <Button
    bsSize={size}
    bsStyle='primary'
    onClick={onClick}
  >
    {text}
  </Button>
)

export default Btn