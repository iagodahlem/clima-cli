const menus = {
  main: `
    clima [command] <options>

    today .............. show weather for today
    forecast ........... show 10-day weather forecast
    version ............ show package version
    help ............... show help menu for a command`,

  today: `
    clima today <options>

    --location, -l ..... the location to use`,

  forecast: `
    clima forecast <options>

    --location, -l ..... the location to use`,
}

module.exports = menus
