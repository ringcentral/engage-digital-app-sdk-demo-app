import { useState, useEffect } from 'react'
import Setting from './setting'
import fetchUser from '../../common/get-user'
import { Spin } from 'antd'
import logoutFunc from '../../common/logout'
import Entry from './entry'

export default function Options () {
  const [state, setStateOrg] = useState({
    loadingUser: false,
    user: {}
  })
  function setState (update) {
    setStateOrg(old => {
      return {
        ...old,
        ...update
      }
    })
  }
  async function fetchUserInfo () {
    setState({
      loadingUser: true
    })
    const user = await fetchUser()
    const update = {
      loadingUser: false
    }
    if (user) {
      window.rc.user = user.result
      update.user = user.result
    }
    setState(update)
  }
  async function logout (e) {
    e.preventDefault()
    setState({
      loadingUser: true,
      user: {}
    })
    await logoutFunc()
    setState({
      loadingUser: false
    })
  }
  function onAuthCallack (e) {
    console.log(e)
    if (e && e.data && e.data.authDone) {
      fetchUserInfo()
    }
    window.removeEventListener('message', onAuthCallack)
  }
  function onAuth () {
    const url = window.rc.authUrlDefault
    window.open(url)
    window.addEventListener('message', onAuthCallack)
  }
  async function submit (res) {
    window.parent.postMessage({
      name: 'smcc:msg',
      data: res
    }, window.rc.edServer)
  }

  useEffect(() => {
    // window.addEventListener('message', e => {
    //   console.log('inside evet', e.data)
    // })
    fetchUserInfo()
  }, [])
  const loading = state.loadingUser
  const funcs = {
    submit,
    handleLogout: logout
  }
  if (state.user.id) {
    return (
      <Spin spinning={loading}>
        <Setting
          {...state}
          {...funcs}
          loading={loading}
        />
      </Spin>
    )
  }
  const authUrl = window.rc.authUrlDefault
  return (
    <Entry
      authUrl={authUrl}
      loadingUser={state.loadingUser}
      onAuth={onAuth}
    />
  )
}
