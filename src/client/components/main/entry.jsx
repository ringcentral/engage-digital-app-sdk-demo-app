/**
 * entry for user to select new webhook or
 * check webhook list
 */

import { Spin, Button, Input, notification } from 'antd'

export default function Entry (props) {
  const {
    loadingUser
  } = props
  const src = `
SMCC.initMsg = ''
SMCC.onLoad(() => {
  SMCC.Window.acceptPostMessageOrigin('${window.rc.root}')
  SMCC.Window.onPostMessage('msg', function (data, origin) {
    console.log('New data:', data, 'from:', origin)
    SMCC.initMsg = data.msg
  })
  console.log('init string is:', SMCC.initMsg)
})
  `
  function handleCopy () {
    /* Get the text field */
    const copyText = document.getElementById('copy')

    /* Select the text field */
    copyText.select()
    copyText.setSelectionRange(0, 99999)

    /* Copy the text inside the text field */
    document.execCommand('copy')
    notification.success({
      message: 'Copied!'
    })
  }
  return (
    <Spin spinning={loadingUser}>
      <div className='main'>
        <div className='pd2'>
          <div className='pd2t aligncenter'>To begin, please connect your RingCentral Engage Digital account.</div>
          <div className='pd1b pd1t aligncenter'>
            <Button
              type='primary'
              size='large'
              onClick={props.onAuth}
            >
              Connect to RingCentral Engage Digital
            </Button>
          </div>
          <div className='pd1b pd3t aligncenter'>
            <p>
              Put these code into your app's source code
              <Button
                onClick={handleCopy}
                size='small'
                className='mg1l'
              >
                copy
              </Button>
            </p>
            <Input.TextArea
              id='copy'
              rows={10}
              value={src}
            />
          </div>
        </div>
      </div>
    </Spin>
  )
}
