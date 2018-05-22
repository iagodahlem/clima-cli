const menus = {
  main: `
    tiempo [command] <options>

    today .............. show weather for today
    version ............ show package version
    help ............... show help menu for a command
  `,
  today: `
    tiempo today <options>

    --location, -l ..... the location to use
  `,
  forecast: `
    tiempo forecast <options>

    --location, -l ..... the location to use
  `,
}

module.exports = (args) => {
  const sub = args._[0] === 'help'
    ? args._[1]
    : args._[0]

  console.log(menus[sub] || menus.main)
}
