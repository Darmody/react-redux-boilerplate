import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import sagas from 'sagas'
import sagaMiddleware from 'middlewares/sagaMiddleware'
import configureStore from './store/configureStore'

const store = configureStore()
const Root = require('./components/Root')

sagaMiddleware.run(sagas)

render(
  <AppContainer>
    <Root store={store} />
  </AppContainer>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept('./components/Root', () => {
    const NextRoot = require('./components/Root')

    render(
      <AppContainer>
        <NextRoot store={store} />
      </AppContainer>,
      document.getElementById('root')
    )
  })
}
