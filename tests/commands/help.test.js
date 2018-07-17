const helpCommand = require('../../src/commands/help')
const menus = require('../../src/constants/menus')

describe('help command', () => {
  const call = (arg) => {
    const args = {
      _: arg ? arg.split(' ') : [],
    }

    helpCommand(args)
  }

  beforeEach(() => {
    global.console.log = jest.fn()
  })

  describe('`help`', () => {
    it('logs the main menu', () => {
      call('help')

      expect(console.log).toBeCalledWith(menus.main)
    })
  })

  describe('`help <command>`', () => {
    it('logs the `today` menu', () => {
      call('help today')

      expect(console.log).toBeCalledWith(menus.today)
    })
  })

  describe('`clima help <command>`', () => {
    it('logs the `forecast` menu', () => {
      call('help forecast')

      expect(console.log).toBeCalledWith(menus.forecast)
    })
  })
})
