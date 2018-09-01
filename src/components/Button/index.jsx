import React from 'react'
import { Button } from 'react-bootstrap'

const Btn = ({
  disabled = false,
  onClick,
  size = 'sm',
  text,
  type = 'primary',
}) => (
  <Button
    bsSize={size}
    bsStyle={type}
    disabled={disabled}
    onClick={onClick}
  >
    {text}
  </Button>
)

export default Btn