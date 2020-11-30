/**
 * view index
 */

import copy from 'json-deep-copy'
import { data } from '../common/constants'

export default (req, res) => {
  res.set({
    'Cache-Control': 'no-cache'
  })
  res.render('index', copy(data))
}
