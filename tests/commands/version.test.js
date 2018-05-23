const versionCommand = require('../../commands/version')

describe('version command', () => {
  beforeEach(() => {
    global.console.log = jest.fn()
  })

  it('logs the package version', () => {
    versionCommand()

    expect(console.log).toBeCalled()
  })
})
