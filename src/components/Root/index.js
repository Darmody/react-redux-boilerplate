import React from 'react'
import { Provider } from 'react-redux'
import App from 'components/App'

module.exports = ({ store }) => (
  <Provider store={store}>
    <App />
  </Provider>
)
