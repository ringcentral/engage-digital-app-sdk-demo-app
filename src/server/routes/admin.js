
import { User } from '../model/engage-digital'
import basicAuth from 'express-basic-auth'

const {
  RINGCENTRAL_ADMIN_USERNAME,
  RINGCENTRAL_ADMIN_PASSWORD
} = process.env

const auth = basicAuth({
  users: {
    [RINGCENTRAL_ADMIN_USERNAME]: RINGCENTRAL_ADMIN_PASSWORD
  }
})

// create database tables if not exists
const initDb = async (req, res) => {
  await User.sync()
  res.send('ok')
}

export default (app) => {
  app.put('/admin/setup-database', auth, initDb)
}
