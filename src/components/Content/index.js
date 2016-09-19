import React from 'react'
import _ from 'ramda'
import setDisplayName from 'recompose/setDisplayName'
import CSSModules from 'react-css-modules'
import styles from './styles.scss'

const Content = () => (
  <div styleName="content">
    <h1> Hello, bolierplate </h1>
  </div>
)

const enhancer = _.compose(
  setDisplayName('Content'),
  CSSModules(styles),
)

export default enhancer(Content)
