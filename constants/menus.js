const menus = {
  main: `
    tiempo [command] <options>

    today .............. show weather for today
    forecast ........... show 10-day weather forecast
    version ............ show package version
    help ............... show help menu for a command`,

  today: `
    tiempo today <options>

    --location, -l ..... the location to use`,

  forecast: `
    tiempo forecast <options>

    --location, -l ..... the location to use`,
}

module.exports = menus
