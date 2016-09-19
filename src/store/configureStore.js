import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers'
import middlewares from '../middlewares'

const finalCreateStore = compose(
  applyMiddleware(...middlewares),
  window.devToolsExtension ? window.devToolsExtension() : fn => fn,
)(createStore)

export default (initialState) => {
  const store = finalCreateStore(rootReducer, initialState)

  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers'))
    )
  }

  return store
}
