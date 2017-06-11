export const SET_SERVICE = 'SET_SERVICE'
export const UPDATE_SERVICE = 'UPDATE_SERVICE'

export function fetchService(url) {
  return {
    type: SET_SERVICE,
    payload: {
      request: {
        url: url
      }
    }
  }
}

export function updateService(url, service) {
  return {
    type: UPDATE_SERVICE,
    payload: {
      request: {
        url: url,
        method: 'patch',
        data: service
      }
    }
  }
}