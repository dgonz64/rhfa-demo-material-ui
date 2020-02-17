import React from 'react'
import { render } from 'react-dom'

import { App } from './components/App.jsx'
import { setLanguageByName } from 'rhfa-material-ui'

setLanguageByName('en')

render(
  <App />,
  document.getElementById('root')
)
