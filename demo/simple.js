/**
 * simple source code can be used in developer application(SDK)
 * Check available methods from https://engage-digital-api-docs.readthedocs.io/en/latest/app-sdk/methods/
 */

/**
 * run when dom loaded
 */
function onLoad () {
  // mark all 4 digital number starts with `#` as customer_id
  // check document from https://engage-digital-api-docs.readthedocs.io/en/latest/app-sdk/methods/#smcccontent
  SMCC.Content.mark({
    name: 'customer_id',
    pattern: /#\d{4}/,
    replacement: function (part) {
      return part.replace(/^#/, '')
    },
    onClick: function (value) {
      console.log('T​his is client ' + value + '​​on message with id ' + this.id())
    }
  })
}

SMCC.onLoad(onLoad)
