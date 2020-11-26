import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import oauth from './routes/oauth'
import jwt from 'express-jwt'

const jwtAuth = jwt({
  secret: process.env.SERVER_SECRET,
  algorithms: ['HS256']
})
const errHandler = function (err, req, res, next) {
  if (err && err.name === 'UnauthorizedError') {
    res.status(401).send('invalid token...')
  } else {
    next()
  }
}
const app = express()
app.use(morgan('tiny'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/test', (req, res) => res.send('server running'))
app.post('/api/action', jwtAuth, errHandler, api)
app.get('/oauth', oauth)
app.get('/setting', setting)

const {
  PORT,
  HOST
} = process.env
app.listen(PORT, HOST, () => {
  console.log('=> server running on', `http://${HOST}:${PORT}`)
})
