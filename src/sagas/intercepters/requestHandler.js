import { put } from 'redux-saga/effects'

function* requestHandler(requestType) {
  yield put({ type: requestType })
}

export default requestHandler
