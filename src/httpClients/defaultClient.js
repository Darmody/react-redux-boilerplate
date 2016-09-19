import qs from 'qs'

const defaultClient = ({
  method = 'GET',
  endpoint,
  queryString = {},
  body = {},
  headers = {},
  json = false,
  credentials = 'no-cors',
}) => {
  let theHeaders = headers
  let theBody = body

  if (json) {
    theHeaders = {
      ...headers,
      'Content-Type': 'application/json',
    }

    theBody = JSON.stringify(body)
  }

  return fetch(`${endpoint}?${qs.stringify(queryString)}`, {
    method,
    headers: theHeaders,
    body: method === 'GET' ? undefined : theBody,
    credentials,
  })
}

export default defaultClient
