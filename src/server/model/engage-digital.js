/**
 * User class
 */

import RingCentralEngage from 'ringcentral-engage-client'
import { Service } from './user'

export class User extends Service {}

const { env } = process
const initOptions = {
  server: env.RINGCENTRAL_ENGAGE_DIGITAL_SERVER,
  authUrl: env.RINGCENTRAL_ENGAGE_DIGITAL_APP_AUTH_URL,
  tokenUrl: env.RINGCENTRAL_ENGAGE_DIGITAL_APP_TOKEN_URL,
  clientId: env.RINGCENTRAL_ENGAGE_DIGITAL_APP_KEY,
  clientSecret: env.RINGCENTRAL_ENGAGE_DIGITAL_APP_SECRET,
  redirectUri: env.RINGCENTRAL_APP_SERVER + '/oauth'
}

User.init = async ({ code }) => {
  const ed = new RingCentralEngage(initOptions)
  await ed.authorize({ code })
  const token = ed.token()
  let userInfo = await ed.get('/1.0/users/me')
  userInfo = userInfo.data
  const id = userInfo.id.toString()
  const where = {
    id
  }
  let user = await User.findOne({
    where
  })
  const update = {
    token,
    user: userInfo
  }
  if (user) {
    await User.update(update, {
      where
    })
    Object.assign(user, update)
    return user
  }
  user = await User.create({
    id,
    ...update
  })
  return user
}

Object.defineProperty(User.prototype, 'ed', {
  get: function () {
    const ed = new RingCentralEngage(initOptions)
    return ed
  }
})

User.prototype.authorizeUri = function (state = '') {
  const ed = new RingCentralEngage(initOptions)
  return ed.authorizeUri({
    state
  })
}

User.prototype.logout = function () {
  // todo
  return true
}
