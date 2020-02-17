import React, { useEffect, useRef, useReducer } from 'react'
import brace from 'brace'
import AceEditor from 'react-ace'
import { NotificationContainer } from 'react-notifications'

import 'brace/mode/javascript'
import 'brace/mode/jsx'
import 'brace/theme/github'

import { editing } from '../ducks'

import { DemoForm } from './DemoForm'
import { DemoConfig } from './DemoConfig'
import { formCode } from './formCode'
import { Panel } from './Panel'
import { Button } from './Button'

import { Grid, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import 'react-notifications/lib/notifications.css'
import '../globals.css'

const width = '90%'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    '& .MuiTextField-root': {
      width
    },
    '& .MuiSlider-root': {
      width
    },
    '& .MuiCard-root': {
      maxWidth: width
    }
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

const handleChange = (changeCode, code) => {
  changeCode(code)
}

export const App = () => {
  const sampleEl = useRef(null)
  const classes = useStyles()

  const [ { code, edit, config }, dispatch ] = useReducer(
    editing.reducer,
    editing.initial
  )
  const actions = editing.mapActions(dispatch)

  useEffect(() => {
    const { editor } = sampleEl.current

    editor.setOptions({
      readOnly: true,
      highlightActiveLine: false,
      highlightGutterLine: false
    })

    editor.renderer.$cursorLayer.element.style.display = 'none'
  })

  const updateRender = () => {
  }

  const handleSubmit = (config) => {
    actions.fix(config)
  }

  return (
    <Grid container className={classes.root} spacing={1}>
      <Grid item xs={12}>
        <h3>
          <a href="https://github.com/dgonz64/react-hook-form-auto">
            react-hook-form-auto demo with Bootstrap 4
          </a>
        </h3>
      </Grid>
      <Grid item xs={6}>
        <Panel
          header="Schema (edit and see the results in real time)"
          noMargin
        >
          <AceEditor
            mode="javascript"
            theme="github"
            onChange={handleChange.bind(null, actions.changeCode)}
            value={edit}
            width="100%"
            name="editor"
          />
          <p><small>
            Editor thanks to{' '}
            <a href="https://github.com/securingsincity/react-ace">
              React-Ace
            </a>
          </small></p>
        </Panel>
      </Grid>
      <Grid item xs={6}>
        <Panel header="Form parameters">
          <DemoConfig
            onSubmit={handleSubmit}
            config={config}
          >
            <div>
              <Button type="submit">
                Update
              </Button>
            </div>
          </DemoConfig>
        </Panel>
        <Panel header="Form element" noMargin>
          <AceEditor
            mode="jsx"
            theme="github"
            value={formCode(config)}
            name="sample"
            maxLines={5}
            readOnly
            ref={sampleEl} 
          />
        </Panel>
        <Panel header="Generated form" borderType="primary">
          <DemoForm code={code} config={config} />
        </Panel>
      </Grid>
      <NotificationContainer />
    </Grid>
  )
}
