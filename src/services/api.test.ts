import { fetchISSLocation, fetchAstronauts } from './api'

// Mock global.fetch
;(global.fetch as jest.Mock) = jest.fn()

describe('ISS Location Service', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('fetches ISS location successfully', async () => {
    const mockData = {
      iss_position: {
        latitude: 123,
        longitude: 456
      }
    }

    ;(global.fetch as jest.Mock).mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockData)
    })

    const result = await fetchISSLocation()

    expect(global.fetch).toHaveBeenCalledWith(
      'http://api.open-notify.org/iss-now.json'
    )
    expect(result).toEqual(mockData.iss_position)
  })

  it('throws an error when fetching fails', async () => {
    const errorMessage = 'Failed to fetch'
    ;(global.fetch as jest.Mock).mockRejectedValueOnce(new Error(errorMessage))
    await expect(fetchISSLocation()).rejects.toThrow(errorMessage)
  })
})

describe('Astronauts Service', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('fetches astronauts successfully', async () => {
    const mockData = {
      people: [
        { name: 'Test 1', craft: 'ISS' },
        { name: 'Test 2', craft: 'NASA' }
      ]
    }

    ;(global.fetch as jest.Mock).mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockData)
    })

    const result = await fetchAstronauts()

    expect(global.fetch).toHaveBeenCalledWith(
      'http://api.open-notify.org/astros.json'
    )
    expect(result).toEqual(mockData.people)
  })

  it('throws an error when fetching astronauts fails', async () => {
    const errorMessage = 'Failed to fetch astronauts'
    ;(global.fetch as jest.Mock).mockRejectedValueOnce(new Error(errorMessage))

    await expect(fetchAstronauts()).rejects.toThrow(errorMessage)
  })
})