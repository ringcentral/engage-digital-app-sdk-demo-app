/**
 * get user info to check if logined
 */
import fetch from './fetch'

export default async function getUser (
  path = '/api/action'
) {
  const res = await fetch.post(window.rc.server + path, {
    action: 'get-user'
  }, {
    handleErr: () => {
      console.log('fetch user error')
    }
  })
  return res
}
