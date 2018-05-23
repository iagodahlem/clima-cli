const error = require('../../utils/error')

describe('error', () => {
  beforeEach(() => {
    global.console.error = jest.fn()
    global.process.exit = jest.fn()
  })

  it('logs a error message and exit by default', () => {
    error({ message: 'error message' })

    expect(process.exit).toBeCalled()
    expect(console.error).toBeCalled()
    expect(console.error).toBeCalledWith('error message')
  })

  it('logs a error message and do not exit', () => {
    error({ message: 'error message', exit: false })

    expect(process.exit).not.toBeCalled()
    expect(console.error).toBeCalled()
    expect(console.error).toBeCalledWith('error message')
  })
})
