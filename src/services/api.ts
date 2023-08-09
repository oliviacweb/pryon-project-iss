export const fetchISSLocation = () => {
    return fetch('http://api.open-notify.org/iss-now.json')
      .then(response => response.json())
      .then(data => data.iss_position)
      .catch(error => {
        throw error
      })
  }
  
  export const fetchAstronauts = async () => {
    try {
      const response = await fetch('http://api.open-notify.org/astros.json')
      const data = await response.json()
      return data.people
    } catch (error) {
      throw error
    }
  }