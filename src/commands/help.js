const menus = require('../constants/menus')

module.exports = (args) => {
  const sub = args._[0] === 'help'
    ? args._[1]
    : args._[0]

  console.log(menus[sub] || menus.main)
}
