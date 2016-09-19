import requestHandler from './requestHandler'
import successHandler from './successHandler'
import failureHandler from './failureHandler'

function* httpRequestHandler(request, params, types, schema, meta) {
  let response = {}
  try {
    yield requestHandler()
    response = yield request(params)

    if (response.ok) {
      yield successHandler(response, types[1], schema, meta)
    } else {
      yield failureHandler(response, types[2], meta)
    }

  } catch (error) {
    yield failureHandler(error, types[2])
  }
}

export default httpRequestHandler
