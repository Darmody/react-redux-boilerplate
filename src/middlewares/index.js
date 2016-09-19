import sagaMiddleware from './sagaMiddleware'

const middlewares = [
  sagaMiddleware,
]

if (process.env.NODE_ENV === 'development') {
  middlewares.push(require('redux-logger')())
}

export default middlewares
