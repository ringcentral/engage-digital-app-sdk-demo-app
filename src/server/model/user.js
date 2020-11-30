import Sequelize from 'sequelize'
import { generate } from 'shortid'
import sequelize from './sequelize'

export const Service = sequelize.define('EngageDigitalSDKApp1User', {
  id: {
    type: Sequelize.STRING,
    primaryKey: true,
    defaultValue: generate
  },
  user: {
    type: Sequelize.JSON
  },
  token: {
    type: Sequelize.STRING
  },
  enabled: {
    type: Sequelize.BOOLEAN,
    defaultValue: true
  },
  data: { // all other data associcated with this user
    type: Sequelize.JSON
  }
})
