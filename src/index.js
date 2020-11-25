import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import oauth from './routes/oauth'

const app = express()
app.use(morgan('tiny'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/test', (req, res) => res.send('server running'))
app.get('/oauth', oauth)

const {
  PORT,
  HOST
} = process.env
app.listen(PORT, HOST, () => {
  console.log('=> server running on', `http://${HOST}:${PORT}`)
})
