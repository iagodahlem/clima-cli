module.exports = ({ message, exit = true } = {}) => {
  console.error(message)

  if (exit) {
    process.exit(1)
  }
}
