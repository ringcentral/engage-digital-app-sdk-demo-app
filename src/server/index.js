import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import oauth from './routes/oauth'
import jwt from 'express-jwt'
import setting from './routes/setting'
import api from './routes/api'
import initDb from './common/init-db'
import admin from './routes/admin'
import { resolve } from 'path'

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
app.set('views', resolve(__dirname, './views'))
app.set('view engine', 'pug')

app.get('/test', (req, res) => res.send('server running'))
app.post('/api/action', jwtAuth, errHandler, api)
app.get('/oauth', oauth)
app.get(process.env.SERVER_HOME, setting)
admin(app)

const {
  RINGCENTRAL_PORT: port,
  RINGCENTRAL_HOST: host
} = process.env
app.listen(port, host, () => {
  initDb()
  console.log('=> server running on', `http://${host}:${port}`)
})
