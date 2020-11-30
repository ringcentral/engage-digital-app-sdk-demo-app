import { User } from '../model/engage-digital'
import copy from 'json-deep-copy'
import jwt from 'jsonwebtoken'
import { pack, jwtPrefix, extraPath } from '../common/constants'

const { SERVER_SECRET, APP_HOME } = process.env

export default async (req, res) => {
  const { code } = req.query
  const user = await User.init({ code })
  const { id } = user
  const token = jwt.sign({
    id
  }, SERVER_SECRET, { expiresIn: '120y' })
  const red = extraPath + APP_HOME
  const data = {
    redirect: red,
    title: pack.name,
    jwtPrefix,
    token
  }
  data._global = copy(data)
  res.render('oauth', data)
}
