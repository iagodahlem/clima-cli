const minimist = require('minimist')
const error = require('./utils/error')

const parse = (args) => {
  if (args.version || args.v) {
    return 'version'
  }

  if (args.help || args.h) {
    return 'help'
  }

  return args._[0] || 'help'
}

module.exports = () => {
  const args = minimist(process.argv.slice(2))
  const cmd = parse(args)

  switch (cmd) {
    case 'today':
      require('./cmds/today')(args)
      break
    case 'forecast':
      require('./cmds/forecast')(args)
      break
    case 'version':
      require('./cmds/version')(args)
      break
    case 'help':
      require('./cmds/help')(args)
      break
    default:
      error({
        message: `"${cmd}" is not a valid command!`,
        exit: true,
      })
      break
  }
}
