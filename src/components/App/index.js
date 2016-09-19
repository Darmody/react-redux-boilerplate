import React from 'react'
import _ from 'ramda'
import setDisplayName from 'recompose/setDisplayName'

import Content from 'components/Content'
import 'styles/app.scss'

const App = () => (
  <div>
    <Content />
  </div>
)

const enhancer = _.compose(
  setDisplayName('App'),
)

export default enhancer(App)
