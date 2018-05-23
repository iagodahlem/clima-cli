const axios = require('axios')
const MockAdapter = require('axios-mock-adapter')
const getWeather = require('../../src/utils/weather')

describe('weather', () => {
  const axiosMock = new MockAdapter(axios)

  beforeEach(() => {
    axiosMock.onGet('https://query.yahooapis.com/v1/public/yql').reply(200, {
      query: {
        results: {
          channel: {
            item: {
              condition: { temp: '30', text: 'Sunny' }
            }
          }
        }
      }
    })
  })

  it('returns city and region', async () => {
    const weather = await getWeather()

    expect(weather).toEqual({
      condition: { temp: '30', text: 'Sunny' }
    })
  })
})
