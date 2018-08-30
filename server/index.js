const dotenv = require('dotenv')
const express = require('express')
const path = require('path')
const Twitter = require('twitter')
const bodyParser = require('body-parser')

const app = express()
dotenv.load()
const PORT = process.env.PORT || 5000

app.use(express.static(path.join(__dirname, '..', 'build/')))
app.use(bodyParser.json())

const twitterCredentials = {
  access_token_key: process.env.REACT_APP_TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.REACT_APP_TWITTER_ACCESS_TOKEN_SECRET,
  consumer_key: process.env.REACT_APP_TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.REACT_APP_TWITTER_CONSUMER_SECRET,
}

const twitterClient = new Twitter({ ...twitterCredentials })

app.post('/fetch-tweets', async (req, res) => {
  const data = req.body || {}
  const { count = 50, screen_name } = data

  try {
    const response = await twitterClient.get('statuses/user_timeline.json', { 
      count,
      screen_name,
    })
    
    res.send(response)
  } catch (error) {
    throw error
  }
})

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'))
})

app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT}`)
})
