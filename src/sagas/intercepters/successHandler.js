import { put } from 'redux-saga/effects'

function* successHandler(response, successType, schema, meta) {
  const responseJson = response.status === 204 ? {} : yield response.json()

  yield put({ type: successType, payload: responseJson, meta })
}

export default successHandler
