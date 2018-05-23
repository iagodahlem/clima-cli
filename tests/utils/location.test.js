const axios = require('axios')
const MockAdapter = require('axios-mock-adapter')
const getLocation = require('../../utils/location')

describe('location', () => {
  const axiosMock = new MockAdapter(axios)

  beforeEach(() => {
    axiosMock.onGet('https://api.ipdata.co').reply(200, {
      city: 'City',
      region: 'Region',
    })
  })

  it('returns city and region', async () => {
    const location = await getLocation()

    expect(location).toBe('City, Region')
  })
})
