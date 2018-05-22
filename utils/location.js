const axios = require('axios')

module.exports = async () => {
  const result = await axios.get('https://api.ipdata.co')
  const data = result.data

  return `${data.city}, ${data.region}`
}
