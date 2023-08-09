export const fetchISSLocation = () => {
    return fetch('http://api.open-notify.org/iss-now.json')
      .then(response => response.json())
      .then(data => data.iss_position)
      .catch(error => {
        throw error
      })
  }