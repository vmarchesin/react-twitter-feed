import React, { Component } from 'react'

const Card = ({
  tweet = Map(),
}) => (
  <div>
      {tweet.get("text")}
  </div>
)

export default Card