/**
 * main
 */

import { Input, Form, Button } from 'antd'

const FormItem = Form.Item
const { TextArea } = Input

export default function Main (props) {
  const [form] = Form.useForm()
  function handleSubmit (res) {
    props.submit(res)
  }
  return (
    <div className='main-wrap'>
      <div className='pd2'>
        <div className='main-body'>
          <div className='alignright'>
            <span onClick={props.handleLogout} className='pointer'>Logout</span>
          </div>
          <h1>RingCentral Engage Digital App setting</h1>
          <Form
            form={form}
            onFinish={handleSubmit}
          >
            <FormItem
              label='Alert message when page loaded'
              name='msg'
            >
              <TextArea rows={3} />
            </FormItem>
            <FormItem>
              <Button
                htmlType='submit'
                type='primary'
              >
                Submit
              </Button>
            </FormItem>
          </Form>
        </div>
      </div>
    </div>
  )
}
