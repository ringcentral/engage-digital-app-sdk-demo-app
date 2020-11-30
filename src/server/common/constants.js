import { resolve } from 'path'
import crypto from 'crypto'
import { User } from '../model/engage-digital'
import copy from 'json-deep-copy'

const { RINGCENTRAL_APP_SERVER, SERVER_HOME, RINGCENTRAL_ENGAGE_DIGITAL_SERVER } = process.env
const arr = RINGCENTRAL_APP_SERVER.split('/')
const root = arr[0] + arr[1] + arr[2]
const user = new User()
const cwd = process.cwd()

export const defaultState = '__default_state_'
export const extraPath = RINGCENTRAL_APP_SERVER.replace(root, '')
export const pack = require(resolve(cwd, 'package.json'))
export const jwtPrefix = crypto.createHash('md5').update(RINGCENTRAL_APP_SERVER).digest('hex')
export const authUrlDefault = user.authorizeUri(defaultState)

const base = {
  version: pack.version,
  title: pack.name,
  home: SERVER_HOME,
  root,
  server: RINGCENTRAL_APP_SERVER,
  cdn: RINGCENTRAL_APP_SERVER,
  edServer: RINGCENTRAL_ENGAGE_DIGITAL_SERVER.replace('.api', ''),
  jwtPrefix,
  defaultState,
  authUrlDefault
}
base._global = copy(base)

export const data = base
